# Nelly Global Venture PLC — Website (Full-Stack, TypeScript)

A modern, animated marketing site for NGV PLC, built with React + TypeScript
(Vite, Framer Motion) on the frontend and an Express + TypeScript API on the
backend for the partnership contact form.

## Stack
- Frontend: React 19, TypeScript, Vite, Framer Motion (scroll reveals, marquee, hero animation)
- Backend: Express + TypeScript, `/api/contact` endpoint (writes to `server/submissions.json`)

## Run it

Install once:
```
npm install
```

Terminal 1 — backend API (port 4000):
```
npm run server
```

Terminal 2 — frontend dev server (port 5173, proxies /api to the backend):
```
npm run dev
```

## Production build
```
npm run build
```
Outputs a single self-contained `dist/index.html` (all JS/CSS inlined) — open
it directly, or serve it. The contact form still needs the Express API
running (or deploy it to a host, e.g. Vercel/Render, and point fetch at it).

## Structure
- `src/components/` — Nav, Hero, Marquee, About, Journey, Areas, Values, Contact, Footer
- `src/content.ts` / `src/types.ts` — typed content data
- `server/index.ts` — Express API (contact form submissions)
