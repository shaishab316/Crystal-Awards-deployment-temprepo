import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { isAdmin } from "@/lib/admin/auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { url } = await request.json();
  if (typeof url !== "string" || !url.startsWith("/uploads/")) {
    return NextResponse.json({ error: "Invalid image" }, { status: 400 });
  }
  const filename = path.basename(url);
  try {
    await fs.unlink(path.join(process.cwd(), "public", "uploads", filename));
  } catch {}
  return NextResponse.json({ ok: true });
}
