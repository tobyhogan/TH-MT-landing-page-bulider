/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                title: "var(--color-title-text)",
                accent: "var(--color-accent)",
                background: "var(--color-background)",
                gradient1: "var(--accent-gradient-1)",
                gradient2: "var(--accent-gradient-2)",
                gradient3: "var(--accent-gradient-3)",
                font: "var(--color-text)",
                "font-accent": "var(--color-text-accent)",
            }
        }
    },
    plugins: []
};
