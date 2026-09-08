import "server-only";
import crypto from "crypto";
import { cookies } from "next/headers";

const COOKIE = "crystal_admin_session";

function secret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "";
}

export function adminConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD && secret());
}

function sign(value: string) {
  return crypto.createHmac("sha256", secret()).update(value).digest("hex");
}

export function makeSession() {
  const value = `${Date.now()}.${crypto.randomBytes(16).toString("hex")}`;
  return `${value}.${sign(value)}`;
}

export function validSession(value: string | undefined) {
  if (!value || !adminConfigured()) return false;
  const parts = value.split(".");
  if (parts.length !== 3) return false;
  const [timestamp, nonce, signature] = parts;
  const payload = `${timestamp}.${nonce}`;
  const expected = sign(payload);
  const age = Date.now() - Number(timestamp);
  if (!Number.isFinite(age) || age < 0 || age > 1000 * 60 * 60 * 12) return false;
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

export async function isAdmin() {
  const store = await cookies();
  return validSession(store.get(COOKIE)?.value);
}

export const sessionCookieName = COOKIE;
