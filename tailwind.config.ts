import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#B8975A",
        charcoal: "#4A4A4A",
        beige: "#F7F4EF",
        "soft-gray": "#E8E5E0",
        "accent-dark": "#2C2C2C",
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(circle at 20% 50%, rgba(184,151,90,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(184,151,90,0.06) 0%, transparent 40%)",
      },
    },
  },
  plugins: [],
};

export default config;
