/** @type {import('tailwindcss').Config} */
export default {
  extend: {
    colors: {
      neonBlue: "#00f7ff",
      darkBg: "#0a0a1f",
    },
    boxShadow: {
      neon: "0 0 10px #00f7ff, 0 0 20px #00f7ff",
    },
    animation: {
      pulseGlow: "pulseGlow 2s infinite",
    },
    keyframes: {
      pulseGlow: {
        "0%, 100%": { boxShadow: "0 0 10px #00f7ff" },
        "50%": { boxShadow: "0 0 20px #00f7ff" },
      },
    },
  },
  plugins: [],
};
