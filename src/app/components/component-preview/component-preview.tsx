"use client"

import { useState, useEffect } from 'react';
import Button from '../button/button';

interface ProperyMap {
    [key: string]: string;
}

export default function ComponentPreview({ children, className, properties }: { children: React.ReactNode, className?: string, properties?: ProperyMap }) {

    return (
        <div className={`flex justify-center items-center w-full py-24 md:py-20 lg:py-16 xl:py-14 px-4 border rounded-lg border-border relative space-x-2 ${className ?? ""}`}>
            {children}
            {properties && Object.keys(properties).length > 0 ? (
                <div className="flex flex-col absolute top-2 right-2 border border-border rounded-md bg-zinc-200 dark:bg-zinc-700">
                    {Object.keys(properties).map((key, index) => (
                        <div key={index}>
                            <span className="px-2 py-1 text-xs text-black dark:text-white">{key}:</span>
                            <span className="px-2 py-1 text-xs text-black dark:text-white">{properties[key]}</span>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    )
}