"use client"

import { useState, useEffect } from 'react';
import PrismLoader from '../prism-loader';
import Button from '../button/button';

export default function CodeBox({ component }: any) {
    const [code, setCode] = useState("");
    const [isCollapsed, setIsCollapsed] = useState(true);

    useEffect(() => {
        fetch(`/components/${component}.txt`)
            .then((res) => res.text())
            .then((res) => setCode(res));
    }, [component]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
    }

    return (
        <div className={`rounded-lg border border-border relative group p-3 text-sm dark:bg-background dark:text-white overflow-hidden ${isCollapsed ? "h-40" : "h-auto"}`}>
            {isCollapsed && <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />}
            <div className="absolute bottom-2 -translate-x-1/2 transform left-1/2 z-20">
                <Button variant="default" color="dark/zinc" onClick={() => setIsCollapsed(!isCollapsed)}>
                    Show {isCollapsed ? "more" : "less"}
                </Button>
            </div>

            <Button className='absolute right-2 top-2' variant='ghost' onClick={copyToClipboard}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg>
            </Button>
            <pre className="language-tsx">
                <code className="language-tsx">
                    {code}
                </code>
            </pre>
        </div>
    )
}