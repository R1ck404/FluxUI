import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Button from "@/app/components/button/button";
import Navbar from "@/app/components/navbar/navbar";
import { Separator } from "../components/seperator/separator";
import Badge from "../components/badge/badge";
import { Toaster } from "../components/toast/toast";

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
                    <div className="hidden flex-col justify-start space-y-2 w-2/5 lg:w-1/5 h-screen overflow-scroll py-20 !pb-28 md:flex text-zinc-900 dark:text-zinc-200 no-scrollbar">
                        <h1 className="text-xl font-semibold ">Getting Started</h1>
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
                        </Button>
                        <Button variant="ghost" align="start" href="/docs/input" className="w-full">
                            <p>Input</p>
                            <Badge color="yellow" size="sm" className="!ml-auto">Updated</Badge>
                        </Button>
                        <Button variant="ghost" align="start" href="/docs/select" className="w-full">
                            <p>Select</p>
                        </Button>
                        <Button variant="ghost" align="start" href="/docs/separator" className="w-full">Separator</Button>
                        <Button variant="ghost" align="start" href="/docs/switch" className="w-full">
                            <p>Skeleton</p>
                            <Badge color="green" size="sm" className="!ml-auto">New</Badge>
                        </Button>
                        <Button variant="ghost" align="start" href="/docs/switch" className="w-full">
                            <p>Switch</p>
                        </Button>
                        <Button variant="ghost" align="start" href="/docs/toast" className="w-full">
                            <p>Toast</p>
                            <Badge color="green" size="sm" className="!ml-auto">New</Badge>
                        </Button>
                        <Button variant="ghost" align="start" href="/docs/feedback" className="w-full">
                            <p>Feedback</p>
                            <Badge color="green" size="sm" className="!ml-auto">New</Badge>
                        </Button>
                    </div>
                    <div className="w-full xl:w-3/5 h-screen overflow-scroll py-20 no-scrollbar">
                        {children}
                    </div>
                    <div className="hidden md:block sm:w-1/5 h-full">

                    </div>
                </div>
            </div>
            <Toaster position="bottom-right" />
        </div>
    );
}
