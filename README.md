# Swedish Crystal Heritage

Premium custom crystal awards website for master artisan Peter Johansson — Next.js App Router, Tailwind CSS, Framer Motion.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion**
- **Repository pattern** for content (`src/lib/repositories`)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Content

Site copy, collections, and process steps live in `src/data/site-data.ts` and are accessed via repositories in `src/lib/repositories`. Product photography is under `public/images`.

## Deploy

Connected to GitHub and Vercel. Push to `main` to trigger production deploys.
# crystal-awards

## Owner-friendly Admin

This version includes a private `/admin` dashboard for managing collection text and uploading award images without editing source code. See `HOSTING-HANDOVER.md` for the persistent-storage requirement and setup instructions.
