import CodeBox from "@/app/components/code-box/code-box";
import { Separator } from "@/app/components/seperator/separator";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import Checkbox from "@/app/components/checkbox/checkbox";
import Button from "@/app/components/button/button";
import Input from "@/app/components/input/input";

export default function inputPreviews() {
    return (
        <main className="flex flex-col space-y-1 pb-8">
            <h1 className="text-xl font-semibold text-black dark:text-white">Input</h1>
            <p className="text-zinc-400 text-sm">Inputs are used to collect data from the user.</p>
            <ComponentPreview properties={{}}>
                <Input placeholder="Input" />
            </ComponentPreview>

            <CodeBox component="input" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">
                Inputs can be used in various ways.
            </p>

            <ComponentPreview properties={{ disabled: "true" }}>
                <Input disabled placeholder="Input" />
            </ComponentPreview>

            <ComponentPreview properties={{ color: "indigo" }}>
                <Input color="indigo" placeholder="Input" />
            </ComponentPreview>

            <div className="w-full flex justify-between mt-8">
                <Button color="dark/zinc" className="w-min" href="/docs/dialog">
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" className="rotate-180"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                    <span>Dialog</span>
                </Button>
                <Button color="dark/zinc" className="w-min" href="/docs/separator">
                    <span>Separator</span>
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                </Button>
            </div>
        </main>
    );
}
