import React, { useState } from 'react';
import classNames from 'classnames';
import Button from '../button/button';

interface SelectProps {
    disabled?: boolean;
    invalid?: boolean;
    name?: string;
    defaultValue?: string | number;
    value?: string | number;
    onChange?: (value: string | number) => void;
    position?: 'default' | 'popper';
    children?: React.ReactNode;
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
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(defaultValue || value || '');

    const handleToggle = () => {
        if (!disabled) setIsOpen(!isOpen);
    };

    const handleChange = (newValue: string | number) => {
        setSelectedValue(newValue);
        setIsOpen(false);
        if (onChange) onChange(newValue);
    };

    const selectClasses = classNames(
        'relative bg-transparent border border-border rounded-md shadow-sm focus:outline-none',
        {
            'cursor-not-allowed opacity-50': disabled,
            'border-red-500': invalid,
            'z-10': isOpen && position === 'popper',
        }
    );

    return (
        <div className={selectClasses}>
            <Button variant='default' color="dark/zinc" align="start" className="w-full h-full text-left  bg-transparent"
                onClick={handleToggle}>
                {selectedValue}
                <span className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </span>
            </Button>
            {isOpen && (
                <ul
                    className={classNames(
                        'absolute mt-0.5 -ml-px min-w-[calc(100%+2px)] bg-secondary text-color-secondary border border-border rounded-md shadow-lg z-20 p-1 space-y-1',
                        {
                            'top-0 left-0 !mt-12': position === 'popper',
                            '-top-1': position === 'default',
                        }
                    )}
                >
                    {React.Children.map(children, (child) =>
                        React.cloneElement(child as React.ReactElement<any>, {
                            onSelect: handleChange,
                            isSelected: (child as React.ReactElement<any>).props.value === selectedValue,
                        })
                    )}
                </ul>
            )}
        </div>
    );
};

interface SelectOptionProps {
    value: string | number;
    onSelect?: (value: string | number) => void;
    isSelected?: boolean;
    children?: React.ReactNode;
}

const SelectOption: React.FC<SelectOptionProps> = ({ value, onSelect, isSelected, children }) => {
    const optionClasses = classNames(
        'cursor-pointer select-none py-2 px-3 w-full rounded text-color-default hover:bg-background',
        {
            'bg-indigo-600 text-white': isSelected,
        }
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

interface SelectFieldProps {
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
}

const SelectField: React.FC<SelectFieldProps> = ({ disabled = false, className, children }) => {
    const fieldClasses = classNames('relative flex flex-col', {
        'cursor-not-allowed opacity-50': disabled,
    }, className);

    return <div className={fieldClasses}>{children}</div>;
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

const SelectDescription: React.FC<SelectDescriptionProps> = ({ children }: { children?: React.ReactNode }) => {
    return <p className="text-xs text-gray-500">{children}</p>;
};

interface ErrorMessageProps {
    children?: React.ReactNode;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }: { children?: React.ReactNode }) => {
    return <p className="text-xs text-red-500 mt-1">{children}</p>;
};

export { Select, SelectOption, SelectField, SelectLabel, SelectDescription, ErrorMessage };