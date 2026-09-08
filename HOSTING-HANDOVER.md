# Crystal Awards — Hosting Handover

This package preserves the existing public website routes, navigation, collections and design. It adds a private `/admin` area so the owner can manage collection text and upload award images without editing code.

## Hosting requirement

Use a hosting plan that runs a normal Node.js/Next.js server and provides **persistent writable storage**. The admin stores managed content in `data/managed-content.json` and uploaded images in `public/uploads/`. Do not use an ephemeral/serverless-only filesystem for this version.

A VPS or Node.js application host with persistent disk is appropriate.

## Install

```bash
npm ci
npm run build
npm start
```

The default Next.js port is 3000. The hosting company can proxy the public domain to the Node process.

## Environment variables

Set these in the hosting control panel:

- `ADMIN_PASSWORD` — strong private password for `/admin`
- `ADMIN_SESSION_SECRET` — long random secret, different from the password

If the contact/proof forms are being used, also configure the existing email variables required by the project's API implementation.

## First use

1. Open `https://YOUR-DOMAIN/admin`.
2. Sign in with `ADMIN_PASSWORD`.
3. Choose a collection.
4. Edit its name/tagline/description if needed.
5. Upload JPG, PNG, WEBP or AVIF images up to 12 MB each.
6. Press **Save Changes**.

The public `/collections` pages automatically read the managed content while keeping the existing routes and layout.

## Important backup

Back up these two locations regularly:

- `data/managed-content.json`
- `public/uploads/`

If the host uses a deployment process that replaces the application directory, make sure these folders are on persistent storage and are preserved between deployments.

## Domain migration

Do not change the existing BestCrystalAwards.com DNS until the new installation has been tested on a temporary/staging URL. Once approved, the hosting company can connect the production domain.
