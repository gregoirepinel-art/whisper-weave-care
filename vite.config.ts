// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static-export mode (Render Static Site, GitHub Pages, Netlify):
// run `STATIC_EXPORT=1 bun run build` — pages are pre-rendered to plain HTML
// in `.output/public`, ready for any static host. The normal Lovable build
// (no env var) is untouched.
const staticExport = process.env["STATIC_EXPORT"] === "1";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Pre-render every page to static HTML so static hosts can serve the site
    // directly. Only enabled for static-export builds: it needs the node
    // preset below (the default cloudflare worker entry can't be crawled).
    prerender: { enabled: staticExport, crawlLinks: true },
    pages: staticExport
      ? [
          { path: "/" },
          { path: "/qui-suis-je" },
          { path: "/particuliers" },
          { path: "/entreprises" },
          { path: "/tarifs" },
          { path: "/faq" },
          { path: "/contact" },
          { path: "/mentions-legales" },
          { path: "/politique-confidentialite" },
          { path: "/cgu" },
        ]
      : [],
  },
  // Node preset for static exports: produces `.output/public` (static assets
  // + pre-rendered HTML) and a node server entry the pre-renderer can crawl.
  nitro: staticExport ? { preset: "node-server" } : undefined,
  vite: {
    // GitHub Pages project sites are served from a sub-path (/whisper-weave-care/).
    // Set BASE_PATH at build time in the GitHub Actions workflow; the Lovable
    // build leaves it unset and keeps the default "/" base.
    base: process.env["BASE_PATH"] || "/",
  },
});
