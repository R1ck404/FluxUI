
import Checkbox from "@/app/components/checkbox/checkbox";
import CodeBox from "@/app/components/code-box/code-box";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page";
import { Separator } from "@/app/components/seperator/separator";

export default function CheckboxComponent() {
    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Components" }, { label: "Checkbox" }]} currentPage="Checkbox" previousPage={{ name: "Card", href: "/docs/components/card" }} nextPage={{ name: "Choicebox", href: "/docs/components/choicebox" }}>
            <h1 className="text-3xl font-semibold text-color-default">Checkbox</h1>
            <p className="mt-4 text-color-secondary">
                Checkboxes are used to select one or more options.
            </p>
            <ComponentPreview properties={{}}>
                <Checkbox>Checkbox</Checkbox>
            </ComponentPreview>

            <CodeBox component="checkbox" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">Checkboxes can be used in various ways.</p>

            <ComponentPreview properties={{ disabled: "true" }}>
                <Checkbox disabled>Checkbox</Checkbox>
            </ComponentPreview>

            <ComponentPreview properties={{ color: "indigo" }}>
                <Checkbox color="indigo">Checkbox</Checkbox>
            </ComponentPreview>

            <ComponentPreview properties={{ defaultChecked: "true" }}>
                <Checkbox defaultChecked>Checkbox</Checkbox>
            </ComponentPreview>
        </DocumentationPage>
    )
}