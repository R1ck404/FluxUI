import React, { HTMLAttributes, TextareaHTMLAttributes } from "react";
import classNames from "classnames";

const colors = require('tailwindcss/colors');

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'prefix'> {
    color?: 'dark' | "light" | "dark/white" | "dark/zinc" | "unknown" | typeof colors;
    disabled?: boolean;
    rounded?: boolean;
    bordered?: boolean;
    size?: number;
    className?: string;
}

const Textarea = ({
    color = "dark/zinc",
    disabled = false,
    rounded = true,
    bordered = true,
    size = 1,
    className,
    ...rest
}: TextareaProps) => {
    const colorClasses = colors[color as keyof typeof colors];
    const baseColor = colorClasses ? colorClasses[500] : color;

    const classes = classNames(
        "relative w-full w-full transition-all duration-200 ease-in-out border border-border outline-none flex items-center justify-between",
        {
            "bg-white text-black dark:bg-zinc-800 dark:text-white": true,
            "border": bordered,
            "rounded-md": rounded,
            "rounded-sm": !rounded,
            "opacity-50 cursor-not-allowed": disabled,
            "focus:outline-none": !disabled,
            "focus:border": !disabled,
            [`focus:border-${baseColor}`]: !disabled,
        },
        className
    );

    const textareaClasses = classNames(
        "w-full bg-transparent focus:outline-none p-2",
        {
            "text-sm py-1 px-2": size === 1,
            "text-base py-2 px-3": size === 2,
            "text-lg py-3 px-4": size === 3,
        },
        classes
    )

    return (
        <textarea
            className={textareaClasses}
            disabled={disabled}
            {...rest}
        />
    );
};

export default Textarea;
