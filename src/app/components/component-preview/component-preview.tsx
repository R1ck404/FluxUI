"use client"

import { useState, useEffect } from 'react';
import Button from '../button/button';

interface ProperyMap {
    [key: string]: string;
}

export default function ComponentPreview({ children, className, properties }: { children: React.ReactNode, className?: string, properties?: ProperyMap }) {

    return (
        <div className={`flex flex-col sm:flex-row w-full border rounded-lg border-border relative ${className ?? ""}`}>
            <div className="flex justify-center items-center w-full p-4 min-h-32 sm:space-x-2 flex-col sm:flex-row">
                {children}
            </div>
            <div>
            {properties && Object.keys(properties).length > 0 ? (
                    <div className="flex flex-col m-1 border border-border rounded-md bg-zinc-200 dark:bg-zinc-700">
                    {Object.keys(properties).map((key, index) => (
                        <div key={index}>
                            <span className="px-2 py-1 text-xs text-black dark:text-white">{key}:</span>
                            <span className="px-2 py-1 text-xs text-black dark:text-white">{properties[key]}</span>
                        </div>
                    ))}
                </div>
            ) : null}
            </div>
        </div>
    )
}