import React, { HTMLAttributes } from "react";
import classNames from "classnames";
import Link from "next/link";
import { baseColors } from "@/app/utils/defaults";

const colors = require('tailwindcss/colors');

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    color?: 'dark' | "light" | "dark/white" | "dark/zinc" | "unknown" | typeof colors;
    href?: string;
    outline?: boolean;
    rounded?: boolean;
    shadow?: boolean;
    children?: React.ReactNode;
    className?: string;
}

const Card = ({
    color = "dark/zinc",
    href,
    outline = true,
    rounded = true,
    shadow = false,
    children,
    className,
    ...rest
}: CardProps) => {
    const classes = classNames(
        "p-4 isolate transition-all duration-200 ease-in-out",
        {
            "text-zinc-900 bg-secondary dark:text-zinc-300 dark:bg-zinc-800/90": color === "dark/zinc",
            "text-black bg-white dark:text-black dark:bg-white": color === "dark/white",
            "text-white bg-zinc-700 dark:bg-zinc-600": color === "dark",
            "text-black bg-white dark:bg-neutral-200": color === "light",
            "border border-gray-300 dark:border-border": outline,
            "rounded-md": rounded,
            "rounded-sm": !rounded,
            "shadow-md": shadow,
        },
        className
    );

    if (href) {
        return (
            <Link href={href}>
                <div className={classes} {...rest}>
                    {children}
                </div>
            </Link>
        );
    }

    return (
        <div className={classes} {...rest}>
            {children}
        </div>
    );
};

export default Card;
