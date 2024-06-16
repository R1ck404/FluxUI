"use client"

import Button from "@/app/components/button/button";
import CodeBox from "@/app/components/code-box/code-box";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownLabel, DropdownHeading, DropdownDivider, DropdownItem } from "@/app/components/dropdown/dropdown";
import { Separator } from "@/app/components/seperator/separator";
import { useState } from "react";

export default function DropdownComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const [isOpen2, setIsOpen2] = useState(false);
    const toggleDropdown2 = () => setIsOpen2(!isOpen2);

    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Components" }, { label: "Dropdown" }]} currentPage="Dropdown" previousPage={{ name: "Dialog", href: "/docs/components/dialog" }} nextPage={{ name: "Feedback", href: "/docs/components/feedback" }}>
            <h1 className="text-3xl font-semibold text-color-default">Dropdown</h1>
            <p className="mt-4 text-color-secondary">
                Dropdowns are used to display a list of actions.
            </p>

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


        </DocumentationPage >
    )
}