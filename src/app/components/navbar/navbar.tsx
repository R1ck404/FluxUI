"use client"

import { useEffect, useState } from "react";
import Button from "../button/button";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <nav className="w-full min-h-20 flex items-center justify-between border-b border-border">
            <Button variant="ghost" href="/">
                <h1 className="text-2xl font-semibold text-black dark:text-white">Flux UI</h1>
            </Button>
            <Button variant="ghost" onClick={() => setDarkMode(!darkMode)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-5 text-zinc-300 hover:text-zinc-200 dark:inline"><path fillRule="evenodd" d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z" clipRule="evenodd"></path></svg>
            </Button>
        </nav>
    );
}