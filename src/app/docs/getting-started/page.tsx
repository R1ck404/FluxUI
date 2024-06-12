"use client"

import Button from "@/app/components/button/button";
import Card from "@/app/components/card/card";

export default function GettingStarted() {
    return (
        <main className="flex flex-col space-y-8 pb-8">
            <div>
                <h1 className="text-xl font-semibold text-black dark:text-white">Getting Started</h1>
                <p className="text-black dark:text-zinc-200 text-sm">Welcome to the documentation for your UI library. This guide will help you quickly start using the components by copying and pasting them into your own React projects.</p>
            </div>

            <div>
                <h2 className="text-lg font-semibold text-black dark:text-white">Overview</h2>
                <p className="text-black dark:text-zinc-200 text-sm">Our UI library provides a collection of customizable React components that you can easily integrate into your projects. Each component is designed with a focus on simplicity, flexibility, and consistency.</p>
            </div>

            <div>
                <h2 className="text-lg font-semibold text-black dark:text-white">Copy-Paste Approach</h2>
                <p className="text-black dark:text-zinc-200 text-sm">This UI library follows a copy-paste approach. You can directly copy the component code from our documentation and paste it into your own React project. This method allows for easy integration and customization without the need for package installation.</p>
            </div>

            <Button color="dark/zinc" className="w-min" href="/docs/installation">
                <span>Installation</span>
                <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
            </Button>
        </main>
    );
}
