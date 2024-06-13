"use client"

import CodeBox from "@/app/components/code-box/code-box";
import { Separator } from "@/app/components/seperator/separator";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import Button from "@/app/components/button/button";
import { Dropdown, DropdownDescription, DropdownDivider, DropdownHeader, DropdownHeading, DropdownItem, DropdownLabel, DropdownMenu, DropdownSection, DropdownTrigger } from "@/app/components/dropdown/dropdown";
import { useState } from "react";

export default function DropdownPreviews() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const [isOpen2, setIsOpen2] = useState(false);

    const toggleDropdown2 = () => setIsOpen2(!isOpen2);
    return (
        <main className="flex flex-col space-y-1 pb-8">
            <h1 className="text-xl font-semibold text-black dark:text-white">Dropdown</h1>
            <p className="text-zinc-400 text-sm">Dropdowns are toggleable, contextual overlays for displaying lists of links and more.</p>
            <ComponentPreview properties={{}}>
                <Dropdown>
                    <DropdownTrigger onClick={toggleDropdown}>

                        <Button color="dark/zinc">
                            <span>Options</span>
                            <svg width="6" height="3" className="ml-2 overflow-visible" aria-hidden="true"><path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu isOpen={isOpen}>
                        <DropdownSection className="w-auto">
                            <DropdownLabel className="text-nowrap w-fit px-2">Signed in as Bjarne Stroustrup</DropdownLabel>
                            <DropdownHeading className="font-semibold !pt-0">bjarne@cpp.com</DropdownHeading>
                        </DropdownSection>
                        <DropdownDivider className="w-[90%] mx-auto !my-0" />
                        <DropdownSection>
                            <DropdownItem>My profile</DropdownItem>
                            <DropdownItem >Notifications</DropdownItem>
                            <DropdownItem>Settings</DropdownItem>

                            <DropdownDivider className="w-[90%] mx-auto" />
                            <DropdownItem>Delete</DropdownItem>
                        </DropdownSection>
                    </DropdownMenu>
                </Dropdown>
            </ComponentPreview>

            <CodeBox component="dropdown" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">Dropdowns can be used in various ways.</p>

            <ComponentPreview properties={{ rounded: "false" }}>
                {/* open, rename, delete */}
                <Dropdown>
                    <DropdownTrigger onClick={toggleDropdown2}>
                        <Button color="dark/zinc">Options</Button>
                    </DropdownTrigger>
                    <DropdownMenu isOpen={isOpen2}>
                        <DropdownSection>
                            <DropdownItem>Open</DropdownItem>
                            <DropdownItem>Rename</DropdownItem>
                            <DropdownItem>Delete</DropdownItem>
                        </DropdownSection>
                    </DropdownMenu>
                </Dropdown>
            </ComponentPreview>

            <div className="w-full flex justify-between mt-8">
                <Button color="dark/zinc" className="w-min" href="/docs/dialog">
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" className="rotate-180"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                    <span>Dialog</span>
                </Button>
                <Button color="dark/zinc" className="w-min" href="/docs/input">
                    <span>Input</span>
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                </Button>
            </div>
        </main>
    );
}
