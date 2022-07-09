module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "main-span": "72px",
      },
      colors: {
        "fb-bg": "#18191a",
        "fb-header": "#242526",
        "fb-input": "#404040",
        "fb-popover": "#3e4042",
        "fb-active": "#323436",
        "fb-card": "#242526",
        fb: "#2e89ff",
        "fb-point": "#32CD32",
      },
      screens: {
        laptop: "1140px",
      },
    },
  },
  plugins: [],
};
