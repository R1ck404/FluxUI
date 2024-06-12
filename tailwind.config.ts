import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class', 
    theme: {
        extend: {
            colors: {
                background: 'var(--color-background)',
                "color-default": 'var(--color-text)',
                "color-secondary": 'var(--color-text-color-secondary)',
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                accent: 'var(--color-accent)',
                border: 'var(--color-border)',
                link: 'var(--color-link)',
            },
        },
      },
    variants: {
        extend: {
            backgroundColor: ['dark'],
            textColor: ['dark'],
            borderColor: ['dark'],
            boxShadow: ['dark'],
        },
    },
    plugins: [],
};

export default config;
