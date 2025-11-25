import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use a relative base for production so the site works when hosted under any path (GitHub Pages)
  // `import.meta.env.BASE_URL` will reflect this at runtime. Using './' makes asset links relative.
  base: mode === "development" ? "/" : "./",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
