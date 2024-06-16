"use client"

import CodeBox from "@/app/components/code-box/code-box"
import ComponentPreview from "@/app/components/component-preview/component-preview"
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page"
import Input from "@/app/components/input/input"
import { Separator } from "@/app/components/seperator/separator"



export default function InputComponent() {
    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Components" }, { label: "Input" }]} currentPage="Input" previousPage={{ name: "Feedback", href: "/docs/components/feedback" }} nextPage={{ name: "Select", href: "/docs/components/select" }}>
            <h1 className="text-3xl font-semibold text-color-default">input</h1>
            <p className="mt-4 text-color-secondary">
                Inputs are used to collect data from the user.
            </p>

            <ComponentPreview properties={{}}>
                <Input placeholder="Input" />
            </ComponentPreview>

            <CodeBox component="input" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">
                Inputs can be used in various ways.
            </p>

            <ComponentPreview properties={{ disabled: "true" }}>
                <Input disabled placeholder="Input" />
            </ComponentPreview>

            <ComponentPreview properties={{ color: "indigo" }}>
                <Input color="indigo" placeholder="Input" />
            </ComponentPreview>

            <ComponentPreview properties={{ has_prefix: "true", has_suffix: "true" }}>
                <Input
                    prefix={
                        <pre className="text-sm font-semibold bg-background p-2 h-full rounded-l-lg border-r border-r-border">https://</pre>
                    }
                    suffix={
                        <pre className="text-sm font-semibold bg-background p-2 h-full rounded-r-lg border-l border-l-border">.com</pre>
                    }
                    placeholder="website"
                />
            </ComponentPreview>

        </DocumentationPage >
    )
}