import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        paper: "var(--paper)",
        "signal-red": "var(--signal-red)",
        stone: "var(--stone)",
        mute: "var(--mute)",
      },
      fontFamily: {
        display: ["'Neue Montreal'", "sans-serif"],
        body: ["'Neue Montreal'", "sans-serif"],
        mono: ["'Neue Montreal'", "sans-serif"],
        accent: ["'Lorraine Script Regular'", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
