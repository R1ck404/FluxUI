import CodeBox from "@/app/components/code-box/code-box";
import { Separator } from "@/app/components/seperator/separator";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import Button from "@/app/components/button/button";

export default function ButtonPreviews() {
    return (
        <main className="flex flex-col space-y-1 pb-8">
            <h1 className="text-xl font-semibold text-black dark:text-white">Button</h1>
            <p className="text-zinc-400 text-sm">Buttons are used to trigger an action or event.</p>
            <ComponentPreview properties={{}}>
                <Button variant="default" color={"dark/zinc"}>Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
            </ComponentPreview>

            <CodeBox component="button" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">Buttons can be used in various ways.</p>

            <ComponentPreview properties={{ disabled: "true" }}>
                <Button variant="default" color={"dark/zinc"} disabled>Default</Button>
            </ComponentPreview>

            <ComponentPreview properties={{ loading: "true" }}>
                <Button variant="default" color={"dark/zinc"} loading>Loading</Button>
            </ComponentPreview>

            <ComponentPreview properties={{ align: "end" }}>
                <Button variant="default" color={"dark/zinc"} align="end" className="w-28">Start</Button>
            </ComponentPreview>

            <ComponentPreview properties={{ href: "https://rickhuijser.com/", color: "blue" }}>
                <Button variant="default" color="blue" align="end" href="https://rickhuijser.com/">View my portfolio</Button>
            </ComponentPreview>

            <div className="w-full flex justify-between mt-8">
                <Button color="dark/zinc" className="w-min" href="/docs/badge">
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" className="rotate-180"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                    <span>Badge</span>
                </Button>
                <Button color="dark/zinc" className="w-min" href="/docs/checkbox">
                    <span>Checkbox</span>
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                </Button>
            </div>
        </main>
    );
}
