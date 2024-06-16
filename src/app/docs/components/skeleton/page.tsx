"use client"

import { Avatar } from "@/app/components/avatar/avatar"
import Button from "@/app/components/button/button"
import Card from "@/app/components/card/card"
import CodeBox from "@/app/components/code-box/code-box"
import ComponentPreview from "@/app/components/component-preview/component-preview"
import DocumentationPage from "@/app/components/documentation/documentation-page/doc-page"
import Input from "@/app/components/input/input"
import { Select, SelectOption, ErrorMessage } from "@/app/components/select/select"
import { Separator } from "@/app/components/seperator/separator"
import Skeleton from "@/app/components/skeleton/skeleton"
import { useState } from "react"


export default function SkeletonComponent() {
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);
    return (
        <DocumentationPage breadcrumbs={[{ label: "Documentation" }, { label: "Components" }, { label: "Skeleton" }]} currentPage="Skeleton" previousPage={{ name: "Separator", href: "/docs/components/separator" }} nextPage={{ name: "Switch", href: "/docs/components/switch" }}>
            <h1 className="text-3xl font-semibold text-color-default">Skeleton</h1>
            <p className="mt-4 text-color-secondary">
                Skeletons are used to indicate that content is loading.
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

        </DocumentationPage >
    )
}