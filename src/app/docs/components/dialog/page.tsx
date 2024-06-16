"use client"

import Button from "@/app/components/button/button";
import CodeBox from "@/app/components/code-box/code-box";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import { DialogTitle, DialogDescription, DialogContent, DialogActions, Dialog } from "@/app/components/dialog/dialog";
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page";
import { Separator } from "@/app/components/seperator/separator";
import { useState } from "react";

export default function DialogComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenOutline, setIsOpenOutline] = useState(false);
    const [buttonClicked, setButtonClicked] = useState("none");
    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Components" }, { label: "Dialog" }]} currentPage="Dialog" previousPage={{ name: "ContextMenu", href: "/docs/components/contextmenu" }} nextPage={{ name: "Dropdown", href: "/docs/components/dropdown" }}>
            <h1 className="text-3xl font-semibold text-color-default">Dialog</h1>
            <p className="mt-4 text-color-secondary">
                Dialogs are used to inform users about a situation or action.
            </p>

            <ComponentPreview properties={{ isOpen: String(isOpen), outline: "false" }}>
                <Button onClick={() => setIsOpen(true)} variant="default" color="dark/zinc">
                    Delete user
                </Button>
                <Dialog open={isOpen} onClose={setIsOpen}>
                    <DialogTitle>Delete user</DialogTitle>
                    <DialogDescription>Are you sure you want to delete this user?</DialogDescription>
                    <DialogContent>
                        <p>This action cannot be undone.</p>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
                        <Button variant="ghost" onClick={() => setIsOpen(false)} color="rose">Delete</Button>
                    </DialogActions>
                </Dialog>
            </ComponentPreview>

            <CodeBox component="dialog" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">Dialogs can be used in various ways.</p>

            <ComponentPreview properties={{ isOpen: String(isOpenOutline), outline: "true", button_clicked: buttonClicked }}>
                <Button onClick={() => setIsOpenOutline(true)} variant="default" color="dark/zinc">
                    Delete user
                </Button>
                <Dialog open={isOpenOutline} onClose={setIsOpenOutline} outline>
                    <DialogTitle>Delete user</DialogTitle>
                    <DialogDescription>Are you sure you want to delete this user?</DialogDescription>
                    <DialogContent>
                        <p>This action cannot be undone.</p>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="ghost" onClick={() => {
                            setIsOpenOutline(false);
                            setButtonClicked("cancel");
                        }}>Cancel</Button>
                        <Button variant="ghost" onClick={() => {
                            setIsOpenOutline(false);
                            setButtonClicked("delete");
                        }} color="rose">Delete</Button>
                    </DialogActions>
                </Dialog>
            </ComponentPreview>
        </DocumentationPage >
    )
}