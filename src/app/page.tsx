
"use client"

import Image from "next/image";
import Button from "./components/button/button";
import Card from "./components/card/card";
import Badge from "./components/badge/badge";
import { DialogTitle, DialogDescription, DialogContent, DialogActions } from "./components/dialog/dialog";
import Checkbox from "./components/checkbox/checkbox";
import Choicebox from "./components/choicebox/choicebox";
import Input from "./components/input/input";
import { Separator } from "./components/seperator/separator";
import Switch from "./components/switch/switch";
import { ErrorMessage, Select, SelectOption } from "./components/select/select";
import { useState } from "react";

const options = [
    { label: 'Admin', value: 'option1' },
    { label: 'Moderator', value: 'option2' },
    { label: 'Owner', value: 'option3' },
];

export default function Home() {
    const changeTheme = () => {
        const html = document.querySelector("html");
        if (html) {
            html.classList.toggle("dark");
        }
    }

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
        <main className="flex items-center justify-center flex-row h-screen bg-background text-color-default">
            <section className="flex lg:flex-row flex-col items-center w-full md:w-4/5 xl:w-3/4 h-full pt-10">
                <div className="flex flex-col w-1/2 space-y-4">
                    <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-300">Fully Customizable <span className="text-4xl font-extrabold bg-gradient-to-r from-violet-500  to-indigo-500 inline-block text-transparent bg-clip-text">UI Components</span> for <span className="text-4xl font-extrabold bg-gradient-to-r from-violet-500  to-indigo-500 inline-block text-transparent bg-clip-text">Effortless Integration</span></h1>
                    <p className="dark:text-zinc-300">Build modern and beautiful user interfaces with our zero-dependency, copy-paste-ready React components. Enhance your project seamlessly, without the bloat.</p>
                    <div className="flex space-x-2">
                        <Button variant="default" href="/docs/getting-started" color="indigo">
                            <span>Get Started</span>
                            <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                        </Button>
                        <Button variant="default" color="dark/zinc" onClick={changeTheme}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-5 text-zinc-300 hover:text-zinc-200 dark:inline"><path fillRule="evenodd" d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z" clipRule="evenodd"></path></svg>
                        </Button>
                    </div>
                </div>

                <div className="flex justify-end items-center !mt-2 md:mt-0 md:space-x-4 px-2 md:pl-20 w-full flex-col md:flex-row">
                    <div className="space-y-4 w-72 flex flex-col justify-center">
                        <Select
                            value={selectedOption}
                            onChange={handleChange}
                            invalid={!selectedOption}
                            position="default"
                            name="selectOption"
                            className="ml-auto"
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
                        <Card className="flex justify-between w-full h-min" outline={false}>
                            <div className="flex flex-col space-y-2">
                                <p>Total revenue</p>
                                <h2 className="text-3xl font-extrabold">$1,200</h2>
                                <div className="inline-block space-x-1.5">
                                    <Badge color="green">+20%</Badge>
                                    <span className="text-xs">this week</span>
                                </div>
                            </div>
                            <Separator vertical />
                            <div className="flex flex-col space-y-2">
                                <p>Total orders</p>
                                <h2 className="text-3xl font-extrabold">25</h2>
                                <div className="inline-block space-x-1.5">
                                    <Badge color="red">-10%</Badge>
                                    <span className="text-xs">this week</span>
                                </div>
                            </div>
                        </Card>
                        <Card className="w-full h-min" outline={false}>
                            <div className="flex flex-col space-y-2">
                                <h1 className="text-xl font-extrabold">We use cookies!</h1>
                                <p className="text-sm">We use cookies to ensure you get the best experience on our website.</p>
                                <div className="flex justify-between !mt-4">
                                    <Button variant="ghost">Cancel</Button>
                                    <Button variant="default" color="indigo">Accept</Button>
                                </div>
                            </div>
                        </Card>
                        <Card outline={false} className="relative">
                            <h1 className="text-lg font-semibold text-color-default" >Share post</h1>
                            <p className="text-sm">Share this post with your friends.</p>
                            <hr className="my-4 border-border" />
                            <div className={"text-sm"}>
                                <Checkbox>
                                    Facebook
                                </Checkbox>
                                <Checkbox>
                                    Twitter
                                </Checkbox>
                                <Checkbox checked>
                                    LinkedIn
                                </Checkbox>
                            </div>
                            <div className="w-full text-end space-x-1">
                                <Button variant="ghost">Cancel</Button>
                                <Button variant="ghost" color="indigo">Share</Button>
                            </div>
                            <button
                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-500 focus:outline-none"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </Card>

                        <Switch className="ml-auto" color="dark/zinc" checked={true} onChange={() => { }} contentAlign="before" size="xl" />
                    </div>
                    <div className="space-y-4 w-72 flex flex-col justify-center mt-8 lg:mt-0">
                        <Card className=" relative" outline={false}>
                            <h1 className="text-lg font-semibold text-color-default">Delete user</h1>
                            <p className="text-sm">Are you sure you want to delete this user?</p>
                            <hr className="my-4 border-border" />
                            <div className="text-sm">
                                <p>This action cannot be undone.</p>
                            </div>

                            <div className="w-full text-end space-x-1 mt-4">
                                <Button variant="ghost">Cancel</Button>
                                <Button variant="ghost" color="rose">Delete</Button>
                            </div>
                            <button
                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-500 focus:outline-none"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </Card>

                        <Card className="w-full h-min" outline={false}>
                            <div className="flex flex-col space-y-2">
                                <h1 className="text-xl font-extrabold ">Select a plan</h1>
                                <p className="text-sm ">Choose a plan that works best for you.</p>

                                <div className="flex flex-col space-y-1">
                                    <Choicebox>
                                        <p className="text-md font-semibold text-black dark:text-white">Free</p>
                                        <p className="text-sm">Gets you access to all free features.</p>
                                    </Choicebox>
                                    <Choicebox checked>
                                        <p className="text-md font-semibold text-black dark:text-white">Pro</p>
                                        <p className="text-sm">Unlock all premium features.</p>
                                    </Choicebox>
                                </div>
                            </div>
                        </Card>

                        {/* preferences card, with TOS checkbox, and dark/lighgtmode toggle */}
                        <Card className="w-full h-min" outline={false}>
                            <div className="flex flex-col space-y-1">
                                <h1 className="text-xl font-extrabold">Edit account</h1>
                                <p className="text-sm">Customize your experience.</p>

                                <div className="flex flex-col space-y-1 text-sm !mt-4">
                                    <Input placeholder="Name" />
                                    <Input placeholder="Username" />
                                    <Button variant="default" color="dark/zinc" className="w-min ml-auto">Save</Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section >
        </main>
    );
}