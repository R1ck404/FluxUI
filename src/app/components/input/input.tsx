import React, { HTMLAttributes, InputHTMLAttributes } from "react";
import classNames from "classnames";

const colors = require('tailwindcss/colors');

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    color?: 'dark' | "light" | "dark/white" | "dark/zinc" | "unknown" | typeof colors;
    disabled?: boolean;
    rounded?: boolean;
    bordered?: boolean;
    size?: number;
    icon?: React.ReactNode;
    className?: string;
}

const Input = ({
    color = "dark/zinc",
    disabled = false,
    rounded = true,
    bordered = true,
    size = 1,
    icon,
    className,
    ...rest
}: InputProps) => {
    const colorClasses = colors[color as keyof typeof colors];
    const baseColor = colorClasses ? colorClasses[500] : color;

    const classes = classNames(
        "w-full p-2 transition-all duration-200 ease-in-out border border-border outline-none",
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
        {
            "text-sm py-1 px-2": size === 1,
            "text-base py-2 px-3": size === 2,
            "text-lg py-3 px-4": size === 3,
        },
        className
    );

    return (
        <div className="relative w-full">
            {icon && (
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    {icon}
                </span>
            )}
            <input
                className={classNames(classes, {
                    "pl-10": icon, // Add padding if icon is present
                })}
                disabled={disabled}
                {...rest}
            />
        </div>
    );
};

export default Input;
