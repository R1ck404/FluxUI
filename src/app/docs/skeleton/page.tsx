"use client"

import CodeBox from "@/app/components/code-box/code-box";
import { Separator } from "@/app/components/seperator/separator";
import ComponentPreview from "@/app/components/component-preview/component-preview";
import Checkbox from "@/app/components/checkbox/checkbox";
import Button from "@/app/components/button/button";
import Input from "@/app/components/input/input";
import Skeleton from "@/app/components/skeleton/skeleton";
import Card from "@/app/components/card/card";
import { useState } from "react";
import { Avatar } from "@/app/components/avatar/avatar";

export default function SkeletonPreviews() {
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);
    return (
        <main className="flex flex-col space-y-1 pb-8">
            <h1 className="text-xl font-semibold text-black dark:text-white">Skeleton</h1>
            <p className="text-zinc-400 text-sm">Skeletons are used to show a preview of the component while it's loading.</p>
            <p className="text-zinc-400 text-sm">
                Skeletons adapt to the component/element they are wrapping around.
            </p>

            <ComponentPreview properties={{ loading: String(loading) }} className="flex flex-col">
                <Skeleton loading={loading}>
                    <Card className="" outline={false}>
                        <div className="space-y-4 flex flex-col">
                            <h1 className="text-xl text-color-default font-bold">
                                Sign in
                            </h1>

                            <div className="flex flex-col space-y-2">
                                <p className="text-sm">Email address</p>
                                <Input placeholder="Email" />
                            </div>

                            <div className="flex flex-col space-y-2">
                                <div className="flex justify-between w-full space-x-10">
                                    <p className="text-sm">Password</p>
                                    <p className="text-sm">Forgot password?</p>
                                </div>
                                <Input placeholder="Password" />
                            </div>

                            <div className="flex ml-auto space-x-2">
                                <Button color="indigo" className="w-min">
                                    Sign in
                                </Button>
                                <Button color="dark/zinc" className="w-min ml-2">
                                    Sign up
                                </Button>
                            </div>
                        </div>
                    </Card>
                </Skeleton>

                <Button onClick={() => setLoading(!loading)} color="dark/zinc" className="w-min mt-4">
                    Toggle Skeleton
                </Button>
            </ComponentPreview>

            <CodeBox component="skeleton" />

            <Separator className="!my-4" />
            <h1 className="text-xl font-semibold text-black dark:text-white">Examples</h1>
            <p className="text-zinc-400 text-sm">
                Skeletons can be used in various ways.
            </p>

            <ComponentPreview properties={{ loading: String(loading2) }} className="flex flex-col">
                <Skeleton loading={loading2}>
                    <Card className="min-w-20 w-80 flex justify-between" outline={false}>
                        <Avatar size="12" initials="JC" src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQMjZpav8lhWfgRUapEtXTSwq1MslEiIYx3kNoF3Al05qgQZF7D4oLt1hrfqbhMrB9_vu6O&s=19" />
                        <div className="flex flex-col space-y-2 text-end justify-end items-end">
                            <p className="text-sm">John Carmack</p>
                            <p className="text-sm">jc@gmailcom</p>
                        </div>
                    </Card>
                </Skeleton>

                <Button onClick={() => setLoading2(!loading2)} color="dark/zinc" className="w-min mt-4">
                    Toggle Skeleton
                </Button>
            </ComponentPreview>


            <div className="w-full flex justify-between mt-8">
                <Button color="dark/zinc" className="w-min" href="/docs/separator">
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" className="rotate-180"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                    <span>Separator</span>
                </Button>
                <Button color="dark/zinc" className="w-min" href="/docs/switch">
                    <span>Switch</span>
                    <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                </Button>
            </div>
        </main>
    );
}
