module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter"', "-apple-system", "BlinkMacSystemFont"],
                serif: [
                    '"Inter", "Archivo"',
                    "-apple-system",
                    "BlinkMacSystemFont"
                ],
                display: ['"Inter"', "sans-serif"],
                body: ['"Inter"', "sans-serif"]
            },
            colors: {
                blue: {
                    "100": "#e5f4f8",
                    "200": "#cae9f1",
                    "300": "#abdde9",
                    "400": "#87cfe0",
                    "500": "#5ebed6",
                    "600": "#29a9c9",
                    "700": "#2598b5",
                    "800": "#20859f",
                    "900": "#1a6e83"
                }
            }
        },
        borderRadius: {
            none: "0",
            sm: ".125rem",
            default: ".25rem",
            default: "4px",
            lg: ".625rem",
            full: "9999px",
            large: "25px"
        }
    },
    variants: {},
    plugins: []
};
