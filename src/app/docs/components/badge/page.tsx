import Badge from "@/app/components/badge/badge";
import Button from "@/app/components/button/button";
import CodeBox from "@/app/components/code-box/code-box";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page";
import { Separator } from "@/app/components/seperator/separator";
import { useState } from "react";

export default function BadgeComponent() {
    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Components" }, { label: "Badge" }]} currentPage="Badge" previousPage={{ name: "Avatar", href: "/docs/components/avatar" }} nextPage={{ name: "Button", href: "/docs/components/button" }}>
            <h1 className="text-3xl font-semibold text-color-default">Alert</h1>
            <p className="mt-4 text-color-secondary">
                Badges are used to display a small amount of information.
            </p>
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

        </DocumentationPage>
    )
}