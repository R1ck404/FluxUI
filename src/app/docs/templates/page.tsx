import Breadcrumb from "@/app/components/breadcrumb/breadcrumb";
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page";
import Image from "next/image";
import Link from "next/link";

export default function Templates() {
    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Templates" }]} currentPage="Templates" previousPage={{ name: "Icons", href: "/docs/icons" }} nextPage={{ name: "Alert", href: "/docs/components/alert" }}>
            <h1 className="text-3xl font-semibold text-color-default">Templates</h1>
            <p className="mt-4 text-color-secondary">
                Templates are pre-designed components that can be used to build a complete page. They are usually composed of multiple components and are used to create a consistent design across the application.
            </p>

            <h2 className="text-2xl font-semibold text-color-default !mt-8">Login Templates</h2>
            <div className="flex space-x-2 flex-wrap mt-4">
                <Link className="rounded-lg border-border border flex-col flex relative" href="/templates/login_01">
                    <Image src="/templates/login_01.png" width={0} height={0} alt="Login Template 1" className="rounded-lg" layout="responsive" />
                </Link>
            </div>
        </DocumentationPage>
    )
}