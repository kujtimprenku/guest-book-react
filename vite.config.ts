import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/guest-book-react/",
  plugins: [react()],
  define: {
    global: "globalThis",
    "process.env": {},
  },
  // build: {
  //   commonjsOptions: { include: [] },
  // },
  // optimizeDeps: {
  //   disabled: false,
  // },
});
