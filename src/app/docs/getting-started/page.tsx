import Breadcrumb from "@/app/components/breadcrumb/breadcrumb";
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page";

export default function GettingStarted() {
    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Getting Started" }]} currentPage="Getting Started" nextPage={{ name: "Installation", href: "/docs/installation" }}>
            <div>
                <h1 className="text-xl font-semibold text-black dark:text-white">Getting Started</h1>
                <p className="text-black dark:text-zinc-200 text-sm">Welcome to the documentation for your UI library. This guide will help you quickly start using the components by copying and pasting them into your own React projects.</p>
            </div>

            <div className="!mt-6">
                <h2 className="text-lg font-semibold text-black dark:text-white">Overview</h2>
                <p className="text-black dark:text-zinc-200 text-sm">Our UI library provides a collection of customizable React components that you can easily integrate into your projects. Each component is designed with a focus on simplicity, flexibility, and consistency.</p>
            </div>

            <div className="!mt-6">
                <h2 className="text-lg font-semibold text-black dark:text-white">Copy-Paste Approach</h2>
                <p className="text-black dark:text-zinc-200 text-sm">This UI library follows a copy-paste approach. You can directly copy the component code from our documentation and paste it into your own React project. This method allows for easy integration and customization without the need for package installation.</p>
            </div>
        </DocumentationPage>
    )
}