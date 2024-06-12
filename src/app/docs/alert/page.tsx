"use client"

import Image from "next/image";
import Button from "@/app/components/button/button";
import { useState } from "react";
import { Alert, AlertActions, AlertDescription, AlertTitle } from "../../components/alert/alert";
import CodeBox from "@/app/components/code-box/code-box";
import { Separator } from "@/app/components/seperator/separator";
import ComponentPreview from "@/app/components/component-preview/component-preview";

export default function AlertPreviews() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenOutline, setIsOpenOutline] = useState(false);

    return (
        <main className="flex flex-col space-y-1 pb-8">
            <h1 className="text-xl font-semibold text-black dark:text-white">Alert</h1>
            <p className="text-zinc-400 text-sm">Alerts are used to inform users about a situation or action.</p>
            <ComponentPreview properties={{ isOpen: String(isOpen), outline: "false" }}>
                <Button onClick={() => setIsOpen(true)} variant="default" color="dark/zinc">
                    Refund payment
                </Button>
                <Alert open={isOpen} onClose={setIsOpen} outline={false}>
                    <AlertTitle>Refund payment</AlertTitle>
                    <AlertDescription>Are you sure you want to refund this payment?</AlertDescription>
                    <AlertActions>
                        <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
                        <Button variant="ghost" onClick={() => setIsOpen(false)}>Refund</Button>
                    </AlertActions>
                </Alert>
            </ComponentPreview>

            <CodeBox component="alert" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">Alerts can be used in various ways.</p>

            <ComponentPreview properties={{ isOpen: String(isOpenOutline), outline: "true" }}>
                <Button onClick={() => setIsOpenOutline(true)} variant="default" color="dark/zinc">
                    Refund payment
                </Button>
                <Alert open={isOpenOutline} onClose={setIsOpenOutline} outline>
                    <AlertTitle>Refund payment</AlertTitle>
                    <AlertDescription>Are you sure you want to refund this payment?</AlertDescription>
                    <AlertActions>
                        <Button variant="ghost" onClick={() => setIsOpenOutline(false)}>Cancel</Button>
                        <Button variant="ghost" onClick={() => setIsOpenOutline(false)}>Refund</Button>
                    </AlertActions>
                </Alert>
            </ComponentPreview>

            <div className="w-full flex justify-between mt-8">
                <Button color="dark/zinc" className="w-min" href="/docs/installation">
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" className="rotate-180"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                    <span>Installation</span>
                </Button>
                <Button color="dark/zinc" className="w-min" href="/docs/avatar">
                    <span>Avatar</span>
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                </Button>
            </div>
        </main>
    );
}
