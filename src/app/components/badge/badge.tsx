import React, { HTMLAttributes } from "react";
import classNames from "classnames";
import Link from "next/link";

const colors = require('tailwindcss/colors');

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    color?: 'dark' | "light" | "dark/white" | "dark/zinc" | "unknown" | typeof colors;
    href?: string;
    rounded?: boolean;
    size?: "sm" | "md" | "lg";
}

const Badge = ({
    children,
    className,
    color = "dark/zinc",
    href,
    rounded = true,
    size = "md",
    ...rest
}: BadgeProps) => {
    const colorClasses = colors[color];
    const classes = classNames(
        "text-sm font-semibold inline-flex items-center isolate transition-all duration-200 ease-in-out w-fit",
        {
            "text-white bg-zinc-900 dark:text-white dark:bg-zinc-700": color === "dark/zinc",
            "text-black bg-white dark:text-black dark:bg-white": color === "dark/white",
            "text-white bg-zinc-700 dark:bg-zinc-600": color === "dark",
            "text-black bg-white border border-gray-300 dark:bg-neutral-200": color === "light",
            "rounded-full": rounded,
            "rounded-md": !rounded,
            "px-1.5 py-0.5 text-xs": size === "sm",
            "px-2 py-0.5 text-sm ": size === "md",
            "px-3 py-1 text-md": size === "lg",
        },

        className
    );

    const style = {
        backgroundColor: colorClasses ? colorClasses[500] + "20" : color,
        color: colorClasses ? colorClasses[500] : "white",
    };

    if (href) {
        return (
            <Link href={href}>
                <span className={classes} {...rest} style={style}>
                    {children}
                </span>
            </Link>
        );
    }

    return (
        <span className={classes} {...rest} style={style}>
            {children}
        </span>
    );
};

export default Badge;
