import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Button from "@/app/components/button/button";
import Navbar from "@/app/components/navbar/navbar";
import { Separator } from "../components/seperator/separator";

export default function SubLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex justify-center items-center overflow-hidden h-screen bg-background">
            <div className="flex flex-col w-full px-10 lg:px-0 lg:w-2/3 h-screen space-x-4">
                <Navbar />
                <div className="flex space-x-6">
                    <div className="fixed top-7 text-black dark:text-white md:hidden -translate-x-1/2 transform left-1/2">
                        <svg width="24" height="24"><path d="M5 6h14M5 12h14M5 18h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                    </div>
                    <div className="hidden flex-col justify-start space-y-2 w-1/5 h-screen overflow-scroll py-20 md:flex text-zinc-900 dark:text-zinc-200">
                        <h1 className="text-xl font-semibold ">Getting Started</h1>
                        <Button variant="ghost" align="start" href="/docs/getting-started" className="w-full">Introduction</Button>
                        <Button variant="ghost" align="start" href="/docs/installation" className="w-full">Installation</Button>

                        <Separator className="!my-4" />

                        <h1 className="text-xl font-semibold">Components</h1>
                        <Button variant="ghost" align="start" href="/docs/alert" className="w-full">Alert</Button>
                        <Button variant="ghost" align="start" href="/docs/avatar" className="w-full">Avatar</Button>
                        <Button variant="ghost" align="start" href="/docs/badge" className="w-full">Badge</Button>
                        <Button variant="ghost" align="start" href="/docs/button" className="w-full">Button</Button>
                        <Button variant="ghost" align="start" href="/docs/card" className="w-full">Card</Button>
                        <Button variant="ghost" align="start" href="/docs/checkbox" className="w-full">Checkbox</Button>
                        <Button variant="ghost" align="start" href="/docs/choicebox" className="w-full">Choicebox</Button>
                        <Button variant="ghost" align="start" href="/docs/context-menu" className="w-full">Context Menu</Button>
                        <Button variant="ghost" align="start" href="/docs/dialog" className="w-full">Dialog</Button>
                        <Button variant="ghost" align="start" href="/docs/input" className="w-full">Input</Button>
                        <Button variant="ghost" align="start" href="/docs/select" className="w-full">Select</Button>
                        <Button variant="ghost" align="start" href="/docs/separator" className="w-full">Separator</Button>
                    </div>
                    <div className="sm:w-4/5 md:w-3/5 h-screen overflow-scroll py-20">
                        {children}
                    </div>
                    <div className="hidden md:block sm:w-1/5 h-full">

                    </div>
                </div>
            </div>
        </div>
    );
}
