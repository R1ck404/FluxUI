"use client"

import CodeBox from "@/app/components/code-box/code-box";
import { Separator } from "@/app/components/seperator/separator";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import Badge from "@/app/components/badge/badge";
import Button from "@/app/components/button/button";

export default function SeparatorPreviews() {
    return (
        <main className="flex flex-col space-y-1 pb-8">
            <h1 className="text-xl font-semibold text-black dark:text-white">Separator</h1>
            <p className="text-zinc-400 text-sm">Separators are used to divide content.</p>
            <ComponentPreview properties={{}}>
                <Separator />
                <Separator soft />
            </ComponentPreview>

            <CodeBox component="separator" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">Separators can be used in various ways.</p>

            <ComponentPreview properties={{ soft: "true" }}>
                <Separator soft />
            </ComponentPreview>

            <ComponentPreview properties={{ vertical: "true" }} className="h-40">
                <Separator vertical />
            </ComponentPreview>

            <div className="w-full flex justify-between mt-8">
                <Button color="dark/zinc" className="w-min" href="/docs/select">
                    <svg className="rotate-180" width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                    <span>Select</span>
                </Button>
            </div>
        </main>
    );
}
