import Link from "next/link";
import '@/app/globals.css';
import Button from "../components/button/button";
import Input from "../components/input/input";
import Sidebar from "../components/documentation/sidebar/sidebar";
import Navbar from "../components/documentation/navbar/navbar";
import { Toaster } from "../components/toast/toast";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Toaster position="bottom-right" />
            <Navbar />

            <div className="flex mx-auto max-w-[90rem]">
                <Sidebar />

                <article className="flex w-full pr-6 pb-8 break-words jsutify-center min-w-0 min-h-[100vh-4rem]">
                    {children}
                </article>

                <nav className="hidden xl:block px-4 shrink-0 w-64 order-last">
                    <div className="text-sm py-6 pr-4 overflow-y-auto max-h-[100vh-4rem] top-16 sticky">
                        <Link href='#' className="text-xs text-color-secondary">Question? give us feedback</Link>
                    </div>
                </nav>
            </div>
        </>
    );
}