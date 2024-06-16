"use client"

import { useState, useEffect, useRef, useCallback } from "react";
import Input from "../components/input/input";

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
            setIconList(originalIconList); // Restore original icons
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
        <div className="flex flex-col w-full space-y-4 mt-28">
            <h1 className="text-3xl font-semibold text-color-default">Icons</h1>
            <p className="text-lg text-color-secondary">
                Icons are a great way to add visual elements to your application. They are used to represent actions, objects, and more.
                <br />
                <br />
                Icons are used in buttons, navigation, and more to make the user experience more interactive and visually appealing.
            </p>
            <div className="flex flex-col w-full space-y-4">
                <h2 className="text-2xl font-semibold text-color-default">Usage</h2>
                <p className="text-lg text-color-secondary">
                    To use an icon, you can import the icon component from the icons package and use it in your application.
                </p>

                <Input placeholder="Search icons" onChange={(e) => { handleSearch(e) }} suffix={
                    <div className="w-8 h-8 flex items-center justify-center text-color-secondary">
                        {loading && <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V4a10 10 0 00-10 10h2zm2 8a8 8 0 018-8h2a10 10 0 00-10 10v-2z"></path>
                        </svg>
                        }
                    </div>
                } />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {icons.map((icon, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center border border-border bg-secondary text-color-secondary rounded p-4 w-full h-24">
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
        </div>
    );
}
