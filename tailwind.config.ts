import type { Config } from "tailwindcss";

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class', // Enable dark mode
    theme: {
        extend: {
            colors: {
                background: 'var(--color-background)',
                text: 'var(--color-text)',
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                accent: 'var(--color-accent)',
                border: 'var(--color-border)',
                link: 'var(--color-link)',
            },
            fontFamily: {
                sans: ['var(--font-family-sans)', ...defaultTheme.fontFamily.sans],
                serif: ['var(--font-family-serif)', ...defaultTheme.fontFamily.serif],
                mono: ['var(--font-family-mono)', ...defaultTheme.fontFamily.mono],
            },
            fontSize: {
                xs: 'var(--font-size-xs)',
                sm: 'var(--font-size-sm)',
                md: 'var(--font-size-md)',
                lg: 'var(--font-size-lg)',
                xl: 'var(--font-size-xl)',
            },
            fontWeight: {
                light: 'var(--font-weight-light)',
                normal: 'var(--font-weight-normal)',
                bold: 'var(--font-weight-bold)',
            },
            lineHeight: {
                xs: 'var(--line-height-xs)',
                sm: 'var(--line-height-sm)',
                md: 'var(--line-height-md)',
                lg: 'var(--line-height-lg)',
                xl: 'var(--line-height-xl)',
            },
            letterSpacing: {
                tight: 'var(--letter-spacing-tight)',
                normal: 'var(--letter-spacing-normal)',
                wide: 'var(--letter-spacing-wide)',
            },
            spacing: {
                xs: 'var(--spacing-xs)',
                sm: 'var(--spacing-sm)',
                md: 'var(--spacing-md)',
                lg: 'var(--spacing-lg)',
                xl: 'var(--spacing-xl)',
            },
            borderWidth: {
                thin: 'var(--border-width-thin)',
                medium: 'var(--border-width-medium)',
                thick: 'var(--border-width-thick)',
            },
            borderRadius: {
                xs: 'var(--border-radius-xs)',
                sm: 'var(--border-radius-sm)',
                md: 'var(--border-radius-md)',
                lg: 'var(--border-radius-lg)',
                xl: 'var(--border-radius-xl)',
            },
            boxShadow: {
                xs: 'var(--shadow-xs)',
                sm: 'var(--shadow-sm)',
                md: 'var(--shadow-md)',
                lg: 'var(--shadow-lg)',
                xl: 'var(--shadow-xl)',
            },
            transitionDuration: {
                fast: 'var(--transition-duration-fast)',
                normal: 'var(--transition-duration-normal)',
                slow: 'var(--transition-duration-slow)',
            },
            transitionTimingFunction: {
                linear: 'var(--transition-timing-linear)',
                ease: 'var(--transition-timing-ease)',
                'ease-in': 'var(--transition-timing-ease-in)',
                'ease-out': 'var(--transition-timing-ease-out)',
                'ease-in-out': 'var(--transition-timing-ease-in-out)',
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
