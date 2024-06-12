"use client"

import React, { useState } from "react";
import classNames from "classnames";
import CustomCheckbox from "../checkbox/checkbox";

export interface ChoiceBoxProps {
    color?: 'dark/zinc';
    disabled?: boolean;
    defaultChecked?: boolean;
    checked?: boolean;
    onChange?: (isChecked: boolean) => void;
    children?: React.ReactNode;
}

const ChoiceBox = ({
    color = "dark/zinc",
    disabled = false,
    defaultChecked = false,
    checked: controlledChecked,
    onChange,
    children,
}: ChoiceBoxProps) => {
    const [isChecked, setIsChecked] = useState(controlledChecked !== undefined ? controlledChecked : defaultChecked);

    return (
        <div className="flex items-center space-x-2 border border-border p-3 rounded-md" onClick={() => { setIsChecked(true) }}>
            <div className="flex-grow">{children}</div>
            <div>
                <CustomCheckbox
                    color={color}
                    disabled={disabled}
                    defaultChecked={isChecked}
                    checked={isChecked}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default ChoiceBox;
