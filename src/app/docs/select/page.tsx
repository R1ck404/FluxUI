"use client"

import CodeBox from "@/app/components/code-box/code-box";
import { Separator } from "@/app/components/seperator/separator";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import Badge from "@/app/components/badge/badge";
import Button from "@/app/components/button/button";
import { useState } from "react";
import { SelectLabel, SelectDescription, Select, SelectOption, ErrorMessage } from "@/app/components/select/select";

const options = [
    { label: 'Admin', value: 'option1' },
    { label: 'Moderator', value: 'option2' },
    { label: 'Owner', value: 'option3' },
];


export default function SelectPreviews() {
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
        <main className="flex flex-col space-y-1 pb-8">
            <h1 className="text-xl font-semibold text-black dark:text-white">Select</h1>
            <p className="text-zinc-400 text-sm">Selects are used to collect data from the user.</p>
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
            <CodeBox component="badge" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">Select's can be used in various ways.</p>

            <div className="w-full flex justify-between mt-8">
                <Button color="dark/zinc" className="w-min" href="/docs/input">
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" className="rotate-180"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                    <span>Input</span>
                </Button>
                <Button color="dark/zinc" className="w-min" href="/docs/separator">
                    <span>Separator</span>
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                </Button>
            </div>
        </main>
    );
}
