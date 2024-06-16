import { Avatar, AvatarGroup } from "@/app/components/avatar/avatar";
import Button from "@/app/components/button/button";
import CodeBox from "@/app/components/code-box/code-box";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page";
import { Separator } from "@/app/components/seperator/separator";
import { useState } from "react";

export default function AvatarComponent() {
    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Components" }, { label: "Avatar" }]} currentPage="Avatar" previousPage={{ name: "Alert", href: "/docs/components/alert" }} nextPage={{ name: "Badge", href: "/docs/components/badge" }}>
            <h1 className="text-3xl font-semibold text-color-default">Alert</h1>
            <p className="mt-4 text-color-secondary">
                Avatars are used to represent users or entities.
            </p>
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
        </DocumentationPage>
    )
}