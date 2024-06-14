"use client"

import CodeBox from "@/app/components/code-box/code-box";
import { Separator } from "@/app/components/seperator/separator";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import Button from "@/app/components/button/button";
import Switch from "@/app/components/switch/switch";
import { useState } from "react";
import { Toaster, toast } from "@/app/components/toast/toast";

export default function ToastPreviews() {
    const [checked, setChecked] = useState(false);

    const fakePromise = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Event has been created');
            }, 2000);
        });
    }

    return (
        <main className="flex flex-col space-y-1 pb-8">
            <h1 className="text-xl font-semibold text-black dark:text-white">Toast</h1>
            <p className="text-zinc-400 text-sm">Toasts are used to show feedback to the user.</p>
            <ComponentPreview properties={{}}>
                <Button color="dark/zinc" onClick={() => toast.success('User has been deleted.')}>
                    Delete user
                </Button>
            </ComponentPreview>

            <CodeBox component="switch" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">Toasts can be used in various ways.</p>
            <ComponentPreview properties={{ description: 'Monday, January 3rd at 6:00pm', action: 'button' }}>
                <Button color="dark/zinc" onClick={() => toast.message('Meeting joined', {
                    description: 'Monday, January 3rd at 6:00pm',
                    action: <Button variant="ghost" onClick={() => toast.success('Meeting left')}>Leave</Button>
                })}>
                    <span>Join meeting</span>
                </Button>
                <Toaster position="bottom-right" />
            </ComponentPreview>

            <ComponentPreview properties={{ action: 'button' }}>
                <Button color="dark/zinc" onClick={() => toast.info('Event has been created', {
                    action: <Button variant="ghost" onClick={() => toast.success('Event has been removed')}>Undo</Button>
                })}>
                    <span>Create an event</span>
                </Button>
            </ComponentPreview>

            <ComponentPreview properties={{ loading: 'div.svg~span', success: 'It works!', error: 'Shit, something went wrong...' }}>
                <Button color="dark/zinc" onClick={() => toast.promise(fakePromise, {
                    loading: <div className="flex space-x-1">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Its doing its thing...</span>
                    </div>,
                    success: 'It works!',
                    error: 'Shit, something went wrong...'
                })}>
                    <span>This works, i 'promise'!</span>
                </Button>
            </ComponentPreview>
            <div className="w-full flex justify-between mt-8">
                <Button color="dark/zinc" className="w-min" href="/docs/switch">
                    <svg className="rotate-180" width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                    <span>Switch</span>
                </Button>
            </div>
        </main>
    );
}
