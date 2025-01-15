import { defineConfig } from "vite";

export default defineConfig({
    server: {
        // origin: 'https://http://192.168.1.181:5173',
        origin: "https://127.0.0.1:80",
        // origin: 'https://localhost:5173', // Règle le problème des chemins dans le CSS
        warmup: {
            clientFiles: ["./src/components/*.vue", "./src/utils/big-utils.js"],
            ssrFiles: ["./src/server/modules/*.js"],
        },
    },
    base: "/assets",
    build: {
        manifest: true,
        copyPublicDir: false,
        outDir: "public/assets",
        assetsDir: "",
        rollupOptions: {
            input: ["resources/main.js", "scripts/toaster.js"],
        },
    },
});
