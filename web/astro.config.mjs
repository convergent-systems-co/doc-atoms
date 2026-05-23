import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://doc-atoms.com",
  integrations: [react()],
  output: "static",
});
