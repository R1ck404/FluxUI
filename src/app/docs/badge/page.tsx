"use client"

import CodeBox from "@/app/components/code-box/code-box";
import { Separator } from "@/app/components/seperator/separator";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import Badge from "@/app/components/badge/badge";
import Button from "@/app/components/button/button";

export default function BadgePreviews() {
    return (
        <main className="flex flex-col space-y-1 pb-8">
            <h1 className="text-xl font-semibold text-black dark:text-white">Badge</h1>
            <p className="text-zinc-400 text-sm">Badges are used to display a small amount of information.</p>
            <ComponentPreview properties={{}}>
                <Badge>New</Badge>
                <Badge color="red">Comming soon</Badge>
                <Badge color="violet">Released</Badge>
                <Badge color="teal">Sold out</Badge>
            </ComponentPreview>

            <CodeBox component="badge" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">Badges can be used in various ways.</p>

            <ComponentPreview properties={{ rounded: "false" }}>
                <Badge rounded={false}>New</Badge>
                <Badge color="red" rounded={false}>Comming soon</Badge>
                <Badge color="violet" rounded={false}>Released</Badge>
                <Badge color="teal" rounded={false}>Sold out</Badge>
            </ComponentPreview>

            <ComponentPreview properties={{ href: "/docs/alert", color: "emerald" }}>
                <Badge href="/docs/alert" color="emerald">Alert Component</Badge>
            </ComponentPreview>

            <div className="w-full flex justify-between mt-8">
                <Button color="dark/zinc" className="w-min" href="/docs/avatar">
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" className="rotate-180"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                    <span>Avatar</span>
                </Button>
                <Button color="dark/zinc" className="w-min" href="/docs/button">
                    <span>Button</span>
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                </Button>
            </div>
        </main>
    );
}
