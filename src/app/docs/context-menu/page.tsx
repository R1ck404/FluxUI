"use client"

import CodeBox from "@/app/components/code-box/code-box";
import { Separator } from "@/app/components/seperator/separator";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import Choicebox from "@/app/components/choicebox/choicebox";
import { useState } from "react";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/app/components/context-menu/context-menu";
import Button from "@/app/components/button/button";
import { Avatar } from "@/app/components/avatar/avatar";

export default function ContextMenuPreviews() {
    const [clickedItem, setClickedItem] = useState<string | null>(null);

    const handleItemClick = (item: string) => {
        setClickedItem(item);
    };

    return (
        <main className="flex flex-col space-y-1 pb-8">
            <h1 className="text-xl font-semibold text-black dark:text-white">ContextMenu</h1>
            <p className="text-zinc-400 text-sm">Context menus are used to display actions that are contextually relevant to the selected element.</p>
            <ComponentPreview properties={{ selected_item: String(clickedItem) }}>
                <ContextMenu>
                    <ContextMenuTrigger>
                        <div className="p-8 border border-dashed border-border text-black dark:text-white rounded-md">
                            Right-click on me!
                        </div>
                    </ContextMenuTrigger>

                    <ContextMenuContent className="space-y-1 min-w-40" outline>
                        <ContextMenuItem onClick={() => handleItemClick('Dashboard')}>Dashboard</ContextMenuItem>
                        <Separator />
                        <ContextMenuItem onClick={() => handleItemClick('Team 1')}>
                            <Avatar size="4" initials="T1" />
                            <span>Team 1</span>
                        </ContextMenuItem>
                        <ContextMenuItem onClick={() => handleItemClick('Team 2')}>
                            <Avatar size="4" initials="T2" />
                            <span>Team 2</span>
                        </ContextMenuItem>
                        <Separator />
                        <ContextMenuItem onClick={() => handleItemClick('Logout')}>Logout</ContextMenuItem>
                    </ContextMenuContent>
                </ContextMenu>
            </ComponentPreview>

            <CodeBox component="context-menu" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">Context menus can be used in various ways.</p>

            <ComponentPreview properties={{ disabled: "true" }}>
                <ContextMenu>
                    <ContextMenuTrigger disabled>
                        <div className="p-8 border border-dashed border-border text-black dark:text-white rounded-md">
                            Right-click on me!
                        </div>
                    </ContextMenuTrigger>

                    <ContextMenuContent className="space-y-1 min-w-40" outline>
                        <ContextMenuItem disabled onClick={() => handleItemClick('Item 1')}>Item 1</ContextMenuItem>
                        <Separator />
                        <ContextMenuItem onClick={() => handleItemClick('Item 2')}>Item 2</ContextMenuItem>
                        <Separator />
                        <ContextMenuItem onClick={() => handleItemClick('Item 3')}>Item 3</ContextMenuItem>
                    </ContextMenuContent>
                </ContextMenu>
            </ComponentPreview>
            <ComponentPreview properties={{ item_disabled: "true" }}>
                <ContextMenu>
                    <ContextMenuTrigger>
                        <div className="p-8 border border-dashed border-border text-black dark:text-white rounded-md">
                            Right-click on me!
                        </div>
                    </ContextMenuTrigger>

                    <ContextMenuContent className="space-y-1 min-w-40" outline>
                        <ContextMenuItem disabled onClick={() => handleItemClick('Item 1')}>Item 1</ContextMenuItem>
                        <Separator />
                        <ContextMenuItem onClick={() => handleItemClick('Item 2')}>Item 2</ContextMenuItem>
                        <Separator />
                        <ContextMenuItem onClick={() => handleItemClick('Item 3')}>Item 3</ContextMenuItem>
                    </ContextMenuContent>
                </ContextMenu>
            </ComponentPreview>

            <div className="w-full flex justify-between mt-8">
                <Button color="dark/zinc" className="w-min" href="/docs/choicebox">
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" className="rotate-180"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                    <span>Choicebox</span>
                </Button>
                <Button color="dark/zinc" className="w-min" href="/docs/dialog">
                    <span>Dialog</span>
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                </Button>
            </div>
        </main>
    );
}
