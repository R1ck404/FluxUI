"use client"

import CodeBox from "@/app/components/code-box/code-box";
import { Separator } from "@/app/components/seperator/separator";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import Checkbox from "@/app/components/checkbox/checkbox";
import Button from "@/app/components/button/button";
import Input from "@/app/components/input/input";
import Feedback from "@/app/components/feedback/feedback";
import { toast } from "@/app/components/toast/toast";
import Badge from "@/app/components/badge/badge";

export default function FeedbackPreviews() {
    const handleFeedbackSubmit = (feedback: string) => {
        toast.success("Thank you for your feedback!", { description: feedback });
    };

    return (
        <main className="flex flex-col space-y-1 pb-8">
            <h1 className="text-xl font-semibold text-black dark:text-white">Feedback</h1>
            <p className="text-zinc-400 text-sm">Feedback components are used to collect data from the user.</p>
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

            <div className="w-full flex justify-between mt-8">
                <Button color="dark/zinc" className="w-min" href="/docs/dropdown">
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" className="rotate-180"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                    <span>Dropdown</span>
                </Button>
                <Button color="dark/zinc" className="w-min" href="/docs/input">
                    <span>Input</span>
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                </Button>
            </div>
        </main>
    );
}
