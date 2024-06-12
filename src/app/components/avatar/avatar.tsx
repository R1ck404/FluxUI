import React from "react";
import classNames from "classnames";

interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
    src?: string;
    square?: boolean;
    initials?: string;
    size?: string;
}

const Avatar: React.FC<AvatarProps> = ({
    src,
    square = false,
    initials,
    className,
    size = "8",
    ...props
}) => {
    const classes = classNames(
        "inline-block overflow-hidden bg-secondary text-border font-semibold flex items-center justify-center",
        `w-${size} h-${size}`,
        {
            "rounded-full": !square,
            "rounded": square,
            "text-2xl size-16": size === "16",
            "text-xl size-14": size === "14",
            "text-xl size-12": size === "12",
            "text-lg size-10": size === "10",
            "text-md size-8": size === "8",
            "text-sm size-6": size === "6",
            "text-xs size-5": size === "4",
        },
        className
    );

    return (
        <span className={classes} {...props}>
            {src ? (
                <img
                    src={src}
                    alt="Avatar"
                    className={`w-full h-full ${square ? "" : "rounded-full"}`}
                />
            ) : (
                <span>{initials}</span>
            )}
        </span>
    );
};

type AvatarGroupProps = {
    children: React.ReactNode;
    max?: number;
    direction?: "row" | "column";
} & AvatarProps;

const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, max = 5, direction = "row", ...props }) => {
    return (
        <div className={`flex ${direction === "row" ? "flex-row -space-x-2" : "flex-col -space-y-2"} items-center`}>
            {React.Children.map(children, (child, index) => {
                if (index < max) {
                    return React.cloneElement(child as React.ReactElement, props);
                } else if (index === max) {
                    return (
                        <Avatar
                            initials={`+${React.Children.count(children) - max}`}
                            size="10"
                            className="ring-2 ring-white dark:ring-zinc-900"
                        />
                    );
                }
            })}
        </div>
    );
}

export { Avatar, AvatarGroup };
