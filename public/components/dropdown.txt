import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { Separator } from '../seperator/separator';
import Link from 'next/link';

interface DropdownProps {
    children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
    return <div className="relative inline-block">{children}</div>;
};

interface DropdownTriggerProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const DropdownTrigger: React.FC<DropdownTriggerProps> = ({ children, onClick }) => {
    return (
        <div onClick={onClick} className="cursor-pointer">
            {children}
        </div>
    );
};

interface DropdownMenuProps {
    isOpen: boolean;
    children: React.ReactNode;
    position?: 'left' | 'right';
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, children, position = 'left' }) => {
    const menuClasses = classNames(
        'absolute mt-2 w-48 bg-secondary text-color-secondary border border-border rounded-md shadow-lg z-50 transition-all duration-250 scale-100 transform origin-top-left',
        {
            'left-0': position === 'left',
            'right-0': position === 'right',
            'opacity-100 visible scale-100': isOpen,
            'opacity-0 invisible scale-0': !isOpen,
        },
    );

    return <div className={menuClasses}>{children}</div>;
};

interface DropdownItemProps {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ href, onClick, children }) => {
    const itemClasses = 'cursor-pointer m-1 rounded-md block px-3 py-1.5 text-sm text-color-default hover:bg-background';

    if (href) {
        return (
            <Link href={href} className={itemClasses}>
                {children}
            </Link>
        );
    }

    return (
        <div onClick={onClick} className={itemClasses}>
            {children}
        </div>
    );
};

interface DropdownHeaderProps {
    children: React.ReactNode;
    className?: string;
}

const DropdownHeader: React.FC<DropdownHeaderProps> = ({ children, className }) => {
    const final_class = classNames('px-3 py-2 text-sm font-semibold dark:text-white text-gray-900', className);
    return <div className={final_class}>{children}</div>;
};

interface DropdownSectionProps {
    children: React.ReactNode;
    className?: string;
}

const DropdownSection: React.FC<DropdownSectionProps> = ({ children, className }) => {
    const final_class = classNames('py-0.5', className);
    return <div className={final_class}>{children}</div>;
};

interface DropdownHeadingProps {
    children: React.ReactNode;
    className?: string;
}

const DropdownHeading: React.FC<DropdownHeadingProps> = ({ children, className }) => {
    const final_class = classNames('px-3 py-2 text-sm font-bold dark:text-white text-gray-900', className);
    return <div className={final_class}>{children}</div>;
};

interface DropdownDividerProps {
    className?: string;
}

const DropdownDivider: React.FC<DropdownDividerProps> = ({ className }) => {
    return (
        <Separator className={className} />
    )
};

interface DropdownLabelProps {
    children: React.ReactNode;
    className?: string;
}

const DropdownLabel: React.FC<DropdownLabelProps> = ({ children, className }) => {
    const final_class = classNames('px-3 py-2 text-xs text-color-secondary', className);
    return <div className={final_class}>{children}</div>;
};

interface DropdownDescriptionProps {
    children: React.ReactNode;
    className?: string;
}

const DropdownDescription: React.FC<DropdownDescriptionProps> = ({ children, className }) => {
    const final_class = classNames('px-3 py-2 text-sm text-color-secondary', className);
    return <div className={final_class}>{children}</div>;
};

export { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownHeader, DropdownSection, DropdownHeading, DropdownDivider, DropdownLabel, DropdownDescription };
