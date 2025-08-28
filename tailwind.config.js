/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FE5B21",
        secondary: "#a855f7",
        accent: "#22c55e",
        mutedColor: "#64748b",
        info: "#0ea5e9",
        warning: "#facc15",
        danger: "#ef4444",
        success: "#16a34a",
        dark: "#1e293b",
        light: "#f8fafc",
      },
      screens: {
        xl: "1400px",
      },
    },
  },
  plugins: [],
};
