"use client";
import { useEffect, useState } from "react";
import type { Collection, FeaturedAward } from "@/lib/types";

type Content = { collections: Collection[]; featuredAwards: FeaturedAward[]; updatedAt: string };

export function AdminDashboard() {
  const [content, setContent] = useState<Content | null>(null);
  const [selected, setSelected] = useState(0);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const collection = content?.collections[selected];

  useEffect(() => { fetch("/api/admin/content").then(async r => { if (r.status === 401) location.href = "/admin/login"; else setContent(await r.json()); }); }, []);

  function updateCollection(patch: Partial<Collection>) {
    if (!content) return;
    const collections = content.collections.map((item, i) => i === selected ? { ...item, ...patch } : item);
    setContent({ ...content, collections });
  }

  async function upload(file: File) {
    setBusy(true); setMessage("Uploading image…");
    const form = new FormData(); form.append("file", file);
    const response = await fetch("/api/admin/upload", { method: "POST", body: form });
    const result = await response.json();
    if (!response.ok) { setMessage(result.error || "Upload failed"); setBusy(false); return; }
    updateCollection({ images: [...(collection?.images || []), result.url], coverImage: collection?.coverImage || result.url });
    setMessage("Image uploaded. Press Save Changes when finished."); setBusy(false);
  }

  async function save() {
    if (!content) return; setBusy(true); setMessage("Saving…");
    const response = await fetch("/api/admin/content", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(content) });
    const result = await response.json(); setBusy(false);
    setMessage(response.ok ? "Saved successfully." : result.error || "Save failed");
  }

  async function logout() { await fetch("/api/admin/logout", { method: "POST" }); location.href = "/admin/login"; }

  if (!content || !collection) return <main className="min-h-screen bg-obsidian px-6 pt-32 text-white"><p className="text-white/50">Loading admin…</p></main>;

  return <main className="min-h-screen bg-obsidian px-6 pb-24 pt-28 text-white lg:px-12"><div className="mx-auto max-w-7xl"><div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-[11px] uppercase tracking-[0.35em] text-gold">Crystal Awards</p><h1 className="mt-2 font-display text-4xl">Website Admin</h1><p className="mt-2 text-sm text-white/45">Add and manage your award images without editing code.</p></div><button onClick={logout} className="border border-white/15 px-4 py-2 text-xs uppercase tracking-widest text-white/60 hover:border-gold hover:text-gold">Sign Out</button></div>
    <div className="mt-8 grid gap-8 lg:grid-cols-[260px_1fr]"><aside className="border border-white/10 bg-obsidian-warm p-4"><p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/40">Collections</p>{content.collections.map((item, i) => <button key={item.id} onClick={() => setSelected(i)} className={`block w-full border-b border-white/5 px-3 py-3 text-left text-sm ${i === selected ? "bg-gold/10 text-gold" : "text-white/60 hover:text-white"}`}>{item.number}. {item.name}</button>)}</aside>
    <section className="border border-white/10 bg-obsidian-warm p-6 lg:p-8"><div className="grid gap-6 md:grid-cols-2"><label className="text-xs uppercase tracking-widest text-white/45">Collection name<input value={collection.name} onChange={e => updateCollection({ name: e.target.value })} className="mt-2 w-full border border-white/10 bg-black/20 px-3 py-3 text-white normal-case tracking-normal" /></label><label className="text-xs uppercase tracking-widest text-white/45">Tagline<input value={collection.tagline} onChange={e => updateCollection({ tagline: e.target.value })} className="mt-2 w-full border border-white/10 bg-black/20 px-3 py-3 text-white normal-case tracking-normal" /></label></div><label className="mt-6 block text-xs uppercase tracking-widest text-white/45">Description<textarea value={collection.description} onChange={e => updateCollection({ description: e.target.value })} rows={4} className="mt-2 w-full border border-white/10 bg-black/20 px-3 py-3 text-white normal-case tracking-normal" /></label>
      <div className="mt-8"><div className="flex items-center justify-between"><h2 className="font-display text-2xl">Images</h2><label className="cursor-pointer bg-gold px-5 py-2.5 text-[10px] uppercase tracking-widest text-obsidian">{busy ? "Working…" : "Upload Image"}<input type="file" accept="image/jpeg,image/png,image/webp,image/avif" className="hidden" disabled={busy} onChange={e => e.target.files?.[0] && upload(e.target.files[0])} /></label></div><div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">{collection.images.map((src, i) => <div key={`${src}-${i}`} className="group relative aspect-square overflow-hidden border border-white/10"><img src={src} alt="" className="h-full w-full object-cover"/><button onClick={() => updateCollection({ images: collection.images.filter((_, idx) => idx !== i) })} className="absolute right-2 top-2 bg-black/80 px-2 py-1 text-[10px] uppercase text-white opacity-0 transition group-hover:opacity-100">Remove</button>{src === collection.coverImage && <span className="absolute bottom-2 left-2 bg-black/75 px-2 py-1 text-[9px] uppercase tracking-widest text-gold">Cover</span>}</div>)}</div><p className="mt-3 text-xs text-white/35">To make an image the collection cover, copy its path into the Cover Image field below.</p><label className="mt-4 block text-xs uppercase tracking-widest text-white/45">Cover image path<input value={collection.coverImage} onChange={e => updateCollection({ coverImage: e.target.value })} className="mt-2 w-full border border-white/10 bg-black/20 px-3 py-3 text-white normal-case tracking-normal" /></label></div>
      <div className="mt-8 flex items-center gap-4"><button onClick={save} disabled={busy} className="bg-gold px-7 py-3 text-[10px] uppercase tracking-[0.25em] text-obsidian disabled:opacity-50">Save Changes</button>{message && <span className="text-sm text-white/50">{message}</span>}</div></section></div></div></main>;
}
