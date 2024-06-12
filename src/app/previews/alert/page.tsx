"use client"

import Image from "next/image";
import Button from "@/app/components/button/button";
import { useState } from "react";
import { Alert, AlertActions, AlertDescription, AlertTitle } from "../../components/alert/alert";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main className="flex flex-col space-y-6">
            <h1 className="text-xl font-semibold text-white">Alert</h1>
            <p className="text-zinc-400 text-sm">Alerts are used to inform users about a situation or action.</p>
            <div className="flex justify-center items-center w-full py-12 border rounded-lg border-border">

                <Button onClick={() => setIsOpen(true)} variant="default" color="dark/zinc">
                    Refund payment
                </Button>
                <Alert open={isOpen} onClose={setIsOpen}>
                    <AlertTitle>Refund payment</AlertTitle>
                    <AlertDescription>Are you sure you want to refund this payment?</AlertDescription>
                    <AlertActions>
                        <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
                        <Button variant="ghost" onClick={() => setIsOpen(false)}>Refund</Button>
                    </AlertActions>
                </Alert>
            </div>
        </main>
    );
}
