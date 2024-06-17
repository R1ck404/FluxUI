// @ts-nocheck

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Input from "@/app/components/input/input";
import { toast } from "@/app/components/toast/toast";
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page";
import Badge from "@/app/components/badge/badge";

type Icon = {
    name: string;
    svg: string;
}

const iconLibraries = {
    geist: {
        display: 'Vercel Geist',
        url: 'https://vercel.com/geist/icons',
        directory: 'geist',
    },
    radix: {
        display: 'RadixUI',
        url: 'https://icons.modulz.app/',
        directory: 'radix',
    }
};

export default function Icons() {
    const [icons, setIcons] = useState<Icon[]>([]);
    const [iconList, setIconList] = useState<string[]>([]);
    const [originalIconList, setOriginalIconList] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [activeTabs, setActiveTabs] = useState<string[]>(
        // add geist by default
        iconLibraries.geist ? ['geist'] : []
    );

    useEffect(() => {
        const fetchIconList = async () => {
            try {
                setLoading(true);
                const response = await fetch('/icons-list.json');
                const data = await response.json();
                setIconList(data);
                setOriginalIconList(data);
            } catch (error) {
                console.error('Error fetching icons list:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchIconList();
    }, []);

    useEffect(() => {
        const loadIcons = async () => {
            if (iconList.length === 0) return;
            setLoading(true);
            const newIcons: Icon[] = [];

            await Promise.all(iconList.map(async (iconFile) => {
                const name = iconFile.replace('.svg', '');
                const response = await fetch(`/icons/geist/${iconFile}`);
                const svg = await response.text();
                newIcons.push({ name, svg });
            }));

            setIcons(newIcons);
            setLoading(false);
        };

        loadIcons();
    }, [iconList]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value.toLowerCase();

        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }

        debounceTimeoutRef.current = setTimeout(() => {
            if (query.trim() === '') {
                setIconList(originalIconList);
            } else {
                const filteredIcons = originalIconList.filter((icon) => icon.toLowerCase().includes(query));
                setIconList(filteredIcons);
            }
        }, 300);
    }

    return (
        <DocumentationPage
            breadcrumbs={[{ label: "Documentation" }, { label: "Icons" }]}
            currentPage="Icons"
            previousPage={{ name: "Usage", href: "/docs/usage" }}
            nextPage={{ name: "Templates", href: "/docs/templates" }}
        >
            <h1 className="text-3xl font-semibold text-color-default">Icons</h1>
            <p className="mt-4 text-color-secondary">
                Icons are used to represent actions, objects, or concepts in a visual way.
            </p>
            <p className="text-sm text-color-secondary">
                NOTE: The icons below are scraped from the <Link href="https://vercel.com/geist/icons" target="_blank" rel="noreferrer" className="underline">GeistUI</Link> library.
                <br />
                If the owner of the library (Vercel) wants me to remove the icons, please contact me.
            </p>
            <div className="flex flex-col w-full space-y-4 !mt-4">
                <div className="flex space-x-2">
                    {Object.keys(iconLibraries).map((key) => (
                        <Badge
                            key={key}
                            color="dark/zinc"
                            className={`cursor-pointer ${activeTabs.includes(key) ? '!bg-opacity-100' : '!bg-opacity-40'}`}
                            onClick={() => {
                                if (activeTabs.includes(key)) {
                                    setActiveTabs(activeTabs.filter((tab) => tab !== key));
                                } else {
                                    setActiveTabs([...activeTabs, key]);
                                }
                            }}
                        >
                            {iconLibraries[key].display}
                        </Badge>
                    ))}
                </div>
                {/* 
                    @ts-ignore: Property 'searchInputRef' does not exist on type 'LegacyRef<HTMLInputElement>'
                */}
                <Input
                    placeholder="Search icons"
                    onChange={(e) => { handleSearch(e) }}
                    ref={searchInputRef as any} // eslint-disable-line @typescript-eslint/no-explicit-any
                    suffix={
                        <div className="w-8 h-8 flex items-center justify-center text-color-secondary">
                            {loading && <svg className="animate-spin" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                                <g clipPath="url(#clip0_2393_1490)">
                                    <path d="M8 0V4" stroke="currentColor" strokeWidth="1.5"></path>
                                    <path d="M8 16V12" opacity="0.5" stroke="currentColor" strokeWidth="1.5"></path>
                                    <path d="M3.29773 1.52783L5.64887 4.7639" opacity="0.9" stroke="currentColor" strokeWidth="1.5"></path>
                                    <path d="M12.7023 1.52783L10.3511 4.7639" opacity="0.1" stroke="currentColor" strokeWidth="1.5"></path>
                                    <path d="M12.7023 14.472L10.3511 11.236" opacity="0.4" stroke="currentColor" strokeWidth="1.5"></path>
                                    <path d="M3.29773 14.472L5.64887 11.236" opacity="0.6" stroke="currentColor" strokeWidth="1.5"></path>
                                    <path d="M15.6085 5.52783L11.8043 6.7639" opacity="0.2" stroke="currentColor" strokeWidth="1.5"></path>
                                    <path d="M0.391602 10.472L4.19583 9.23598" opacity="0.7" stroke="currentColor" strokeWidth="1.5"></path>
                                    <path d="M15.6085 10.4722L11.8043 9.2361" opacity="0.3" stroke="currentColor" strokeWidth="1.5"></path>
                                    <path d="M0.391602 5.52783L4.19583 6.7639" opacity="0.8" stroke="currentColor" strokeWidth="1.5"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2393_1490">
                                        <rect fill="white" height="16" width="16"></rect>
                                    </clipPath>
                                </defs>
                            </svg>}
                        </div>
                    }
                />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 !mt-3">
                {icons.map((icon, index) => (
                    <div 
                        key={index}
                        className="flex flex-col items-center justify-center bg-secondary text-color-secondary rounded p-4 w-full h-24 cursor-pointer"
                        onClick={() => {
                            toast.success(`Copied ${icon.name} to clipboard`);
                            navigator.clipboard.writeText(icon.svg);
                        }}
                    >
                        <div
                            className="w-8 h-8 flex items-center justify-center"
                            dangerouslySetInnerHTML={{ __html: icon.svg }}
                        />
                        <p className="text-center mt-2 text-sm">{icon.name}</p>
                    </div>
                ))}

                {/* skeleton */}
                {loading && Array.from({ length: 40 }).map((_, index) => (
                    <div key={index} className="flex flex-col items-center justify-center bg-secondary text-color-secondary rounded p-4 w-full h-24 animate-pulse">
                        <div className="w-8 h-8 bg-background" />
                        <div className="w-16 h-3 bg-background mt-2" />
                    </div>
                ))}
            </div>
        </DocumentationPage>
    )
}
