"use client"

import Button from "../components/button/button";
import Navbar from "../components/documentation/navbar/navbar";
import { Toaster } from "../components/toast/toast";
const accentColors = require('tailwindcss/colors');
const grayColors: { [key: string]: string } = {
    50: "#f9fafb",
    100: "#f4f5f7",
    200: "#e5e7eb",
    300: "#d2d6dc",
    400: "#9fa6b2",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
};

const borderRadius: { [key: string]: string } = {
    none: "0",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
};

export default function Themes() {
    const changeAccentColor = (color: string) => {
        document.documentElement.style.setProperty('--color-accent', accentColors[color][500]);
    }

    return (
        <main className="h-screen bg-background text-color-default max-h-[calc(100vh-4rem-1px)]">
            <Toaster position="bottom-right" />
            <Navbar />
            <div className="flex justify-center flex-col px-16 h-full max-w-[35rem]">
                <h1 className="text-4xl font-bold">
                    Themes
                </h1>
                <p className="text-lg mt-4">
                    Themes are a collection of design elements that can be applied to a component or a page.
                </p>
                <div className="mt-6">
                    <p className="font-semibold">Accent color</p>
                    <div className="flex gap-4 mt-4 flex-wrap">
                        {Object.keys(accentColors).slice(0, -5).map((color) => {
                            if (!accentColors[color].hasOwnProperty(500)) {
                                return null;
                            }

                            return (
                                <Button variant="outline" key={color} className="!rounded-full !p-1.5" onClick={() => changeAccentColor(color)}>
                                    <div className={`w-4 h-4 rounded-full`} style={{ backgroundColor: accentColors[color][500] }}></div>
                                </Button>
                            )
                        })}
                    </div>
                </div>

                <div className="mt-6">
                    <p className="font-semibold">Gray color</p>
                    <div className="flex gap-4 mt-4 flex-wrap">
                        {Object.keys(grayColors).map((color) => {
                            return (
                                <Button variant="outline" key={color} className="!rounded-full !p-1.5">
                                    <div className={`w-4 h-4 rounded-full`} style={{ backgroundColor: color }}></div>
                                </Button>
                            )
                        })}
                    </div>
                </div>

                <div className="mt-6">
                    <p className="font-semibold">Border radius</p>
                    <div className="flex gap-4 mt-4 flex-wrap">
                        {Object.keys(borderRadius).map((radius) => {
                            return (
                                <Button variant="outline" key={radius} className="!p-2">
                                    <div className={`w-8 h-8 border-l border-t border-accent bg-opacity-40`} style={{
                                        borderTopLeftRadius: borderRadius[radius]

                                    }}></div>
                                </Button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
}