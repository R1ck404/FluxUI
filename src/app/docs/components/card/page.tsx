
import Button from "@/app/components/button/button";
import Card from "@/app/components/card/card";
import CodeBox from "@/app/components/code-box/code-box";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page";
import { Separator } from "@/app/components/seperator/separator";
import { useState } from "react";

export default function CardComponent() {
    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Components" }, { label: "Card" }]} currentPage="Card" previousPage={{ name: "Button", href: "/docs/components/button" }} nextPage={{ name: "Checkbox", href: "/docs/components/checkbox" }}>
            <h1 className="text-3xl font-semibold text-color-default">Card</h1>
            <p className="mt-4 text-color-secondary">
                Cards are used to display content in a structured way.
            </p>

            <ComponentPreview properties={{}}>
                <Card outline>
                    <h1 className="text-xl font-semibold text-black dark:text-white">Pro VPS</h1>
                    <Separator className="!my-4" />
                    <p className="text-zinc-400 text-sm">2 - 32 dedicated vCPU's</p>
                    <p className="text-zinc-400 text-sm">4 - 128 GB RAM</p>
                    <p className="text-zinc-400 text-sm">1 - 16 TB SSD</p>
                    <p className="text-zinc-400 text-sm">Unlimited transfer</p>
                    <p className="text-zinc-400 text-sm">24/7 support</p>
                    <Separator className="!my-4" />
                    <Button color="dark/zinc">Order now</Button>
                </Card>
            </ComponentPreview>

            <CodeBox component="card" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">Cards can be used in various ways.</p>

            <ComponentPreview properties={{ outline: "false", shadow: "true" }}>
                <Card outline={false} shadow>
                    <h1 className="text-xl font-semibold text-black dark:text-white">Pro VPS</h1>
                    <Separator className="!my-4" />
                    <p className="text-zinc-400 text-sm">2 - 32 dedicated vCPU's</p>
                    <p className="text-zinc-400 text-sm">4 - 128 GB RAM</p>
                    <p className="text-zinc-400 text-sm">1 - 16 TB SSD</p>
                    <p className="text-zinc-400 text-sm">Unlimited transfer</p>
                    <p className="text-zinc-400 text-sm">24/7 support</p>
                    <Separator className="!my-4" />
                    <Button color="dark/zinc">Order now</Button>
                </Card>
            </ComponentPreview>

            <ComponentPreview properties={{ href: "/docs/getting-started", rounded: "false" }}>
                <Card href="/docs/getting-started" rounded={false}>
                    <h1 className="text-xl font-semibold text-black dark:text-white">Pro VPS</h1>
                    <Separator className="!my-4" />
                    <p className="text-zinc-400 text-sm">2 - 32 dedicated vCPU's</p>
                    <p className="text-zinc-400 text-sm">4 - 128 GB RAM</p>
                    <p className="text-zinc-400 text-sm">1 - 16 TB SSD</p>
                    <p className="text-zinc-400 text-sm">Unlimited transfer</p>
                    <p className="text-zinc-400 text-sm">24/7 support</p>
                    <Separator className="!my-4" />
                    <Button color="dark/zinc">Order now</Button>
                </Card>
            </ComponentPreview>
        </DocumentationPage>
    )
}