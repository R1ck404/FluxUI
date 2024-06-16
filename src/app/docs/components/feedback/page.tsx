"use client"

import Badge from "@/app/components/badge/badge";
import Button from "@/app/components/button/button";
import CodeBox from "@/app/components/code-box/code-box";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownLabel, DropdownHeading, DropdownDivider, DropdownItem } from "@/app/components/dropdown/dropdown";
import Feedback from "@/app/components/feedback/feedback";
import { Separator } from "@/app/components/seperator/separator";
import { toast } from "@/app/components/toast/toast";
import { useState } from "react";

export default function FeedbackComponent() {
    const handleFeedbackSubmit = (feedback: string) => {
        toast.success("Thank you for your feedback!", { description: feedback });
    };

    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Components" }, { label: "Feedback" }]} currentPage="Feedback" previousPage={{ name: "Dropdown", href: "/docs/components/dropdown" }} nextPage={{ name: "Input", href: "/docs/components/input" }}>
            <h1 className="text-3xl font-semibold text-color-default">Feedback</h1>
            <p className="mt-4 text-color-secondary">
                Feedback components are used to provide feedback to users.
            </p>

            <ComponentPreview properties={{}}>
                <Feedback onSubmit={handleFeedbackSubmit} />
            </ComponentPreview>

            <CodeBox component="input" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">
                Feedback components can be used in various ways.
            </p>

            <ComponentPreview properties={{ feedbackTypes: 'custom', spacing: "md" }}>
                <Feedback onSubmit={handleFeedbackSubmit} spacing="md" feedbackTypes={
                    [
                        { id: 1, icon: <Badge color="green">Nice</Badge>, label: "Nice" },
                        { id: 2, icon: <Badge color="yellow">Okay</Badge>, label: "Okay" },
                        { id: 3, icon: <Badge color="red">Not Good</Badge>, label: "Not Good" }
                    ]
                } />
            </ComponentPreview>

            <ComponentPreview properties={{ feedbackTypes: 'custom', rounded: 'lg', spacing: "md" }}>
                <Feedback onSubmit={handleFeedbackSubmit} rounded="lg" spacing="md" feedbackTypes={
                    [
                        { id: 1, icon: <Badge color="green" rounded={false}>Nice</Badge>, label: "Nice" },
                        { id: 2, icon: <Badge color="yellow" rounded={false}>Okay</Badge>, label: "Okay" },
                        { id: 3, icon: <Badge color="red" rounded={false}>Not Good</Badge>, label: "Not Good" }
                    ]
                } />
            </ComponentPreview>
        </DocumentationPage >
    )
}