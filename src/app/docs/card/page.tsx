import CodeBox from "@/app/components/code-box/code-box";
import { Separator } from "@/app/components/seperator/separator";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import Button from "@/app/components/button/button";
import Card from "@/app/components/card/card";

export default function CardPreview() {
    return (
        <main className="flex flex-col space-y-1 pb-8">
            <h1 className="text-xl font-semibold text-black dark:text-white">Card</h1>
            <p className="text-zinc-400 text-sm">Cards are used to display content in a structured way.</p>
            <ComponentPreview properties={{}}>
                <Card outline>
                    <h1 className="text-xl font-semibold text-black dark:text-white">Pro VPS</h1>
                    <Separator className="!my-4" />
                    <p className="text-zinc-400 text-sm">2 - 32 dedicated vCPU's</p>
                    <p className="text-zinc-400 text-sm">4 - 128 GB RAM</p>
                    <p className="text-zinc-400 text-sm">1 - 16 TB SSD</p>
                    <p className="text-zinc-400 text-sm">Unlimited transfer</p>
                    <p className="text-zinc-400 text-sm">24/7 support</p>
                    <Separator className="!my-4" />
                    <Button color="dark/zinc">Order now</Button>
                </Card>
            </ComponentPreview>

            <CodeBox component="card" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">Cards can be used in various ways.</p>

            <ComponentPreview properties={{ outline: "false", shadow: "true" }}>
                <Card outline={false} shadow>
                    <h1 className="text-xl font-semibold text-black dark:text-white">Pro VPS</h1>
                    <Separator className="!my-4" />
                    <p className="text-zinc-400 text-sm">2 - 32 dedicated vCPU's</p>
                    <p className="text-zinc-400 text-sm">4 - 128 GB RAM</p>
                    <p className="text-zinc-400 text-sm">1 - 16 TB SSD</p>
                    <p className="text-zinc-400 text-sm">Unlimited transfer</p>
                    <p className="text-zinc-400 text-sm">24/7 support</p>
                    <Separator className="!my-4" />
                    <Button color="dark/zinc">Order now</Button>
                </Card>
            </ComponentPreview>

            <ComponentPreview properties={{ href: "/docs/getting-started", rounded: "false" }}>
                <Card href="/docs/getting-started" rounded={false}>
                    <h1 className="text-xl font-semibold text-black dark:text-white">Pro VPS</h1>
                    <Separator className="!my-4" />
                    <p className="text-zinc-400 text-sm">2 - 32 dedicated vCPU's</p>
                    <p className="text-zinc-400 text-sm">4 - 128 GB RAM</p>
                    <p className="text-zinc-400 text-sm">1 - 16 TB SSD</p>
                    <p className="text-zinc-400 text-sm">Unlimited transfer</p>
                    <p className="text-zinc-400 text-sm">24/7 support</p>
                    <Separator className="!my-4" />
                    <Button color="dark/zinc">Order now</Button>
                </Card>
            </ComponentPreview>

            <div className="w-full flex justify-between mt-8">
                <Button color="dark/zinc" className="w-min" href="/docs/button">
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" className="rotate-180"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                    <span>Button</span>
                </Button>
                <Button color="dark/zinc" className="w-min" href="/docs/checkbox">
                    <span>Checkbox</span>
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                </Button>
            </div>
        </main>
    );
}
