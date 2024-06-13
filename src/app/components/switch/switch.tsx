import React, { useState, ChangeEventHandler, MouseEventHandler } from 'react';
import classNames from 'classnames';
const colors = require('tailwindcss/colors');

interface SwitchProps {
    color?: 'dark' | 'light' | 'dark/white' | 'dark/zinc' | "unknown" | typeof colors;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    disabled?: boolean;
    name?: string;
    value?: string;
    defaultChecked?: boolean;
    checked?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    children?: React.ReactNode;
    contentAlign?: 'before' | 'after';
    className?: string;
}

const Switch: React.FC<SwitchProps> = ({
    color = 'dark/zinc',
    size = 'md',
    disabled = false,
    name,
    value,
    defaultChecked = false,
    checked,
    onChange,
    children,
    contentAlign = 'before',
    className,
}) => {
    const ref = React.createRef<HTMLInputElement>();
    const [isChecked, setIsChecked] = useState(defaultChecked);
    const colorClasses = colors[color];

    const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
        if (!disabled) {
            setIsChecked(!isChecked);
            if (onChange) {
                const input = ref.current;
                if (input) {
                    input.checked = !isChecked;
                    onChange({ target: input } as React.ChangeEvent<HTMLInputElement>);
                }
            }
        }
    }

    const switchClasses = classNames('bg-secondary rounded-xl relative inline-flex items-center transition-all border border-transparent', {
        'w-7 min-h-4': size === 'sm',
        'w-9 min-h-5': size === 'md',
        'w-11 min-h-6': size === 'lg',
        'w-[3.25rem] min-h-7 !rounded-full': size === 'xl',

        'cursor-pointer': !disabled,
        'cursor-not-allowed opacity-50': disabled,
        'border !border-border': !isChecked && ['dark', 'light', 'dark/white', 'dark/zinc'].includes(color),
        'bg-zinc-600/80 dark:bg-zinc-500/80': isChecked,
    });

    const sliderClasses = classNames(
        'absolute cursor-pointer block rounded-full transition-all duration-200 ease-in-out left-0 bg-white shadow-md',
        {
            'w-3 h-3': size === 'sm',
            'w-4 h-4': size === 'md',
            'w-5 h-5': size === 'lg',
            'w-6 h-6': size === 'xl',
            'transform translate-x-0 ml-px': !isChecked,
            'transform translate-x-full !ml-px': isChecked,
        }
    );

    const contentPositionClasses = {
        'ml-2': contentAlign === 'after',
        'mr-2': contentAlign === 'before',
    };

    const style = {
        backgroundColor: colorClasses ? (isChecked ? colorClasses[500] : undefined) : color,
        color: colorClasses ? colorClasses[500] : "white",
    };

    const containerClass = classNames(`
        flex items-center text-color-default
    `, className);

    return (
        <div className={containerClass} onMouseDown={handleClick}>
            {contentAlign === 'before' && children && (
                <span className={classNames(contentPositionClasses)}>{children}</span>
            )}
            <input
                type="checkbox"
                className="hidden"
                name={name}
                value={value}
                defaultChecked={defaultChecked}
                checked={checked ?? isChecked}
                disabled={disabled}
                ref={ref}
            />
            <button className={switchClasses} style={style}>
                <span className={sliderClasses} />
            </button>
            {contentAlign === 'after' && children && (
                <span className={classNames(contentPositionClasses)}>{children}</span>
            )}
        </div>
    );
};

export default Switch;
