import Breadcrumb from "@/app/components/breadcrumb/breadcrumb";
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page";

export default function Templates() {
    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Templates" }]} currentPage="Templates" previousPage={{ name: "Icons", href: "/docs/icons" }} nextPage={{ name: "Alert", href: "/docs/components/alert" }}>
            <h1 className="text-3xl font-semibold text-color-default">Templates</h1>
            <p className="mt-4 text-gray-600">

            </p>
        </DocumentationPage>
    )
}