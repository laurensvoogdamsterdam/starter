import type { Config } from "tailwindcss";

import baseConfig from "@shared/tailwind-config";

export default {
  content: ["./app/**/*.tsx"],
  presets: [baseConfig],
} satisfies Config;
