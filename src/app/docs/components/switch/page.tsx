"use client"

import { Avatar } from "@/app/components/avatar/avatar"
import Button from "@/app/components/button/button"
import Card from "@/app/components/card/card"
import CodeBox from "@/app/components/code-box/code-box"
import ComponentPreview from "@/app/components/component-preview/component-preview"
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page"
import Input from "@/app/components/input/input"
import { Select, SelectOption, ErrorMessage } from "@/app/components/select/select"
import { Separator } from "@/app/components/seperator/separator"
import Skeleton from "@/app/components/skeleton/skeleton"
import Switch from "@/app/components/switch/switch"
import { useState } from "react"


export default function SwitchComponent() {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Components" }, { label: "Switch" }]} currentPage="Switch" previousPage={{ name: "Skeleton", href: "/docs/components/skeleton" }} nextPage={{ name: "Toast", href: "/docs/components/toast" }}>
            <h1 className="text-3xl font-semibold text-color-default">Switch</h1>
            <p className="mt-4 text-color-secondary">
                Switches are used to toggle between two states.
            </p>
            <ComponentPreview properties={{}}>
                <Switch
                    color="dark/zinc"
                    checked={checked}
                    onChange={handleChange}
                    contentAlign="before"
                    size="xl"
                />
            </ComponentPreview>

            <CodeBox component="switch" />

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
        </DocumentationPage >
    )
}