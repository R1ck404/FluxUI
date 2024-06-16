"use client"

import { Alert, AlertTitle, AlertDescription, AlertActions } from "@/app/components/alert/alert";
import Button from "@/app/components/button/button";
import CodeBox from "@/app/components/code-box/code-box";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page";
import { Separator } from "@/app/components/seperator/separator";
import { useState } from "react";

export default function AlertComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenOutline, setIsOpenOutline] = useState(false);
    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Components" }, { label: "Alert" }]} currentPage="Alert" previousPage={{ name: "Templates", href: "/docs/templates" }} nextPage={{ name: "Avatar", href: "/docs/components/avatar" }}>
            <h1 className="text-3xl font-semibold text-color-default">Alert</h1>
            <p className="mt-4 text-color-secondary">
                Alerts are used to inform users about a situation or action.
            </p>

            <ComponentPreview properties={{ isOpen: String(isOpen), outline: "false" }}>
                <Button onClick={() => setIsOpen(true)} variant="default" color="dark/zinc">
                    Refund payment
                </Button>
                <Alert open={isOpen} onClose={setIsOpen} outline={false}>
                    <AlertTitle>Refund payment</AlertTitle>
                    <AlertDescription>Are you sure you want to refund this payment?</AlertDescription>
                    <AlertActions>
                        <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
                        <Button variant="ghost" onClick={() => setIsOpen(false)}>Refund</Button>
                    </AlertActions>
                </Alert>
            </ComponentPreview>

            <CodeBox component="alert" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">Alerts can be used in various ways.</p>

            <ComponentPreview properties={{ isOpen: String(isOpenOutline), outline: "true" }}>
                <Button onClick={() => setIsOpenOutline(true)} variant="default" color="dark/zinc">
                    Refund payment
                </Button>
                <Alert open={isOpenOutline} onClose={setIsOpenOutline} outline>
                    <AlertTitle>Refund payment</AlertTitle>
                    <AlertDescription>Are you sure you want to refund this payment?</AlertDescription>
                    <AlertActions>
                        <Button variant="ghost" onClick={() => setIsOpenOutline(false)}>Cancel</Button>
                        <Button variant="ghost" onClick={() => setIsOpenOutline(false)}>Refund</Button>
                    </AlertActions>
                </Alert>
            </ComponentPreview>
        </DocumentationPage>
    )
}