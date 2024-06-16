
import Button from "@/app/components/button/button";
import Checkbox from "@/app/components/checkbox/checkbox";
import Choicebox from "@/app/components/choicebox/choicebox";
import CodeBox from "@/app/components/code-box/code-box";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page";
import { Separator } from "@/app/components/seperator/separator";

export default function ChoiceboxComponent() {
    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Components" }, { label: "Choicebox" }]} currentPage="Choicebox" previousPage={{ name: "Checkbox", href: "/docs/components/checkbox" }} nextPage={{ name: "Context menu", href: "/docs/components/context-menu" }}>
            <h1 className="text-3xl font-semibold text-color-default">Choicebox</h1>
            <p className="mt-4 text-color-secondary">
                Choiceboxes are used to select one option.
            </p>
            <ComponentPreview properties={{}}>
                <Choicebox color="dark/zinc">
                    <p className="text-md font-semibold text-black dark:text-white">Free</p>
                    <p className="text-zinc-400 text-sm">Gets you access to all free features.</p>
                </Choicebox>
            </ComponentPreview>

            <CodeBox component="choicebox" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">Choiceboxes can be used in various ways.</p>

            <ComponentPreview properties={{ disabled: "true" }}>
                <Choicebox color="dark/zinc" disabled>
                    <p className="text-md font-semibold text-black dark:text-white">Free</p>
                    <p className="text-zinc-400 text-sm">Gets you access to all free features.</p>
                </Choicebox>
            </ComponentPreview>
        </DocumentationPage>
    )
}