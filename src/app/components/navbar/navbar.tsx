"use client"

import { useEffect, useState } from "react";
import Button from "../button/button";
import Badge from "../badge/badge";
import { Separator } from "../seperator/separator";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <nav className="fixed w-full top-0 left-0 flex items-center justify-center bg-background z-[1001]">
            <div className="flex justify-between items-center w-2/3 border-b border-border min-h-20 h-20">
                <Button variant="ghost" className="fixed top-5 text-black dark:text-white md:hidden -translate-x-1/2 transform left-1/2" onClick={() => setIsOpen(!isOpen)}>
                    <svg width="24" height="24"><path d="M5 6h14M5 12h14M5 18h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                </Button>
                <Button variant="ghost" href="/">
                    <h1 className="text-2xl font-semibold text-black dark:text-white">Flux UI</h1>
                </Button>
                <Button variant="ghost" className="relative" onClick={() => setDarkMode(!darkMode)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ccc" aria-hidden="true" data-slot="icon" className="size-5 text-zinc-300 hover:text-zinc-200 dark:inline"><path fillRule="evenodd" d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z" clipRule="evenodd"></path></svg>
                </Button>
            </div>
            <div className={`fixed top-0 left-0 w-full h-full bg-white dark:bg-zinc-900 z-[1000] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} overflow-scroll`}>
                <form className="flex flex-col items-center justify-center h-full space-y-4 text-black dark:text-white" onClick={
                    () => setIsOpen(false)

                }>
                    <h1 className="text-xl font-semibold mt-32">Getting Started</h1>
                    <Button variant="ghost" align="start" href="/docs/getting-started" className="w-full">Introduction</Button>
                    <Button variant="ghost" align="start" href="/docs/installation" className="w-full">Installation</Button>

                    <Separator className="!my-4" />

                    <h1 className="text-xl font-semibold">Components</h1>
                    <Button variant="ghost" align="start" href="/docs/alert" className="w-full">
                        <span>Alert</span>
                    </Button>
                    <Button variant="ghost" align="start" href="/docs/avatar" className="w-full">Avatar</Button>
                    <Button variant="ghost" align="start" href="/docs/badge" className="w-full">Badge</Button>
                    <Button variant="ghost" align="start" href="/docs/button" className="w-full">Button</Button>
                    <Button variant="ghost" align="start" href="/docs/card" className="w-full">Card</Button>
                    <Button variant="ghost" align="start" href="/docs/checkbox" className="w-full">
                        <p>Checkbox</p>
                        <Badge color="yellow" size="sm" className="!ml-auto">Updated</Badge>
                    </Button>
                    <Button variant="ghost" align="start" href="/docs/choicebox" className="w-full">Choicebox</Button>
                    <Button variant="ghost" align="start" href="/docs/context-menu" className="w-full">Context Menu</Button>
                    <Button variant="ghost" align="start" href="/docs/dialog" className="w-full">Dialog</Button>
                    <Button variant="ghost" align="start" href="/docs/dropdown" className="w-full">
                        <p>Dropdown</p>
                        <Badge color="green" size="sm" className="!ml-auto">New</Badge>
                    </Button>
                    <Button variant="ghost" align="start" href="/docs/input" className="w-full">
                        <p>Input</p>
                        <Badge color="yellow" size="sm" className="!ml-auto">Updated</Badge>
                    </Button>
                    <Button variant="ghost" align="start" href="/docs/select" className="w-full">
                        <p>Select</p>
                        <Badge color="green" size="sm" className="!ml-auto">New</Badge>
                    </Button>
                    <Button variant="ghost" align="start" href="/docs/separator" className="w-full">Separator</Button>
                    <Button variant="ghost" align="start" href="/docs/switch" className="w-full">
                        <p>Switch</p>
                        <Badge color="green" size="sm" className="!ml-auto">New</Badge>
                    </Button>
                    <Button variant="ghost" align="start" href="/docs/toast" className="w-full">
                        <p>Toast</p>
                        <Badge color="green" size="sm" className="!ml-auto">New</Badge>
                    </Button>
                </form>
            </div>
        </nav>
    );
}