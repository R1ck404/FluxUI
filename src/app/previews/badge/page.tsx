"use client"

import Badge from "../../components/badge/badge";

export default function Home() {
    return (
        <main className="flex flex-col space-y-6">
            <h1 className="text-xl font-semibold text-white">Alert</h1>
            <p className="text-zinc-400 text-sm">Alerts are used to inform users about a situation or action.</p>
            <div className="flex justify-center items-center w-full py-12 border rounded-lg border-border space-x-2">
                <Badge color="rose">New</Badge>
                <Badge color="fuchsia">New</Badge>
                <Badge color="amber">New</Badge>
                <Badge color="lime" href="/alert">New</Badge>
            </div>
        </main>
    );
}
