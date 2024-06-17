import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import Button from '../button/button';

interface SelectProps {
    disabled?: boolean;
    invalid?: boolean;
    name?: string;
    defaultValue?: string | number;
    value?: { label: string; value: string }
    onChange?: (value: { label?: string; value: string | number }) => void;
    position?: 'default' | 'popper';
    children?: React.ReactNode;
    className?: string;
    trigger?: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({
    disabled = false,
    invalid = false,
    name,
    defaultValue,
    value,
    onChange,
    position = 'default',
    children,
    className,
    trigger,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(defaultValue || value || '');

    const dropdownRef = useRef<HTMLUListElement>(null);

    const handleToggle = () => {
        if (!disabled) setIsOpen(!isOpen);
    };

    const handleChange = (newValue: string | number) => {
        setSelectedValue(newValue);
        setIsOpen(false);
        if (onChange) onChange({
            label: (React.Children.toArray(children).find((child) => (child as React.ReactElement<any>).props.value === newValue) as React.ReactElement<any>)?.props.children,
            value: newValue
        });
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const selectClasses = classNames(
        'relative bg-transparent rounded-md focus:outline-none',
        {
            'cursor-not-allowed opacity-50': disabled,
            'border-red-500': invalid,
        }
    );

    const fieldClasses = classNames('w-auto relative flex flex-col', {
        'cursor-not-allowed opacity-50': disabled,
    }, className);

    return (
        <div className={fieldClasses}>
            <div className={selectClasses}>
                {trigger ? (
                    <div onClick={handleToggle}>{trigger}</div>
                ) : (
                        <Button
                            variant='default'
                            color="dark/zinc"
                            align="start"
                            className="w-full h-full text-left bg-transparent"
                            onClick={handleToggle}
                        >
                            {(React.Children.toArray(children).find((child) => (child as React.ReactElement<any>).props.value === selectedValue) as React.ReactElement<any>)?.props.children}
                            <svg className="h-4 w-4 ml-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Button>
                )}
                <ul
                    ref={dropdownRef}
                    className={classNames(
                        'absolute -mt-[.05rem] -ml-[calc(.6rem/2)] min-w-[calc(100%+2px+.6rem)] w-auto bg-secondary text-color-secondary border border-border rounded-md shadow-lg z-[1010] p-1 space-y-1 transition-all duration-250 scale-100 transform origin-top',
                        {
                            'top-0 left-0 !mt-12': position === 'popper',
                            '-top-1': position === 'default',
                            'visible scale-100 opacity-100': isOpen,
                            'invisible scale-80 opacity-0': !isOpen,
                        }
                    )}
                    style={{ zIndex: 1000 }} // Added z-index directly for debugging
                >
                    {React.Children.map(children, (child) =>
                        React.cloneElement(child as React.ReactElement<any>, {
                            onSelect: handleChange,
                            isSelected: (child as React.ReactElement<any>).props.value === selectedValue,
                        })
                    )}
                </ul>
            </div>
        </div>
    );
};

interface SelectTriggerProps {
    children?: React.ReactNode;
}

const SelectTrigger: React.FC<SelectTriggerProps> = ({ children }) => {
    return <div className="relative">{children}</div>;
};

interface SelectOptionProps {
    value: string | number;
    onSelect?: (value: string | number) => void;
    isSelected?: boolean;
    children?: React.ReactNode;
    className?: string;
}

const SelectOption: React.FC<SelectOptionProps> = ({ value, onSelect, isSelected, children, className }) => {
    const optionClasses = classNames(
        'text-nowrap cursor-pointer select-none px-3 py-1.5 w-full border border-transparent rounded text-color-default hover:bg-zinc-500/30 text-sm font-semibold',
        {
            'bg-indigo-600 text-white hover:bg-indigo-500': isSelected,
        },
        className
    );

    return (
        <li
            className={optionClasses}
            onClick={() => {
                if (onSelect) onSelect(value);
            }}
        >
            {children}
        </li>
    );
};

interface SelectLabelProps {
    children?: React.ReactNode;
}

const SelectLabel: React.FC<SelectLabelProps> = ({ children }) => {
    return <label className="block text-sm font-medium text-gray-700 mb-1">{children}</label>;
};

interface SelectDescriptionProps {
    children?: React.ReactNode;
}

const SelectDescription: React.FC<SelectDescriptionProps> = ({ children }) => {
    return <p className="text-xs text-gray-500">{children}</p>;
};

interface ErrorMessageProps {
    children?: React.ReactNode;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
    return <p className="text-xs text-red-500 mt-1">{children}</p>;
};

export { Select, SelectOption, SelectLabel, SelectDescription, ErrorMessage };
