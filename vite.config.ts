import { defineConfig } from "vite"
import { fileURLToPath, URL } from "url";
import svgr from "vite-plugin-svgr"
import react from "@vitejs/plugin-react"

const getAlias = (name: string, path: string) => {
  return {
    find: name,
    replacement: fileURLToPath(new URL(path, import.meta.url)),
  }
}
const isDevMode = process.env.NODE_ENV === "development"

// https://vitejs.dev/config/yarn add vite-plugin-svgr
export default defineConfig({
  esbuild: {
    drop: isDevMode ? [] : ["console", "debugger"],
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      getAlias("@components", "./src/components"),
      getAlias("@services", "./src/services"),
      getAlias("@assets", "./src/assets"),
      getAlias("@utils", "./src/utils"),
      getAlias("@customHooks", "./src/customHooks"),
      getAlias("@pages", "./src/pages"),
      getAlias("@routes", "./src/routes"),
      getAlias("@redux", "./src/redux"),
      getAlias("@firebaseConfig/*", "src/firebaseConfig/"),
      getAlias("@context", "./src/context"),
      getAlias("@customHooks", "./src/customHooks"),
      getAlias("@axiosConfig", "./src/axiosConfig"),
      getAlias("src", "./src"),
      getAlias("@customStyles", "./src/customStyles"),
    ],
  },
})
