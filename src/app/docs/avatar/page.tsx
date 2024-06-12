"use client"

import CodeBox from "@/app/components/code-box/code-box";
import { Separator } from "@/app/components/seperator/separator";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import { Avatar, AvatarGroup } from "@/app/components/avatar/avatar";
import Button from "@/app/components/button/button";

export default function AvatarPreviews() {
    return (
        <main className="flex flex-col space-y-1 pb-8">
            <h1 className="text-xl font-semibold text-black dark:text-white">Avatar</h1>
            <p className="text-zinc-400 text-sm">Avatars are used to represent users or entities.</p>
            <ComponentPreview properties={{ initials: "RH", size: "6-16" }}>
                <Avatar initials="RH" size="16" />
                <Avatar initials="RH" size="14" />
                <Avatar initials="RH" size="12" />
                <Avatar initials="RH" size="10" />
                <Avatar initials="RH" size="8" />
                <Avatar initials="RH" size="6" />
            </ComponentPreview>

            <CodeBox component="avatar" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">Avatars can be used in various ways.</p>

            <ComponentPreview properties={{ initials: "JD", size: "6-16", src: "unsplash" }}>
                <Avatar initials="JD" size="16" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar initials="JD" size="14" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar initials="JD" size="12" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar initials="JD" size="10" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar initials="JD" size="8" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar initials="JD" size="6" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar initials="JD" size="4" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
            </ComponentPreview>

            <ComponentPreview properties={{ initials: "JD", size: "6-16", src: "unsplash", square: "true" }}>
                <Avatar square initials="JD" size="16" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar square initials="JD" size="14" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar square initials="JD" size="12" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar square initials="JD" size="10" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar square initials="JD" size="8" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar square initials="JD" size="6" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar square initials="JD" size="4" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
            </ComponentPreview>

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Avatar Group Examples</h1>
            <p className="text-zinc-400 text-sm">Use the AvatarGroup component to render multiple avatars</p>
            <ComponentPreview properties={{ max: "5", direction: "row", children: "6" }}>
                <AvatarGroup max={5} direction="row">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <Avatar key={item} initials="JD" size="10" className="ring-2 ring-white dark:ring-zinc-900" />
                    ))}
                </AvatarGroup>
            </ComponentPreview>

            <ComponentPreview properties={{ max: "5", direction: "column", children: "6" }}>
                <AvatarGroup max={5} direction="column">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <Avatar key={item} initials="JD" size="10" className="ring-2 ring-white dark:ring-zinc-900" />
                    ))}
                </AvatarGroup>
            </ComponentPreview>

            <div className="w-full flex justify-between mt-8">
                <Button color="dark/zinc" className="w-min" href="/docs/installation">
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" className="rotate-180"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                    <span>Alert</span>
                </Button>
                <Button color="dark/zinc" className="w-min" href="/docs/badge">
                    <span>Badge</span>
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                </Button>
            </div>
        </main>
    );
}
