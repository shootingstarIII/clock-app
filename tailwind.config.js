/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#000000",
          2: "#303030",
          3: "#FFFFFF",
          4: "#D8D8D8",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Add Inter font
      },
      fontSize: {
        h1: ["200px", { lineHeight: "200px", letterSpacing: "-0.05em" }], // -5 Spacing converted to em
        h2: ["56px", { lineHeight: "68px" }],
        h3: [
          "24px",
          {
            lineHeight: "28px",
            letterSpacing: "-0.048em",
          },
        ], // Apply uppercase via class in HTML
        h4: ["20px", { lineHeight: "28px", letterSpacing: "0.04em" }], // +4 Spacing
        h5: ["18px", { lineHeight: "28px" }],
        h6: ["15px", { lineHeight: "28px", letterSpacing: "0.03em" }], // +3 Spacing
        body: ["18px", { lineHeight: "28px" }], // Body text
      },
    },
  },
  plugins: [],
};
