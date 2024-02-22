import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
console.log(process.env.VITE_API);
// https://vitejs.dev/config/

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };
  return defineConfig({
    plugins: [react()],
    server: {
      cors: true,
      port: 8080,
      proxy: {
        "/blobApi": {
          followRedirects: true,
          target: process.env.VITE_API,
          rewrite: (path) => path.replace(/^\/blobApi/, ""),
        },
      },
    },
  });
};
