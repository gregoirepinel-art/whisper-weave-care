// Static export: after `STATIC_EXPORT=1 vite build` (node-server preset),
// boot the built server, fetch every page, and write plain HTML files into
// `.output/public` so any static host (Render Static Site, Netlify…) can
// serve the site with no server runtime.
import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const ROUTES = [
  "/",
  "/particuliers",
  "/entreprises",
  "/tarifs",
  "/faq",
  "/contact",
  "/mentions-legales",
  "/politique-confidentialite",
  "/cgu",
];

const PORT = 41730;
const ORIGIN = `http://127.0.0.1:${PORT}`;
const PUBLIC_DIR = new URL("../.output/public/", import.meta.url).pathname;

const server = spawn("node", [join(".output", "server", "index.mjs")], {
  env: { ...process.env, PORT: String(PORT), HOST: "127.0.0.1" },
  stdio: ["ignore", "pipe", "inherit"],
});

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(ORIGIN + "/");
      if (res.status > 0) return;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("Built server did not start on " + ORIGIN);
}

function outFile(route) {
  if (route === "/") return join(PUBLIC_DIR, "index.html");
  return join(PUBLIC_DIR, route.slice(1), "index.html");
}

try {
  await waitForServer();
  for (const route of ROUTES) {
    const res = await fetch(ORIGIN + route);
    if (!res.ok) throw new Error(`Failed to fetch ${route}: ${res.status}`);
    const html = await res.text();
    const file = outFile(route);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html);
    console.log(`[static-export] ${route} -> ${file}`);
  }
  console.log("[static-export] Done — .output/public is ready to publish.");
} finally {
  server.kill("SIGTERM");
}
