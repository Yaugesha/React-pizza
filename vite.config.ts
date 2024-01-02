import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//eslint from "react-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], //, eslint()
});
