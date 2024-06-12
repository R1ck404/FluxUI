import CodeBox from "@/app/components/code-box/code-box";
import { Separator } from "@/app/components/seperator/separator";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import Checkbox from "@/app/components/checkbox/checkbox";
import Button from "@/app/components/button/button";

export default function CheckboxPreviews() {
    return (
        <main className="flex flex-col space-y-1 pb-8">
            <h1 className="text-xl font-semibold text-black dark:text-white">Checkbox</h1>
            <p className="text-zinc-400 text-sm">Checkboxes are used to select one or more options.</p>
            <ComponentPreview properties={{}}>
                <Checkbox>Checkbox</Checkbox>
            </ComponentPreview>

            <CodeBox component="checkbox" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">Checkboxes can be used in various ways.</p>

            <ComponentPreview properties={{ disabled: "true" }}>
                <Checkbox disabled>Checkbox</Checkbox>
            </ComponentPreview>

            <ComponentPreview properties={{ color: "indigo" }}>
                <Checkbox color="indigo">Checkbox</Checkbox>
            </ComponentPreview>

            <ComponentPreview properties={{ defaultChecked: "true" }}>
                <Checkbox defaultChecked>Checkbox</Checkbox>
            </ComponentPreview>

            <div className="w-full flex justify-between mt-8">
                <Button color="dark/zinc" className="w-min" href="/docs/card">
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" className="rotate-180"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                    <span>Card</span>
                </Button>
                <Button color="dark/zinc" className="w-min" href="/docs/choicebox">
                    <span>Choicebox</span>
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                </Button>
            </div>
        </main>
    );
}
