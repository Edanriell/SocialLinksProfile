import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
	plugins: [vue(), vueJsx(), VueDevTools()],
	resolve: {
		alias: [
			{ find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
			{ find: "@app", replacement: fileURLToPath(new URL("./src/app", import.meta.url)) },
			{ find: "@widgets", replacement: fileURLToPath(new URL("./src/widgets", import.meta.url)) },
			{
				find: "@widgets/social-links-profile",
				replacement: fileURLToPath(new URL("./src/widgets/social-links-profile", import.meta.url))
			},
			{ find: "@shared", replacement: fileURLToPath(new URL("./src/shared", import.meta.url)) },
			{
				find: "@shared/ui",
				replacement: fileURLToPath(new URL("./src/shared/ui", import.meta.url))
			}
		]
	}
});
