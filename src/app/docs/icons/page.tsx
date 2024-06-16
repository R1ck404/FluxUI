"use client"
import Breadcrumb from "@/app/components/breadcrumb/breadcrumb";
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page";

import { useState, useEffect, useRef, useCallback } from "react";
import Input from "@/app/components/input/input";
import { toast } from "@/app/components/toast/toast";
import Link from "next/link";

type Icon = {
    name: string;
    svg: string;
}

export default function Icons() {
    const [icons, setIcons] = useState<Icon[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [iconList, setIconList] = useState<string[]>([]);
    const [originalIconList, setOriginalIconList] = useState<string[]>([]);
    const loaderRef = useRef<HTMLDivElement>(null);

    const iconsPerPage = 20;

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

    const loadIcons = useCallback(async () => {
        if (iconList.length === 0) return;
        setLoading(true);
        const start = page * iconsPerPage;
        const newIcons: Icon[] = [];

        for (let i = start; i < Math.min(start + iconsPerPage, iconList.length); i++) {
            const name = iconList[i].replace('.svg', '');
            const response = await fetch(`/icons/${iconList[i]}`);
            const svg = await response.text();
            newIcons.push({ name, svg });
        }

        setIcons((prevIcons) => [...prevIcons, ...newIcons]);
        if (newIcons.length < iconsPerPage) {
            setHasMore(false);
        }
        setLoading(false);
    }, [page, iconList]);

    useEffect(() => {
        loadIcons();
    }, [page, loadIcons]);

    const handleObserver = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const target = entries[0];
            if (target.isIntersecting && hasMore && !loading) {
                setPage((prev) => prev + 1);
            }
        },
        [hasMore, loading]
    );

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        });
        if (loaderRef.current) observer.observe(loaderRef.current);

        return () => {
            if (loaderRef.current) observer.unobserve(loaderRef.current);
        };
    }, [handleObserver]);

    const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value.toLowerCase();
        setLoading(true);

        if (query.trim() === '') {
            setIconList(originalIconList);
        } else {
            const filteredIcons = originalIconList.filter((icon) => icon.includes(query));
            setIconList(filteredIcons);
        }

        setIcons([]);
        setHasMore(true);
        setPage(0);
        setLoading(false);
    }
    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Icons" }]} currentPage="Icons" previousPage={{ name: "Usage", href: "/docs/usage" }} nextPage={{ name: "Templates", href: "/docs/templates" }}>
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
                <Input placeholder="Search icons" onChange={(e) => { handleSearch(e) }} suffix={
                    <div className="w-8 h-8 flex items-center justify-center text-color-secondary">
                        {loading && <svg className="animate-spin" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                            <g clipPath="url(#clip0_2393_1490)">
                                <path d="M8 0V4" stroke="currentColor" strokeWidth="1.5">
                                </path>
                                <path d="M8 16V12" opacity="0.5" stroke="currentColor" strokeWidth="1.5">
                                </path>
                                <path d="M3.29773 1.52783L5.64887 4.7639" opacity="0.9" stroke="currentColor" strokeWidth="1.5">
                                </path>
                                <path d="M12.7023 1.52783L10.3511 4.7639" opacity="0.1" stroke="currentColor" strokeWidth="1.5">
                                </path>
                                <path d="M12.7023 14.472L10.3511 11.236" opacity="0.4" stroke="currentColor" strokeWidth="1.5">
                                </path>
                                <path d="M3.29773 14.472L5.64887 11.236" opacity="0.6" stroke="currentColor" strokeWidth="1.5">
                                </path>
                                <path d="M15.6085 5.52783L11.8043 6.7639" opacity="0.2" stroke="currentColor" strokeWidth="1.5">
                                </path>
                                <path d="M0.391602 10.472L4.19583 9.23598" opacity="0.7" stroke="currentColor" strokeWidth="1.5">
                                </path>
                                <path d="M15.6085 10.4722L11.8043 9.2361" opacity="0.3" stroke="currentColor" strokeWidth="1.5">
                                </path>
                                <path d="M0.391602 5.52783L4.19583 6.7639" opacity="0.8" stroke="currentColor" strokeWidth="1.5">
                                </path>
                            </g>
                            <defs>
                                <clipPath id="clip0_2393_1490">
                                    <rect fill="white" height="16" width="16">
                                    </rect>
                                </clipPath>
                            </defs>
                        </svg>
                        }
                    </div>
                } />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 !mt-3">
                {icons.map((icon, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center  bg-secondary text-color-secondary rounded p-4 w-full h-24 cursor-pointer"
                        onClick={() => {
                            toast.success(`Copied ${icon.name} to clipboard`);
                            navigator.clipboard.writeText(icon.svg)
                        }}
                    >
                        <div className="w-8 h-8 flex items-center justify-center" dangerouslySetInnerHTML={{ __html: icon.svg }} />
                        <p className="text-center mt-2 text-sm">{icon.name}</p>
                    </div>
                ))}
            </div>
            {hasMore && (
                <div ref={loaderRef} className="flex justify-center items-center w-full h-12 text-color-default">
                    <p>Loading...</p>
                </div>
            )}
        </DocumentationPage>
    )
}