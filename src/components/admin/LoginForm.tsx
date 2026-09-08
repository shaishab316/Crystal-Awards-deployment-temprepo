"use client";
import { FormEvent, useState } from "react";

export function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(event: FormEvent) {
    event.preventDefault(); setBusy(true); setError("");
    const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
    if (response.ok) window.location.href = "/admin";
    else setError((await response.json()).error || "Unable to sign in");
    setBusy(false);
  }
  return <main className="min-h-screen bg-obsidian px-6 pt-32 text-white"><div className="mx-auto max-w-md border border-gold/20 bg-obsidian-warm p-8"><p className="text-[11px] uppercase tracking-[0.35em] text-gold">Crystal Awards</p><h1 className="mt-3 font-display text-4xl">Website Admin</h1><p className="mt-3 text-sm text-white/50">Sign in to manage awards, collections and images.</p><form onSubmit={submit} className="mt-8 space-y-4"><label className="block text-xs uppercase tracking-widest text-white/50">Admin Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2 w-full border border-white/15 bg-black/20 px-4 py-3 text-white outline-none focus:border-gold" /></label>{error && <p className="text-sm text-red-300">{error}</p>}<button disabled={busy} className="w-full bg-gold px-6 py-3 text-xs uppercase tracking-[0.25em] text-obsidian disabled:opacity-50">{busy ? "Signing in…" : "Sign In"}</button></form></div></main>;
}
