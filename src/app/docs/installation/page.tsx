"use client"

import Button from "@/app/components/button/button";
import Card from "@/app/components/card/card";

export default function Installation() {
    return (
        <main className="flex flex-col space-y-8 pb-8">
            <div>
                <h1 className="text-xl font-semibold text-black dark:text-white">Installation</h1>
                <p className="text-black dark:text-zinc-200 text-sm">To use the components from our UI library, you'll need to set up Tailwind CSS and install the classnames package. Follow the steps below to get started.</p>
            </div>

            <div className="space-y-2">
                <h2 className="text-lg font-semibold text-black dark:text-white">1. Install Tailwind CSS (if you haven't already)</h2>
                <p className="text-black dark:text-zinc-200 text-sm">Tailwind CSS is a utility-first CSS framework that we use for styling our components. Follow these steps to install Tailwind CSS:</p>

                <h3 className="text-lg font-semibold text-black dark:text-white">Using npm:</h3>
                <Card color="dark/zinc" className="space-y-4">
                    <p>npm install tailwindcss postcss autoprefixer</p>
                </Card>

                <h3 className="text-lg font-semibold text-black dark:text-white">Using yarn:</h3>
                <Card color="dark/zinc" className="space-y-4">
                    <p>yarn add tailwindcss postcss autoprefixer</p>
                </Card>
            </div>

            <div className="space-y-2">
                <h2 className="text-lg font-semibold text-black dark:text-white">2. Configure Tailwind CSS</h2>
                <p className="text-black dark:text-zinc-200 text-sm">Once installed, you'll need to set up a Tailwind configuration file. Create a tailwind.config.js file in the root of your project and paste the following content:</p>

                <Card color="dark/zinc" className="space-y-4">
                    <pre>
                        <code>
                            {`// tailwind.config.js

import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        // Add paths to your project's directories here
    ],
    darkMode: 'class', 
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
`}
                        </code>
                    </pre>
                </Card>
            </div>
            <div className="space-y-2">
                <h3 className="text-lg font-semibold text-black dark:text-white">3. Create a CSS File</h3>
                <Card color="dark/zinc" className="space-y-4">
                    <p>In your project, create a CSS file (e.g., globals.css) and add the following content:</p>
                    <pre>
                        <code>
                            {`@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
--color-background: var(--color-background-light);
--color-text: var(--color-text-light);
--color-primary: var(--color-primary-light);
--color-secondary: var(--color-secondary-light);
--color-accent: var(--color-accent-light);
--color-border: var(--color-border-light);
--color-link: var(--color-link-light);

--color-background-light: #ffffff;
--color-text-light: #212529;
--color-primary-light: #007bff;
--color-secondary-light: #f4f4f6;
--color-accent-light: #ffc107;
--color-border-light: #e9ecef;
--color-link-light: #007bff;

--color-background-dark: #1a1a1a;
--color-text-dark: #f8f9fa;
--color-primary-dark: #0d6efd;
--color-secondary-dark: #262628;
--color-accent-dark: #ffc107;
--color-border-dark: #495057;
--color-link-dark: #66b2ff;
}

[data-theme="dark"],
.dark {
--color-background: var(--color-background-dark);
--color-text: var(--color-text-dark);
--color-primary: var(--color-primary-dark);
--color-secondary: var(--color-secondary-dark);
--color-accent: var(--color-accent-dark);
--color-border: var(--color-border-dark);
--color-link: var(--color-link-dark);
}`}
                        </code>
                    </pre>
                </Card>
            </div>
            <div className="space-y-2">

                <h3 className="text-lg font-semibold text-black dark:text-white">4. Install the classnames Package</h3>
                <p className="text-black dark:text-zinc-200 text-sm">classnames is a utility for conditionally joining classNames together. Install it using npm or yarn:</p>
                <h3 className="text-lg font-semibold text-black dark:text-white">Using npm:</h3>
                <Card color="dark/zinc" className="space-y-4">
                    <p>npm install classnames                    </p>
                </Card>

                <h3 className="text-lg font-semibold text-black dark:text-white">Using yarn:</h3>
                <Card color="dark/zinc" className="space-y-4">
                    <p>yarn add classnames</p>
                </Card>
            </div>

            <div className="w-full flex justify-between mt-8">
                <Button color="dark/zinc" className="w-min" href="/docs/getting-started">
                    <svg className="rotate-180" width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                    <span>Getting Started</span>
                </Button>
                <Button color="dark/zinc" className="w-min" href="/docs/alert">
                    <span>Alert</span>
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                </Button>
            </div>
        </main>
    );
}
