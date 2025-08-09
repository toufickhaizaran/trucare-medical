import fs from "fs";
import path from "path";

const dist = path.resolve("dist");
const index = path.join(dist, "index.html");
const out = path.join(dist, "404.html");

if (!fs.existsSync(dist)) {
  console.error("dist/ not found. Run `npm run build` first.");
  process.exit(1);
}
if (!fs.existsSync(index)) {
  console.error("dist/index.html not found. Vite build may have failed.");
  process.exit(1);
}

fs.copyFileSync(index, out);
console.log("Created dist/404.html for GitHub Pages SPA routing.");
