import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: React.ReactNode;
    className?: string;
    current?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, separator = '/', className, current }) => {
    return (
        <nav aria-label="Breadcrumb" className={classNames('flex items-center space-x-2 h-min text-sm', className)}>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {index > 0 && <span className="text-gray-500">{separator}</span>}
                    {item.href ? (
                        <Link href={item.href}>
                            <span className="text-blue-600 hover:underline">{item.label}</span>
                        </Link>
                    ) : (
                        <span className={item.label === current ? "text-white" : "text-gray-500"}>{item.label}</span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};

export default Breadcrumb;
