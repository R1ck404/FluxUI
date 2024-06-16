import Breadcrumb from "@/app/components/breadcrumb/breadcrumb";
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page";

export default function Usage() {
    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Usage" }]} currentPage="Usage" previousPage={{ name: "Installation", href: "/docs/installation" }} nextPage={{ name: "Icons", href: "/docs/icons" }}>
            <h1 className="text-3xl font-semibold text-color-default">Usage</h1>
            <p className="mt-4 text-gray-600">

            </p>
        </DocumentationPage>
    )
}