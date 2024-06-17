"use client"

import Link from "next/link";
import Button from "../../button/button";
import Input from "../../input/input";
import { useEffect, useState } from "react";

const pages = [
    {
        name: "Getting Started",
        description: "Learn how to get started with Flux",
        link: "/docs/getting-started"
    },
    {
        name: "Installation",
        description: "Learn how to install Flux",
        link: "/docs/installation"
    },
    {
        name: "Usage",
        description: "Learn how to use Flux",
        link: "/docs/usage"
    },
    {
        name: "Templates",
        description: "Reusable templates for your projects",
        link: "/docs/templates"
    },
    {
        name: "Icons",
        description: "Icons available in Flux",
        link: "/docs/icons"
    },
    {
        name: "Components",
        description: "Components available in Flux",
        link: "/docs/components"
    },
    {
        name: "Alert",
        description: " Alerts are used to inform users about a situation or action.",
        link: "/docs/components/alert",
        parent: "Components"
    },
    {
        name: "Avatar",
        description: "Avatars are used to represent a user or entity.",
        link: "/docs/components/avatar",
        parent: "Components"
    },
    {
        name: "Badge",
        description: "Badges are used to display a status or count.",
        link: "/docs/components/badge",
        parent: "Components"
    },
    {
        name: "Button",
        description: "Buttons are used to trigger an action.",
        link: "/docs/components/button",
        parent: "Components"
    },
    {
        name: "Card",
        description: "Cards are used to display information.",
        link: "/docs/components/card",
        parent: "Components"
    },
    {
        name: "Checkbox",
        description: "Checkboxes are used to select multiple options.",
        link: "/docs/components/checkbox",
        parent: "Components"
    },
    {
        name: "Choicebox",
        description: "Choiceboxes are used to select an option.",
        link: "/docs/components/choicebox",
        parent: "Components"
    },
    {
        name: "Context Menu",
        description: "Context menus are used to display a list of actions.",
        link: "/docs/components/context-menu",
        parent: "Components"
    },
    {
        name: "Dialog",
        description: "Dialogs are used to display important information.",
        link: "/docs/components/dialog",
        parent: "Components"
    },
    {
        name: "Dropdown",
        description: "Dropdowns are used to display a list of options.",
        link: "/docs/components/dropdown",
        parent: "Components"
    },
    {
        name: "Feedback",
        description: "Feedbacks are used to display a message.",
        link: "/docs/components/feedback",
        parent: "Components"
    },
    {
        name: "Input",
        description: "Inputs are used to accept user input.",
        link: "/docs/components/input",
        parent: "Components"
    },
    {
        name: "Select",
        description: "Selects are used to select an option from a list.",
        link: "/docs/components/select",
        parent: "Components"
    },
    {
        name: "Separator",
        description: "Separators are used to separate content.",
        link: "/docs/components/separator",
        parent: "Components"
    },
    {
        name: "Skeleton",
        description: "Skeletons are used to display a loading state.",
        link: "/docs/components/skeleton",
        parent: "Components"
    },
    {
        name: "Switch",
        description: "Switches are used to toggle between two states.",
        link: "/docs/components/switch",
        parent: "Components"
    },
    {
        name: "Textarea",
        description: "Textareas are used to accept multi-line user input.",
        link: "/docs/components/textarea",
        parent: "Components"
    },
    {
        name: "Toast",
        description: "Toasts are used to display a message.",
        link: "/docs/components/toast",
        parent: "Components"
    },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
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
                <Link href={"/docs/getting-started"} className="text-sm text-white max-md:hidden">Components</Link>
                <Link href={"/docs/templates"} className="text-sm max-md:hidden">Templates</Link>
                <Link href={"/docs/icons"} className="text-sm max-md:hidden">Icons</Link>
                <Input placeholder="Search documentation..." className="max-w-48 h-8 max-md:!hidden" outline={false} onClick={() => setDocSearchOpen(!docSearchOpen)} />
                <Link href={"https://github.com/R1ck404/FluxUI"} className="text-sm text-white">
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
                <Button variant="ghost" className="hidden max-md:block" onClick={() => setIsOpen(!isOpen)}>
                    <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                        <path clipRule="evenodd" d="M1 2H1.75H14.25H15V3.5H14.25H1.75H1V2ZM1 12.5H1.75H14.25H15V14H14.25H1.75H1V12.5ZM1.75 7.25H1V8.75H1.75H14.25H15V7.25H14.25H1.75Z" fill="currentColor" fillRule="evenodd">
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
                            <Link className="p-4 flex flex-col gap-1" key={index} href={pages.find(page => page.name === result)?.link ?? ''}>
                                <span>{result}</span>
                                <span className="text-sm text-color-secondary">{pages.find(page => page.name === result)?.description}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className={`absolute top-0 left-0 overflow-x-hidden overflow-y-scroll transition-all ${isOpen ? 'w-screen h-screen' : 'h-0 w-0'} bg-background`}>
                <div className="border-b border-border px-5 py-4">
                    <div className="flex justify-between">
                        <Link href={"/docs/getting-started"} className="text-white text-2xl font-bold pl-1">Flux</Link>
                        <div className="flex items-center space-x-4">
                            <Link href={"https://github.com/R1ck404/FluxUI"} className="text-sm text-white">
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
                            <Button variant="ghost" onClick={() => setIsOpen(false)}>
                                <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                                    <path clipRule="evenodd" d="M1 2H1.75H14.25H15V3.5H14.25H1.75H1V2ZM1 12.5H1.75H14.25H15V14H14.25H1.75H1V12.5ZM1.75 7.25H1V8.75H1.75H14.25H15V7.25H14.25H1.75Z" fill="currentColor" fillRule="evenodd">
                                    </path>
                                </svg>
                            </Button>
                        </div>
                    </div>

                    <Input placeholder="Search documentation..." className="max-w-full h-10 mt-3" outline={false} onChange={(e) => setDocSearch(e.target.value)} />
                </div>

                <div className="flex flex-col items-start p-4" onClick={() => setIsOpen(false)}>
                    {pages.filter(page => !page.parent).map((page, index) => (
                        <Link key={index} href={page.link} className="text-white text-sm font-semibold py-2">{page.name}</Link>
                    ))}

                    <ul className='pl-3 ml-3 flex flex-col before:content-[""] before:bg-stone-600 before:w-px before:top-1 before:bottom-1 before:absolute gap-1 relative'>
                        {pages.filter(page => page.parent).map((page, index) => (
                            <li key={page.name} className={`flex flex-col gap-1 mx-2`}>
                                <Button variant="ghost" className="w-full !text-color-secondary" align="start" href={page.link}>
                                    {page.name}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}