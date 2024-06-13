"use client"

import Image from "next/image";
import Button from "@/app/components/button/button";
import { useState } from "react";
import CodeBox from "@/app/components/code-box/code-box";
import { Separator } from "@/app/components/seperator/separator";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import { Dialog, DialogTitle, DialogDescription, DialogContent, DialogActions } from "@/app/components/dialog/dialog";

export default function DialogPreviews() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenOutline, setIsOpenOutline] = useState(false);
    const [buttonClicked, setButtonClicked] = useState("none");

    return (
        <main className="flex flex-col space-y-1 pb-8">
            <h1 className="text-xl font-semibold text-black dark:text-white">Dialog</h1>
            <p className="text-zinc-400 text-sm">Dialogs are used to inform users about a situation or action.</p>
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

            <div className="w-full flex justify-between mt-8">
                <Button color="dark/zinc" className="w-min" href="/docs/context-menu">
                    <svg className="rotate-180" width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                    <span>Context-Menu</span>
                </Button>
                <Button color="dark/zinc" className="w-min" href="/docs/dropdown">
                    <span>Dropdown</span>
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                </Button>
            </div>
        </main>
    );
}
