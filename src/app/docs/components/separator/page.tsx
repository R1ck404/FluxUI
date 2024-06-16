import Button from "@/app/components/button/button"
import CodeBox from "@/app/components/code-box/code-box"
import ComponentPreview from "@/app/components/component-preview/component-preview"
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page"
import { Select, SelectOption, ErrorMessage } from "@/app/components/select/select"
import { Separator } from "@/app/components/seperator/separator"


export default function SeparatorComponent() {
    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Components" }, { label: "Separator" }]} currentPage="Separator" previousPage={{ name: "Select", href: "/docs/components/select" }} nextPage={{ name: "Skeleton", href: "/docs/components/skeleton" }}>
            <h1 className="text-3xl font-semibold text-color-default">Separator</h1>
            <p className="mt-4 text-color-secondary">
                Separators are used to divide content.
            </p>

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


        </DocumentationPage >
    )
}