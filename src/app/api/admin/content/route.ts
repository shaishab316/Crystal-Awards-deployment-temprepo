import { NextResponse } from "next/server";
import { getManagedContent, saveManagedContent } from "@/lib/admin/store";
import { isAdmin } from "@/lib/admin/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(await getManagedContent());
}

export async function PUT(request: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json();
  if (!Array.isArray(body.collections) || !Array.isArray(body.featuredAwards)) {
    return NextResponse.json({ error: "Invalid content format" }, { status: 400 });
  }
  const saved = await saveManagedContent({
    collections: body.collections,
    featuredAwards: body.featuredAwards,
    updatedAt: new Date().toISOString(),
  });
  return NextResponse.json(saved);
}
