import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050506",
        charcoal: "#121215",
        graphite: "#1c1c21",
        silver: "#c8ccd2",
        steel: "#8d929b",
        brand: { red: "#d9202a", gold: "#e3b341" },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
