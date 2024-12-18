/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Add Roboto font
    },
    colors: {
        transparent: "transparent",
        white: "#fff",
        black: "#000",
        black_light: "#3B4747",
        primary: "#364A63",
        secondary: "#8091A7",
        default: "#ffffff",
        primary_main: "#4B97D3",
        secondary_main: "#816BFF",
        secondary_light: "#6576FF",
        success_main: "#1FCEC9",
        warning_main: "#FFBB5A",
        divider: "#DBDFEA",
    },
    maxWidth: {
        "3xl": "82.5rem",
    },
    fontSize: {
        "xs-var": [
            "0.75rem", //14px
            {
                lineHeight: "1.457rem",
            },
        ],
        "sm-var": [
            "0.875rem", //14px
            {
                lineHeight: "1.457rem",
            },
        ],
        "base-var": [
            "1rem", //16px         p
            {
                lineHeight: "1.438rem",
            },
        ],
        "lg-var": [
            "1.125rem", //18px      p
            {
                lineHeight: "1.875rem",
            },
        ],
        "xl-var": "1.25rem", //20px     h3
        "2xl-var": [
            "1.5rem", //24px        h2
            {
                lineHeight: "1.875rem",
            },
        ],
        "3xl-var": [
            "1.75rem", //28px       h1
            {
                lineHeight: "2.75rem",
            },
        ],
        "4xl-var": [
            "2rem", //32px       h1
            {
                lineHeight: "2.75rem",
            },
        ],
        "5xl-var": [
            "2.25rem", //36px       h1
            {
                lineHeight: "2.75rem",
            },
        ],
        "6xl-var": [
            "2.5rem", //40px       h1
            {
                lineHeight: "2.75rem",
            },
        ],
    },
    screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
    },
    extend: {},
},
plugins: [
    function ({ addComponents, theme }) {
        addComponents({
            ".text-3xl": {
                fontSize: theme("fontSize.2xl-var"), // sm screen

                "@screen md": {
                    fontSize: theme("fontSize.3xl-var"), // md screen
                },
                "@screen lg": {
                    fontSize: theme("fontSize.4xl-var"), // lg screen
                },
                "@screen xl": {
                    fontSize: theme("fontSize.5xl-var"), // Big screen
                },
                "@screen 2xl": {
                    fontSize: theme("fontSize.6xl-var"), // Biggest screen
                },
            },
            ".text-2xl": {
                fontSize: theme("fontSize.xl-var"), // sm screen

                "@screen xl": {
                    fontSize: theme("fontSize.xl-var"), // Big screen
                },

                "@screen 2xl": {
                    fontSize: theme("fontSize.2xl-var"), // Biggest screen
                },
            },
            ".text-xl": {
                fontSize: theme("fontSize.lg-var"), // sm screen

                "@screen lg": {
                    fontSize: theme("fontSize.xl-var"), // Biggest screen
                },
            },
            ".text-lg": {
                fontSize: theme("fontSize.base-var"), // sm screen

                "@screen 2xl": {
                    fontSize: theme("fontSize.lg-var"), // Biggest screen
                },
            },
            ".text-base": {
                fontSize: theme("fontSize.sm-var"), // sm screen
                "@screen 2xl": {
                    fontSize: theme("fontSize.base-var"), // Biggest screen
                },
            },
            ".text-sm": {
                fontSize: theme("fontSize.xs-var"), // sm screen

                "@screen 2xl": {
                    fontSize: theme("fontSize.sm-var"), // Biggest screen
                },
            },
        });
    },
],
}

