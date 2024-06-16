import Breadcrumb, { BreadcrumbItem } from "../../breadcrumb/breadcrumb";
import Button from "../../button/button";

interface DocumentationPageProps {
    children: React.ReactNode;
    breadcrumbs: BreadcrumbItem[];
    nextPage?: { name: string, href: string };
    previousPage?: { name: string, href: string };
    currentPage?: string;
}

export default function DocumentationPage({ children, breadcrumbs, nextPage, previousPage, currentPage }: DocumentationPageProps) {
    return (
        <div className="px-12 py-8 w-full h-full">
            <div className="flex items-center space-x-2">
                <Breadcrumb items={breadcrumbs} separator="/" current={currentPage} />
            </div>
            <div className="mt-4 space-y-2">
                {children}
            </div>
            <div className="flex justify-between mt-8 w-full">
                {previousPage && (
                    <Button href={previousPage.href} color="dark/zinc">
                        <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                            <path clipRule="evenodd" d="M6.46966 13.7803L6.99999 14.3107L8.06065 13.25L7.53032 12.7197L3.56065 8.75001H14.25H15V7.25001H14.25H3.56065L7.53032 3.28034L8.06065 2.75001L6.99999 1.68935L6.46966 2.21968L1.39644 7.2929C1.00592 7.68342 1.00592 8.31659 1.39644 8.70711L6.46966 13.7803Z" fill="currentColor" fill-rule="evenodd">
                            </path>
                        </svg>
                        <span>{previousPage.name}</span>
                    </Button>
                )}
                {nextPage && (
                    <Button href={nextPage.href} color="dark/zinc">
                        <span>{nextPage.name}</span>
                        <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                            <path clipRule="evenodd" d="M9.53033 2.21968L9 1.68935L7.93934 2.75001L8.46967 3.28034L12.4393 7.25001H1.75H1V8.75001H1.75H12.4393L8.46967 12.7197L7.93934 13.25L9 14.3107L9.53033 13.7803L14.6036 8.70711C14.9941 8.31659 14.9941 7.68342 14.6036 7.2929L9.53033 2.21968Z" fill="currentColor" fill-rule="evenodd">
                            </path>
                        </svg>
                    </Button>
                )}
            </div>
        </div>
    );
}