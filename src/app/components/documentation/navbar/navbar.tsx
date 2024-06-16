"use client"

import Link from "next/link";
import Button from "../../button/button";
import Input from "../../input/input";
import { useEffect, useState } from "react";

const pages = [
    {
        name: "Getting Started",
        link: "/docs/getting-started"
    },
    {
        name: "Installation",
        link: "/docs/installation"
    },
    {
        name: "Usage",
        link: "/docs/usage"
    },
    {
        name: "Templates",
        link: "/docs/templates"
    },
    {
        name: "Icons",
        link: "/docs/icons"
    },
    {
        name: "Components",
        link: "/docs/components"
    },
    {
        name: "Alert",
        link: "/docs/components/alert"
    },
    {
        name: "Avatar",
        link: "/docs/components/avatar"
    },
    {
        name: "Badge",
        link: "/docs/components/badge"
    },
    {
        name: "Button",
        link: "/docs/components/button"
    },
    {
        name: "Card",
        link: "/docs/components/card"
    },
    {
        name: "Checkbox",
        link: "/docs/components/checkbox"
    },
    {
        name: "Choicebox",
        link: "/docs/components/choicebox"
    },
    {
        name: "Context Menu",
        link: "/docs/components/context-menu"
    },
    {
        name: "Dialog",
        link: "/docs/components/dialog"
    },
    {
        name: "Dropdown",
        link: "/docs/components/dropdown"
    },
    {
        name: "Feedback",
        link: "/docs/components/feedback"
    },
    {
        name: "Input",
        link: "/docs/components/input"
    },
    {
        name: "Select",
        link: "/docs/components/select"
    },
    {
        name: "Separator",
        link: "/docs/components/separator"
    },
    {
        name: "Skeleton",
        link: "/docs/components/skeleton"
    },
    {
        name: "Switch",
        link: "/docs/components/switch"
    },
    {
        name: "Textarea",
        link: "/docs/components/textarea"
    },
    {
        name: "Toast",
        link: "/docs/components/toast"
    },
]

export default function Navbar() {
    const [docSearch, setDocSearch] = useState<string>("");
    const [docSearchOpen, setDocSearchOpen] = useState<boolean>(false);
    const [searchResults, setSearchResults] = useState<string[]>(
        pages.map(page => page.name).splice(0, 5)
    );

    useEffect(() => {
        if (docSearch.trim() === '') {
            setSearchResults(pages.map(page => page.name).splice(0, 5));
        }

        if (docSearch.length > 0) {
            const results = pages.filter(page => page.name.toLowerCase().includes(docSearch.toLowerCase()));
            setSearchResults(results.map(result => result.name));
        }
    }, [docSearch]);

    return (
        <div className="w-full z-[100] top-0 sticky bg-transparent border-b border-border">
            <div className="absolute backdrop-blur-lg w-full h-full -z-[1]"></div>
            <nav className="flex justify-end items-center px-6 gap-4 max-w-[90rem] h-16 mx-auto text-color-secondary">
                <Link href={"/"} className="flex items-center mr-auto text-color-default text-2xl font-bold">Flux</Link>
                <Link href={"/components"} className="text-sm text-white max-md:hidden">Components</Link>
                <Link href={"/templates"} className="text-sm max-md:hidden">Templates</Link>
                <Link href={"/icons"} className="text-sm max-md:hidden">Icons</Link>
                <Input placeholder="Search documentation..." className="max-w-48 h-8 max-md:!hidden" outline={false} onClick={() => setDocSearchOpen(!docSearchOpen)} />
                <Link href={"/"} className="text-sm text-white">
                    <svg data-testid="geist-icon" height="24" strokeLinejoin="round" viewBox="0 0 16 16" width="24"><g clipPath="url(#clip0_872_3147)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z" fill="currentColor"></path>
                    </g>
                        <defs>
                            <clipPath id="clip0_872_3147">
                                <rect width="16" height="16" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </Link>
                <Button variant="ghost" className="hidden max-md:block">
                    <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                        <path clip-rule="evenodd" d="M1 2H1.75H14.25H15V3.5H14.25H1.75H1V2ZM1 12.5H1.75H14.25H15V14H14.25H1.75H1V12.5ZM1.75 7.25H1V8.75H1.75H14.25H15V7.25H14.25H1.75Z" fill="currentColor" fill-rule="evenodd">
                        </path>
                    </svg>
                </Button>
            </nav>

            <div className={`absolute top-0 left-0 w-screen h-screen transition-all duration-500 backdrop-blur-xl ${!docSearchOpen ? 'hidden opacity-0' : 'flex opacity-100'}`}>
                <div className={`absolute w-full h-full backdrop-blur-3xl bg-black opacity-50`} onClick={() => setDocSearchOpen(false)}></div>
                <div className="flex flex-col mt-20 items-center w-full h-full">
                    <Input placeholder="Search documentation..." className="max-w-80 h-10" outline={false} onChange={(e) => setDocSearch(e.target.value)} />
                    <div className="absolute w-full max-w-80 h-fit bg-background rounded-lg top-32 overflow-y-auto text-color-default" onClick={() => setDocSearchOpen(false)}>
                        {searchResults.length === 0 && <span className="block p-4">No results found</span>}
                        {searchResults.map((result, index) => (
                            <Link href={pages.find(page => page.name === result)?.link ?? ''} key={index}>
                                <span className="block p-4 hover:bg-secondary">{result}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}