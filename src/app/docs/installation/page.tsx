import Breadcrumb from "@/app/components/breadcrumb/breadcrumb";
import Card from "@/app/components/card/card";
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page";

export default function Installation() {
    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Installation" }]} currentPage="Installation" previousPage={{ name: "Getting Started", href: "/docs/getting-started" }} nextPage={{ name: "Usage", href: "/docs/usage" }}>
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
    --color-text-color-secondary: var(--color-text-lighter);
    --color-primary: var(--color-primary-light);
    --color-secondary: var(--color-secondary-light);
    --color-accent: var(--color-accent-light);
    --color-border: var(--color-border-light);
    --color-link: var(--color-link-light);

    --color-background-light: #ffffff;
    --color-text-light: #212529;
    --color-text-lighter: #495057;
    --color-primary-light: #007bff;
    --color-secondary-light: #f4f4f6;
    --color-accent-light: #ffc107;
    --color-border-light: #e9ecef;
    --color-link-light: #007bff;

    --color-background-dark: #1a1a1a;
    --color-text-dark: #f8f9fa;
    --color-text-darker: #ced4da;
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
    --color-text-color-secondary: var(--color-text-darker);
    --color-primary: var(--color-primary-dark);
    --color-secondary: var(--color-secondary-dark);
    --color-accent: var(--color-accent-dark);
    --color-border: var(--color-border-dark);
    --color-link: var(--color-link-dark);
}

@layer utilities {
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }

    .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .animate-checkmark {
        animation: draw-checkmark-in 0.3s ease forwards;
    }

    @keyframes draw-checkmark-in {
        0% {
            stroke-dasharray: 0 24;
        }

        100% {
            stroke-dasharray: 24 0;
        }
    }

    .animate-in {
        animation: fadeIn 0.2s ease forwards;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }

        100% {
            opacity: auto;
            transform: auto
        }
    }
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
            </main>
        </DocumentationPage>
    )
}