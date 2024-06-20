import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Button from "@/app/components/button/button";
import Navbar from "@/app/components/navbar/navbar";
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "@/app/globals.css";
import { Toaster } from "../components/toast/toast";

export const metadata: Metadata = {
    title: "FluxUI",
    description: "A modern React UI library",
    icons: [
        {
            rel: "icon",
            url: "/favicon.svg",
        },
    ],
    openGraph: {
        title: "FluxUI",
        type: "website",
        url: "https://flux.rickhuijser.com",
        description: "A modern React UI library",
        siteName: "FluxUI",
        images: [
            {
                url: "/favicon.svg",
                alt: "fluxui",
            },
        ],
    },
    twitter: {
        title: "FluxUI",
        site: "@fluxui",
        card: "summary_large_image",
        creator: "@fluxui",
        images: [
            {
                url: "/favicon.svg",
                alt: "fluxui",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark bg-background">
            <body className={GeistSans.className}>
                {children}
                <Toaster position="bottom-right" />
                <Analytics />
            </body>
        </html>
    );
}
