import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f7f3ec",
        parchment: "#ede6d8",
        sand: "#d6c9b0",
        wheat: "#c4a97d",
        bark: "#8b6f4e",
        umber: "#4a3728",
        char: "#1e1710",
        ivory: "#fdfaf6",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        jost: ["var(--font-jost)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.3em",
        widest4: "0.4em",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      animation: {
        "fade-up": "fadeUp 1.2s cubic-bezier(0.25,0.46,0.45,0.94) forwards",
        "fade-up-delay-1": "fadeUp 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.3s forwards",
        "fade-up-delay-2": "fadeUp 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.6s forwards",
        "fade-up-delay-3": "fadeUp 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.9s forwards",
        "fade-up-delay-4": "fadeUp 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 1.2s forwards",
        "fade-up-delay-5": "fadeUp 1.2s cubic-bezier(0.25,0.46,0.45,0.94) 1.5s forwards",
        "scroll-pulse": "scrollPulse 2s ease-in-out infinite",
        "grain": "grain 8s steps(10) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "0.35", transform: "scaleY(1)" },
          "50%": { opacity: "0.85", transform: "scaleY(1.15)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "30%": { transform: "translate(2%, 1%)" },
          "50%": { transform: "translate(-1%, 2%)" },
          "70%": { transform: "translate(3%, -1%)" },
          "90%": { transform: "translate(-2%, 2%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
