"use client"

import CodeBox from "@/app/components/code-box/code-box";
import { Separator } from "@/app/components/seperator/separator";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import Button from "@/app/components/button/button";
import Switch from "@/app/components/switch/switch";
import { useState } from "react";

export default function SeparatorPreviews() {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    return (
        <main className="flex flex-col space-y-1 pb-8">
            <h1 className="text-xl font-semibold text-black dark:text-white">Switch</h1>
            <p className="text-zinc-400 text-sm">Switches are used to toggle between two states.</p>
            <ComponentPreview properties={{}}>
                <Switch
                    color="dark/zinc"
                    checked={checked}
                    onChange={handleChange}
                    contentAlign="before"
                    size="xl"
                />
            </ComponentPreview>

            <CodeBox component="separator" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">Switches can be used in various ways.</p>
            <ComponentPreview properties={{ color: "rose", size: "lg" }}>
                <Switch
                    color="rose"
                    checked={checked}
                    onChange={handleChange}
                    contentAlign="before"
                    size="lg"
                />
            </ComponentPreview>
            <ComponentPreview properties={{ color: "emerald", size: "md", contentAlign: "before", has_children: "true" }}>
                <Switch
                    color="emerald"
                    checked={checked}
                    onChange={handleChange}
                    contentAlign="before"
                    size="md"
                    className="p-2 border border-border rounded-lg"
                >
                    <div className="flex flex-col mr-5">
                        <span className="text-sm font-semibold">Enable</span>
                        <span className="text-xs">This will toggle the switch.</span>
                    </div>
                </Switch>
            </ComponentPreview>
            <div className="w-full flex justify-between mt-8">
                <Button color="dark/zinc" className="w-min" href="/docs/separator">
                    <svg className="rotate-180" width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                    <span>Separator</span>
                </Button>

            </div>
        </main>
    );
}
