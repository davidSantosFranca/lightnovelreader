import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    cors: false,
    proxy: {
      "/blobApi": {
        target: "https://lightnovelreaderserver.azurewebsites.net/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/blobApi/, ""),
      },
    },
  },
});
