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
        <div className="flex justify-center items-center overflow-scroll min-h-screen bg-background no-scrollbar">
            <div className="flex flex-col w-full px-10 lg:px-0 lg:w-2/3 h-screen">
                <Navbar />

                {children}
            </div>
            <Toaster position="bottom-right" />
        </div>
    );
}
