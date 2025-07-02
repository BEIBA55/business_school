module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          primary: "var(--bg-primary)",
          accent: "var(--bg-accent)",
          accentLight: "var(--bg-accent-light)",
          accentMedium: "var(--bg-accent-medium)",
          accentDark: "var(--bg-accent-dark)",
          accentDarker: "var(--bg-accent-darker)",
          lightGray: "var(--bg-light-gray)",
          light: "var(--bg-light)",
          white: "var(--bg-white)"
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          dark: "var(--text-dark)",
          muted: "var(--text-muted)",
          light: "var(--text-light)",
          white: "var(--text-white)"
        },
        pager: {
          active: "var(--pager-active)",
          inactive: "var(--pager-inactive)"
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};