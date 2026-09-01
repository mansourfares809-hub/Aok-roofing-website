# Aok Roofing Website — standalone reconstruction

This project was reconstructed from the Aok Roofing React/Vite/Tailwind source files supplied in the conversation.

## Run locally

1. Install Node.js (18+ recommended).
2. Open a terminal in this folder.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL Vite prints (usually http://localhost:5173).

## Important note about the quote form

The original `QuoteForm.jsx` used a PocketBase collection named `quote_requests` through `src/lib/pocketbaseClient`.

That PocketBase client file was not available in the supplied source, so this standalone reconstruction uses a `mailto:` submission instead. It opens the visitor's email app and prepares a quote request addressed to `jeff@aokroofinginc.com`.

This means the site can run without a PocketBase account or secret credentials, but it does NOT automatically save submissions to a database.

## Image URLs

The homepage retains the Hostinger image URLs present in the supplied source. If those URLs are later removed or access changes, download the images and put them in `public/`, then update `HomePage.jsx` to use local paths.

## Source

The core page/component code is based on the source supplied by the user in this conversation.
