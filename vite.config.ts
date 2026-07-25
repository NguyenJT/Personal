import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base "./" keeps asset URLs relative so the site works both at
// nguyenjt.github.io/<repo>/ and on a custom domain.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
