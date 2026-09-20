// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Pre-render every page to static HTML (dist/client) so static hosts
    // (Render Static Site, Netlify, GitHub Pages) can serve the site directly.
    prerender: { enabled: true, crawlLinks: true },
    pages: [
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
    ],
  },
  vite: {
    // GitHub Pages project sites are served from a sub-path (/whisper-weave-care/).
    // Set BASE_PATH at build time in the GitHub Actions workflow; the Lovable
    // build leaves it unset and keeps the default "/" base.
    base: process.env["BASE_PATH"] || "/",
  },
});
