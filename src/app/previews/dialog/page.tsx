"use client"

import Image from "next/image";
import Button from "@/app/components/button/button";
import { useState } from "react";
import { Alert, AlertActions, AlertDescription, AlertTitle } from "../../components/alert/alert";
import { Dialog, DialogActions, DialogContent, DialogDescription, DialogTitle } from "@/app/components/dialog/dialog";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main className="flex flex-col space-y-6">
            <h1 className="text-xl font-semibold text-white">Dialog</h1>
            <p className="text-zinc-400 text-sm">Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.</p>
            <div className="flex justify-center items-center w-full py-12 border rounded-lg border-border">

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
            </div>
        </main>
    );
}
