import Button from "@/app/components/button/button";
import CodeBox from "@/app/components/code-box/code-box";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page";
import { Separator } from "@/app/components/seperator/separator";
import { useState } from "react";

export default function ButtonComponent() {
    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Components" }, { label: "Button" }]} currentPage="Button" previousPage={{ name: "Badge", href: "/docs/components/badge" }} nextPage={{ name: "Card", href: "/docs/components/card" }}>
            <h1 className="text-3xl font-semibold text-color-default">Button</h1>
            <p className="mt-4 text-color-secondary">
                Buttons are used to trigger an action or event.
            </p>

            <ComponentPreview properties={{}}>
                <Button variant="default" color={"dark/zinc"}>Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
            </ComponentPreview>

            <CodeBox component="button" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">Buttons can be used in various ways.</p>

            <ComponentPreview properties={{ disabled: "true" }}>
                <Button variant="default" color={"dark/zinc"} disabled>Default</Button>
            </ComponentPreview>

            <ComponentPreview properties={{ loading: "true" }}>
                <Button variant="default" color={"dark/zinc"} loading>Loading</Button>
            </ComponentPreview>

            <ComponentPreview properties={{ align: "end" }}>
                <Button variant="default" color={"dark/zinc"} align="end" className="w-28">Start</Button>
            </ComponentPreview>

            <ComponentPreview properties={{ href: "https://rickhuijser.com/", color: "blue" }}>
                <Button variant="default" color="blue" align="end" href="https://rickhuijser.com/">View my portfolio</Button>
            </ComponentPreview>

        </DocumentationPage>
    )
}