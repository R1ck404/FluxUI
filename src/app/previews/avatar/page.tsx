"use client"

import Image from "next/image";
import Button from "@/app/components/button/button";
import { useState } from "react";
import { Alert, AlertActions, AlertDescription, AlertTitle } from "../../components/alert/alert";
import { Avatar, AvatarGroup } from "../../components/avatar/avatar";

export default function Home() {
    return (
        <main className="flex flex-col">
            <h1 className="text-xl font-semibold text-white">Avatar</h1>
            <p className="text-zinc-400 text-sm mt-2">Avatar component is used to represent a user or an entity.</p>

            <p className="text-lg font-semibold text-white !mt-8">Examples</p>
            <p className="text-sm text-zinc-400">Avatar component can be used in different sizes and shapes.</p>
            <p className="text-sm text-zinc-400">Use the initials prop to render an avatar with initials</p>
            <p className="text-sm text-zinc-400">Use the src prop to render an avatar with an image</p>

            <div className="flex justify-center items-center w-full py-12 border rounded-lg border-border space-x-2 mt-6">
                <Avatar initials="JD" size="16" />
                <Avatar initials="JD" size="14" />
                <Avatar initials="JD" size="12" />
                <Avatar initials="JD" size="10" />
                <Avatar initials="JD" size="8" />
                <Avatar initials="JD" size="6" />
                <Avatar initials="JD" size="4" />
            </div>

            <div className="flex justify-center items-center w-full py-12 border rounded-lg border-border space-x-2 mt-6">
                <Avatar initials="JD" size="16" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar initials="JD" size="14" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar initials="JD" size="12" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar initials="JD" size="10" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar initials="JD" size="8" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar initials="JD" size="6" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar initials="JD" size="4" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
            </div>

            <h1 className="text-lg font-semibold text-white !mt-8">Square Avatar</h1>
            <p className="text-sm text-zinc-400 mt-2">Use the square prop to render a square avatar</p>
            <div className="flex justify-center items-center w-full py-12 border rounded-lg border-border space-x-2  mt-6">
                <Avatar initials="JD" size="16" square />
                <Avatar initials="JD" size="14" square />
                <Avatar initials="JD" size="12" square />
                <Avatar initials="JD" size="10" square />
                <Avatar initials="JD" size="8" square />
                <Avatar initials="JD" size="6" square />
                <Avatar initials="JD" size="4" square />
            </div>

            <div className="flex justify-center items-center w-full py-12 border rounded-lg border-border space-x-2 mt-6">
                <Avatar initials="JD" size="16" square src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar initials="JD" size="14" square src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar initials="JD" size="12" square src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar initials="JD" size="10" square src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar initials="JD" size="8" square src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar initials="JD" size="6" square src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                <Avatar initials="JD" size="4" square src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
            </div>

            <h1 className="text-lg font-semibold text-white mt-8">Avatar Group</h1>
            <p className="text-sm text-zinc-400 mt-2">Use the AvatarGroup component to render multiple avatars</p>
            <div className="flex justify-center items-center w-full py-12 border rounded-lg border-border -space-x-2 mt-6">

                <AvatarGroup max={5} direction="row">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <Avatar key={item} initials="JD" size="10" className="ring-2 ring-white dark:ring-zinc-900" />
                    ))}
                </AvatarGroup>
            </div>

            <p className="text-sm text-zinc-400 mt-2">Use the direction prop to render the avatars in a column</p>
            <div className="flex justify-center items-center w-full py-12 border rounded-lg border-border -space-x-2 mt-6">

                <AvatarGroup max={5} direction="column">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <Avatar key={item} initials="JD" size="10" src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="ring-2 ring-white dark:ring-zinc-900" />
                    ))}
                </AvatarGroup>
            </div>
        </main>
    );
}
