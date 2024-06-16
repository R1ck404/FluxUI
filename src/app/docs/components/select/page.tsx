"use client"

import Button from "@/app/components/button/button"
import CodeBox from "@/app/components/code-box/code-box"
import ComponentPreview from "@/app/components/component-preview/component-preview"
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page"
import Input from "@/app/components/input/input"
import { Select, SelectOption, ErrorMessage } from "@/app/components/select/select"
import { Separator } from "@/app/components/seperator/separator"
import { useState } from "react"

const options = [
    { label: 'Admin', value: 'option1' },
    { label: 'Moderator', value: 'option2' },
    { label: 'Owner', value: 'option3' },
];


export default function SelectComponent() {
    const [selectedOption, setSelectedOption] = useState({ label: 'option 1', value: 'option1' });

    const handleChange = (value: { label?: string; value: string | number }) => {
        setSelectedOption(value as { label: string; value: string });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submitted with selected option:', selectedOption);
        // Perform form submission logic here
    };


    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Components" }, { label: "Select" }]} currentPage="Select" previousPage={{ name: "Input", href: "/docs/components/input" }} nextPage={{ name: "Separator", href: "/docs/components/separator" }}>
            <h1 className="text-3xl font-semibold text-color-default">Select</h1>
            <p className="mt-4 text-color-secondary">
                Selects are used to collect data from the user.
            </p>

            <ComponentPreview properties={{ selected_item: selectedOption.value }}>
                <form onSubmit={handleSubmit}>
                    <Select
                        value={selectedOption}
                        onChange={handleChange}
                        invalid={!selectedOption}
                        position="default"
                        name="selectOption"
                        trigger={
                            <Button variant="default" color="dark/zinc">
                                <span>
                                    {selectedOption.label ? selectedOption.label : 'Select an option'}
                                </span>
                                <svg className="size-5 stroke-zinc-500 group-has-[[data-disabled]]:stroke-zinc-600 sm:size-4 dark:stroke-zinc-400 forced-colors:stroke-[CanvasText]" viewBox="0 0 16 16" aria-hidden="true" fill="none"><path d="M5.75 10.75L8 13L10.25 10.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.25 5.25L8 3L5.75 5.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </Button>
                        }>
                        {options.map((option) => (
                            <SelectOption key={option.value} value={option.value}>
                                {option.label}
                            </SelectOption>
                        ))}
                    </Select>
                    {!selectedOption && <ErrorMessage>Please select an option.</ErrorMessage>}
                </form>
            </ComponentPreview>
            <CodeBox component="select" />
        </DocumentationPage >
    )
}