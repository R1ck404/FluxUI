import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import Link from "next/link";

const colors = require('tailwindcss/colors');

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost";
    color?: 'dark' | "light" | "dark/white" | "dark/zinc" | "unknown" | typeof colors;
    align?: "start" | "center" | "end";
    href?: string;
}

const Button = ({
    children,
    className,
    disabled = false,
    variant = "default",
    color = "unknown",
    align = "center",
    href,
    ...rest // Rest of the button props
}: ButtonProps) => {
    const colorClasses = colors[color];
    const classes = classNames(
        "text-sm font-semibold inline-flex items-center px-3 py-1.5 rounded-md isolate transition-all duration-200 ease-in-out font-semibold",
        {
            "text-white bg-zinc-900 hover:bg-zinc-800 dark:border dark:text-white dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:border-border": color === "dark/zinc",
            "text-white bg-zinc-900 hover:bg-zinc-800 dark:border dark:text-black dark:bg-white dark:hover:bg-neutral-200 dark:border-border": color === "dark/white",
            "text-white border bg-zinc-700 hover:bg-zinc-600 border-border": color === "dark",
            "text-black bg-white hover:bg-neutral-200 border border-border": color === "light",
        },
        {
            "text-black dark:text-white bg-transparent border border-border dark:hover:bg-zinc-700/50 hover:bg-zinc-200/50": variant === "outline",
            "text-black dark:text-white bg-transparent border border-transparent dark:hover:bg-zinc-700/50 hover:bg-zinc-200/50": variant === "ghost",
        },
        {
            "cursor-not-allowed opacity-50": disabled,
        },
        {
            "justify-start": align === "start",
            "justify-center": align === "center",
            "justify-end": align === "end",
        },
        className
    );

    const style = {
        backgroundColor: colorClasses ? colorClasses[500] : color,
        color: colorClasses ? "white" : "",
    };

    if (href) {
        return (
            <Link href={href}>
                <button className={classes} disabled={disabled} {...rest} style={style}>
                    {children}
                </button>
            </Link>
        );
    }

    return (
        <button className={classes} disabled={disabled} {...rest} style={style}>
            {children}
        </button>
    );
};

export default Button;
