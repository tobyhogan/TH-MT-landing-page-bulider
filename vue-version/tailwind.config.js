/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                accent: "var(--color-accent)",
                background: "var(--color-background)",
                font: "var(--color-text)",
                "font-accent": "var(--color-text-accent)"
            }
        }
    },
    plugins: []
};
