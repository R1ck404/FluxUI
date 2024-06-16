"use client";



import { usePathname } from 'next/navigation'
import Button from '../../button/button';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from '../../dropdown/dropdown';
import { useEffect, useState } from 'react';
const components = [
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
];

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
        name: "Icons",
        link: "/docs/icons"
    },
    {
        name: "Templates",
        link: "/docs/templates"
    },
];


export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen2, setIsOpen2] = useState(false);
    const toggleDropdown2 = () => setIsOpen2(!isOpen2);
    const [theme, setTheme] = useState('system');

    const switchTheme = (theme: string) => {
        setTheme(theme);
        setIsOpen2(false);
    }

    useEffect(() => {
        if (theme === 'system') {
            const userPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            setTheme(userPreference);
        } else if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <aside className="flex flex-col md:flex-start md:flex-shrink-0 md:w-64 md:top-16 md:sticky h-[calc(100vh-4rem)] max-md:hidden">
            <div className="overflow-y-auto overflow-x-hidden h-[calc(100vh-4rem)] p-4 flex-grow text-color-default no-scrollbar">
                <ul className="flex flex-col gap-1 max-md:hidden">
                    {pages.map((page) => (
                        <li key={page.name} className={`flex flex-col gap-1 ${pathname === page.link ? 'bg-emerald-500/50 !hover:bg-emerald-500/40 transition-colors rounded-lg' : ''}`}>
                            <Button variant="ghost" className="w-full !text-color-secondary" align="start" href={page.link}>
                                {page.name}
                            </Button>
                        </li>
                    ))}
                    <li className="flex flex-col gap-1">
                        <li className="flex flex-col gap-1 mt-4">
                            <Button variant="ghost" className="w-full font-semibold" align="start">
                                Components
                            </Button>
                        </li>

                        <div className="ease-in-out overflow-hidden pt-1 opacity-100 duration-500">
                            <ul className='pl-3 ml-3 flex flex-col before:content-[""] before:bg-stone-600 before:w-px before:top-1 before:bottom-1 before:absolute gap-1 relative'>
                                {components.map((component) => (
                                    <li key={component.name} className={`flex flex-col gap-1 mx-2 ${pathname === component.link ? 'bg-emerald-500/50 !hover:bg-emerald-500/40 transition-colors rounded-lg' : ''}`}>
                                        <Button variant="ghost" className="w-full !text-color-secondary" align="start" href={component.link}>
                                            {component.name}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="flex sticky bottom-0 bg-background py-4 border-t border-border gap-2 items-center mx-2 text-color-secondary">
                <div className="flex flex-col grow">

                    <Dropdown>
                        <DropdownTrigger onClick={toggleDropdown2}>
                            <Button variant="ghost" className="w-full !text-color-secondary" align="start">
                                <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                                    <path clip-rule="evenodd" d="M1.5 8.00005C1.5 5.53089 2.99198 3.40932 5.12349 2.48889C4.88136 3.19858 4.75 3.95936 4.75 4.7501C4.75 8.61609 7.88401 11.7501 11.75 11.7501C11.8995 11.7501 12.048 11.7454 12.1953 11.7361C11.0955 13.1164 9.40047 14.0001 7.5 14.0001C4.18629 14.0001 1.5 11.3138 1.5 8.00005ZM6.41706 0.577759C2.78784 1.1031 0 4.22536 0 8.00005C0 12.1422 3.35786 15.5001 7.5 15.5001C10.5798 15.5001 13.2244 13.6438 14.3792 10.9921L13.4588 9.9797C12.9218 10.155 12.3478 10.2501 11.75 10.2501C8.71243 10.2501 6.25 7.78767 6.25 4.7501C6.25 3.63431 6.58146 2.59823 7.15111 1.73217L6.41706 0.577759ZM13.25 1V1.75V2.75L14.25 2.75H15V4.25H14.25H13.25V5.25V6H11.75V5.25V4.25H10.75L10 4.25V2.75H10.75L11.75 2.75V1.75V1H13.25Z" fill="currentColor" fill-rule="evenodd">
                                    </path>
                                </svg>
                                <span>
                                    {theme === 'system' ? 'System' : theme === 'dark' ? 'Dark' : 'Light'}
                                </span>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu isOpen={isOpen2} position='top'>
                            <DropdownSection>
                                <DropdownItem onClick={() => switchTheme('system')}>
                                    <span>System</span>
                                </DropdownItem>
                                <DropdownItem onClick={() => switchTheme('dark')}>
                                    <span>Dark</span>
                                </DropdownItem>
                                <DropdownItem onClick={() => switchTheme('light')}>
                                    <span>Light</span>
                                </DropdownItem>
                            </DropdownSection>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <Button variant="ghost" className="w-min" align="start">
                    <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                        <g clip-path="url(#clip0_4769_1958)">
                            <path className=" fill-color-secondary" clip-rule="evenodd" d="M2.24996 14.5L3 14.5L3 16L2.24996 16C1.00732 16 -3.60115e-05 14.9926 -3.61413e-05 13.75L-3.62704e-05 12.5L1.49996 12.5L1.49996 13.75C1.49996 14.1642 1.83575 14.5 2.24996 14.5ZM4 14.5L6 14.5L6 16L4 16L4 14.5ZM6 -2.62268e-07L4 -1.74846e-07L4 1.5L6 1.5L6 -2.62268e-07ZM1.5 2.25007L1.5 3.50012L-5.46387e-07 3.50012L-6.01028e-07 2.25007C-6.55345e-07 1.00743 1.00736 7.24352e-05 2.25 7.23809e-05L3 7.23481e-05L3 1.50007L2.25 1.50007C1.83579 1.50007 1.5 1.83586 1.5 2.25007ZM1.5 11.5L1.5 8.5L-3.27835e-07 8.5L-1.96701e-07 11.5L1.5 11.5ZM1.5 4.5L1.5 7.5L-3.71547e-07 7.5L-5.02681e-07 4.5L1.5 4.5ZM6.5 13.75C6.5 14.9926 7.50736 16 8.75 16L13.75 16C14.9927 16 16 14.9926 16 13.75L16 2.25C16 1.00736 14.9927 -6.5535e-07 13.75 -6.01033e-07L8.75 -3.82475e-07C7.50736 -3.28157e-07 6.5 1.00736 6.5 2.25L6.5 13.75ZM8.75 14.5C8.33579 14.5 8 14.1642 8 13.75L8 2.25C8 1.83579 8.33579 1.5 8.75 1.5L13.75 1.5C14.1642 1.5 14.5 1.83579 14.5 2.25L14.5 13.75C14.5 14.1642 14.1642 14.5 13.75 14.5L8.75 14.5Z" fill="currentColor" fill-rule="evenodd">
                            </path>
                        </g>
                        <defs>
                            <clipPath id="clip0_4769_1958">
                                <rect fill="white" height="16" transform="translate(0 16) rotate(-90)" width="16">
                                </rect>
                            </clipPath>
                        </defs>
                    </svg>
                </Button>
            </div>
        </aside>
    );
}