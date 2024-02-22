import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
let target: string;
if (process.env.NODE_ENV === "production") {
  target = "https://lightnovelreaderserver.azurewebsites.net/api";
} else {
  target = "http://127.0.0.1:7071/api";
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: true,
    proxy: {
      "/blobApi": {
        followRedirects: true,
        target: target,
        rewrite: (path) => path.replace(/^\/blobApi/, ""),
      },
    },
  },
});
