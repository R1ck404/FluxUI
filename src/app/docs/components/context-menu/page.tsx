"use client"
import { Avatar } from "@/app/components/avatar/avatar";
import Button from "@/app/components/button/button";
import Checkbox from "@/app/components/checkbox/checkbox";
import Choicebox from "@/app/components/choicebox/choicebox";
import CodeBox from "@/app/components/code-box/code-box";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "@/app/components/context-menu/context-menu";
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page";
import { Separator } from "@/app/components/seperator/separator";
import { useState } from "react";

export default function ContextMenuComponent() {
    const [clickedItem, setClickedItem] = useState<string | null>(null);

    const handleItemClick = (item: string) => {
        setClickedItem(item);
    };
    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Components" }, { label: "ContextMenu" }]} currentPage="ContextMenu" previousPage={{ name: "Choicebox", href: "/docs/components/choicebox" }} nextPage={{ name: "Dialog", href: "/docs/components/dialog" }}>
            <h1 className="text-3xl font-semibold text-color-default">Context Menu</h1>
            <p className="mt-4 text-color-secondary">
                Context menus are used to display a list of actions.
            </p>

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
        </DocumentationPage >
    )
}