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
        background: {
          DEFAULT: "#171717",
          dark: "#1a1a2e",
          darker: "#0f0f23",
          accent: "#16213e",
        },
        text: {
          primary: "#ffffff",
          secondary: "#adb5bd",
          muted: "#6c757d",
          light: "#f8f9fa",
        },
        terminal: {
          green: "#27ca40",
          user: "#33ff33",
          host: "#3daee9",
          path: "#f39c12",
        },
        tech: {
          javascript: "#F7DF1E",
          typescript: "#3178C6",
          nodejs: "#339933",
          react: "#61DAFB",
          angular: "#D9263A",
          nextjs: "#ffffff",
        },
        contact: {
          email: "#EA4335",
          linkedin: "#0A66C2",
          github: "#ffffff",
          whatsapp: "#25D366",
          location: "#FF6B6B",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "Fira Code", "Consolas", "monospace"],
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        terminalCursorBlink: {
          "0%, 50%": { opacity: "0.85" },
          "50.01%, 100%": { opacity: "0" },
        },
      },
      animation: {
        typing: "typing 3.5s steps(40, end)",
        blink: "blink 0.7s step-end infinite",
        fadeIn: "fadeIn 0.6s ease-out",
        slideInLeft: "slideInLeft 0.5s ease-out",
        slideInRight: "slideInRight 0.5s ease-out",
        terminalCursorBlink: "terminalCursorBlink 1.06s step-start infinite",
      },
      boxShadow: {
        sidebar: "4px 0 15px rgba(0, 0, 0, 0.3)",
        card: "0 4px 20px rgba(0, 0, 0, 0.2)",
        terminal: "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 255, 0, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
