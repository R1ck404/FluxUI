
"use client"

import Image from "next/image";
import Button from "./components/button/button";
import Card from "./components/card/card";
import Badge from "./components/badge/badge";
import { DialogTitle, DialogDescription, DialogContent, DialogActions } from "./components/dialog/dialog";
import Checkbox from "./components/checkbox/checkbox";
import Choicebox from "./components/choicebox/choicebox";
import Input from "./components/input/input";
import { Separator } from "./components/seperator/separator";
import Switch from "./components/switch/switch";
import { ErrorMessage, Select, SelectOption } from "./components/select/select";
import { useState } from "react";
import { Toaster, toast } from "./components/toast/toast";
import Navbar from "./components/documentation/navbar/navbar";
import { Avatar } from "./components/avatar/avatar";
import { Alert, AlertActions, AlertDescription, AlertTitle } from "./components/alert/alert";

const domains = [
    "rickhuijser.com",
    "rickhuijser.dev",
    "flux.rickhuijser.com",
    "flux.rickhuijser.dev",
];

export default function Home() {
    const [domainsList, setDomainsList] = useState(domains);
    const [domainsInput, setDomainsInput] = useState("");
    const [isDomainAlertOpen, setIsDomainAlertOpen] = useState(false);

    const changeTheme = () => {
        const html = document.querySelector("html");
        if (html) {
            html.classList.toggle("dark");
        }
    }

    const fakePromise = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Event has been created');
            }, 2000);
        });
    }


    return (
        <main className="flex flex-col bg-background text-color-default">
            <Toaster position="bottom-right" />
            <div className="w-full"><Navbar /></div>
            <section className="flex flex-col xl:flex-row mt-12 xl:mt-0 xl:h-[calc(100vh-4rem-1px)] w-auto overflow-hidden">
                <div className="flex flex-col min-w-[42rem] space-y-2 ml-6 xl:ml-0 xl:px-16 h-full justify-center">
                    <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-300">Fully Customizable <span className="text-4xl font-extrabold bg-gradient-to-r from-violet-500  to-indigo-500 inline-block text-transparent bg-clip-text">UI Components</span> for <span className="text-4xl font-extrabold bg-gradient-to-r from-violet-500  to-indigo-500 inline-block text-transparent bg-clip-text">Effortless Integration</span></h1>
                    <p className="dark:text-zinc-300">Build modern and beautiful user interfaces with our zero-dependency, copy-paste-ready React components. Enhance your project seamlessly, without the bloat.</p>
                    <div className="flex space-x-2">
                        <Button variant="default" href="/docs/getting-started" color="indigo">
                            <span>Get Started</span>
                            <svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z"></path></svg>
                        </Button>
                        <Button variant="default" color="dark/zinc" onClick={changeTheme}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-5 text-zinc-300 hover:text-zinc-200 dark:inline"><path fillRule="evenodd" d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z" clipRule="evenodd"></path></svg>
                        </Button>
                    </div>
                </div>

                <div className="flex space-x-6 mt-6 ml-6 xl:ml-0 ">
                    <div className="flex flex-col space-y-6 max-w-[20rem]">
                        <Card className="flex flex-col items-center justify-center">
                            <div className="flex items-center justify-center rounded-full w-10 h-10 bg-emerald-500/30">
                                <svg height="20" strokeLinejoin="round" viewBox="0 0 16 16" width="20">
                                    <path clipRule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor">
                                    </path>
                                </svg>
                            </div>
                            <h1 className="text-xl font-bold mt-4">Invoice paid</h1>
                            <p className="text-sm text-center">Your invoice has been paid successfully. Thank you for your business.</p>
                            <Button variant="default" color="emerald" className="mt-4 w-full">View Invoice</Button>
                            <Button variant="default" color="dark/zinc" className="mt-2 w-full">Dismiss</Button>
                        </Card>

                        <Card className="flex flex-col items-center justify-center">
                            <div className="flex items-center justify-center rounded-full w-10 h-10 bg-blue-500/30">
                                <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                                    <path clipRule="evenodd" d="M7.9925 0C4.95079 0 2.485 2.46579 2.485 5.5075V8.22669C2.485 8.77318 2.21321 9.28388 1.75992 9.58912L1.33108 9.8779L1 10.1009V10.5V11.25V12H1.75H14.25H15V11.25V10.5V10.0986L14.666 9.87596L14.2306 9.58565C13.7741 9.28137 13.5 8.76913 13.5 8.22059V5.5075C13.5 2.46579 11.0342 0 7.9925 0ZM3.985 5.5075C3.985 3.29422 5.77922 1.5 7.9925 1.5C10.2058 1.5 12 3.29422 12 5.5075V8.22059C12 9.09029 12.36 9.91233 12.9801 10.5H3.01224C3.62799 9.91235 3.985 9.09303 3.985 8.22669V5.5075ZM10.7486 13.5H9.16778L9.16337 13.5133C9.09591 13.716 8.94546 13.9098 8.72067 14.0501C8.52343 14.1732 8.27577 14.25 8.00002 14.25C7.72426 14.25 7.47661 14.1732 7.27936 14.0501C7.05458 13.9098 6.90412 13.716 6.83666 13.5133L6.83225 13.5H5.25143L5.41335 13.9867C5.60126 14.5516 5.99263 15.0152 6.48523 15.3226C6.92164 15.5949 7.44461 15.75 8.00002 15.75C8.55542 15.75 9.07839 15.5949 9.5148 15.3226C10.0074 15.0152 10.3988 14.5516 10.5867 13.9867L10.7486 13.5Z" fill="currentColor" fill-rule="evenodd">
                                    </path>
                                </svg>
                            </div>
                            <h1 className="text-xl font-bold mt-4">New Message</h1>
                            <p className="text-sm text-center">You have received a new message from a user. Please check your inbox.</p>
                            <Button variant="default" color="blue" className="mt-4 w-full">Check Inbox</Button>
                            <Button variant="default" color="dark/zinc" className="mt-2 w-full">Dismiss</Button>
                        </Card>

                        <Card className="flex flex-col items-center justify-center">
                            <div className="flex items-center justify-center rounded-full w-10 h-10 bg-rose-500/30">
                                <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                                    <path clipRule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM5.5 11.5607L6.03033 11.0303L8 9.06066L9.96967 11.0303L10.5 11.5607L11.5607 10.5L11.0303 9.96967L9.06066 8L11.0303 6.03033L11.5607 5.5L10.5 4.43934L9.96967 4.96967L8 6.93934L6.03033 4.96967L5.5 4.43934L4.43934 5.5L4.96967 6.03033L6.93934 8L4.96967 9.96967L4.43934 10.5L5.5 11.5607Z" fill="currentColor" fill-rule="evenodd">
                                    </path>
                                </svg>

                            </div>
                            <h1 className="text-xl font-bold mt-4">Subscription Ended</h1>
                            <p className="text-sm text-center">Your subscription has ended. Please renew your subscription to continue using our services.</p>
                            <Button variant="default" color="rose" className="mt-4 w-full">Renew Subscription</Button>
                            <Button variant="default" color="dark/zinc" className="mt-2 w-full">Dismiss</Button>
                        </Card>

                        {/* security alert, login from x location, accept or deny */}
                        <Card className="flex flex-col items-center justify-center">
                            <div className="flex items-center justify-center rounded-full w-10 h-10 bg-yellow-500/30">
                                <svg height="20" strokeLinejoin="round" viewBox="0 0 16 16" width="20">
                                    <path clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM9 12H7V7H9V12ZM9 5H7V3H9V5Z" fill="currentColor" fillRule="evenodd">
                                    </path>
                                </svg>
                            </div>
                            <h1 className="text-xl font-bold mt-4">Security Alert</h1>
                            <p className="text-sm text-center">A login attempt was made from a location you have not used before. Please verify your identity.</p>
                            <Button variant="default" color="yellow" className="mt-4 w-full">Verify Identity</Button>
                            <Button variant="default" color="dark/zinc" className="mt-2 w-full">Dismiss</Button>
                        </Card>
                    </div>

                    <div className="flex flex-col space-y-6 w-[30rem] max-w-[30rem]">
                        <Card className="flex flex-col !w-full">
                            <div className="flex items-center justify-between">
                                <h1 className="text-xl font-bold text-black dark:text-white">Domains</h1>
                            </div>
                            <p className="text-sm">Manage your domains and subdomains here.</p>
                            <div className="flex items-center justify-between mt-2 space-x-2">
                                <Input placeholder="example.com" className="h-full" value={domainsInput} onChange={(e) => setDomainsInput(e.target.value)} />
                                <Button variant="default" color="indigo" onClick={() => {
                                    if (domainsInput.length > 0) {
                                        setDomainsList([...domainsList, domainsInput]);
                                        setDomainsInput("");
                                        toast.success(`Domain ${domainsInput} has been added.`);
                                    }
                                }}>Add</Button>
                            </div>
                            <div className="flex flex-col space-y-2 mt-2">
                                {domainsList.length === 0 && <p className="text-sm text-center">No domains added yet.</p>}
                                {domainsList.map((domain, index) => (
                                    <Card key={index} className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Avatar initials={domain[0].toUpperCase()} />
                                            <span>{domain}</span>
                                        </div>
                                        <Button variant="default" color="dark/zinc" onClick={() => { setIsDomainAlertOpen(true) }}>Remove</Button>
                                    </Card>
                                ))}

                            </div>
                        </Card>

                        <Card className="flex flex-col !w-full">
                            <div className="flex items-center justify-between">
                                <h1 className="text-xl font-bold text-black dark:text-white">Connected Git Repository</h1>
                            </div>
                            <p className="text-sm">Seamlessly create Deployments for any commits pushed to your Git repository.</p>
                            <Card className="flex items-center justify-between mt-4">
                                <div className="flex items-center space-x-2">
                                    <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                                        <g clipPath="url(#clip0_872_3147)">
                                            <path clipRule="evenodd" d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z" fill="currentColor" fillRule="evenodd">
                                            </path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_872_3147">
                                                <rect fill="white" height="16" width="16">
                                                </rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <div>
                                        <span className="text-sm font-semibold">R1ck404/FluxUI</span>
                                        <p className="text-xs text-gray-500">Last commit: 2 days ago</p>
                                    </div>
                                </div>
                                <Button variant="default" color="indigo" href="https://github.com/R1ck404/FluxUI">View Repository</Button>
                            </Card>
                            <div className="flex flex-col mt-2">
                                <Separator className="my-4" />
                                <div className="flex justify-between space-x-1">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold">
                                            Automatically deploy new commits
                                        </span>
                                        <span className="text-xs text-gray-500">Deployments will be created for every new commit pushed to the repository.</span>
                                    </div>
                                    <Switch onChange={() => { }} />
                                </div>
                                <Separator className="my-4" />
                                <div className="flex justify-between space-x-1">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold">
                                            Automatically deploy new branches
                                        </span>
                                        <span className="text-xs text-gray-500">Deployments will be created for every new branch pushed to the repository.</span>
                                    </div>
                                    <Switch color='rose' onChange={() => { }} />
                                </div>
                            </div>
                        </Card>

                        <Card className="flex flex-col !w-full">
                            <div className="flex items-center justify-between">
                                <h1 className="text-xl font-bold text-black dark:text-white">Workspace Users</h1>
                            </div>
                            <p className="text-sm">Manage the users and roles in your workspace.</p>
                            <div className="flex items-center justify-between mt-2 space-x-2">
                                <Input placeholder="user@example.com" className="h-full" />
                                <Select defaultValue="member">
                                    <SelectOption value="admin">Admin</SelectOption>
                                    <SelectOption value="member">Member</SelectOption>
                                </Select>
                                <Button variant="default" color="indigo">Add</Button>
                            </div>

                            <div className="flex flex-col space-y-2 mt-2">
                                <Card className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Avatar initials="A" />
                                        <span>
                                            <span className="font-semibold">Alice</span>
                                            <span className="text-xs text-gray-500 ml-2">
                                                Admin
                                            </span>
                                        </span>
                                    </div>
                                    <Button variant="default" color="dark/zinc">Remove</Button>
                                </Card>
                                <Card className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Avatar initials="B" />
                                        <span>
                                            <span className="font-semibold">Bob</span>
                                            <span className="text-xs text-gray-500 ml-2">
                                                Member
                                            </span>
                                        </span>
                                    </div>
                                    <Button variant="default" color="dark/zinc">Remove</Button>
                                </Card>
                            </div>
                        </Card>
                    </div>

                    <div className="flex flex-col space-y-6 max-w-[20rem] w-[20rem]">
                        <Card className="flex flex-col">
                            <div className="flex items-center justify-center rounded-lg">
                                <Image src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=540&q=80" className="rounded-lg" width={300} height={200} alt="Product" />
                            </div>
                            <h1 className="text-xl font-bold mt-4">Sid Meier's Sneakers</h1>
                            <p className="text-sm">Limited edition sneakers inspired by the legendary game designer Sid Meier.</p>
                            <div className="flex items-center justify-between mt-4">
                                <Select defaultValue="black">
                                    <SelectOption value="black">Black</SelectOption>
                                    <SelectOption value="white">White</SelectOption>
                                    <SelectOption value="red">Red</SelectOption>
                                </Select>
                                <Button variant="default" color="indigo" onClick={() => toast.promise(fakePromise, {
                                    loading: <div className="flex space-x-1">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Adding to cart...</span>
                                    </div>,
                                    success: 'Added to cart!',
                                    error: 'Something went wrong...'
                                })}>Add to Cart</Button>
                            </div>
                        </Card>

                        <Card className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <h1 className="text-xl font-bold">Order #839</h1>
                                <Badge color="emerald">Out for delivery</Badge>
                            </div>
                            <p className="text-sm mt-2">Your order is out for delivery and will be delivered to you soon.</p>
                            <div className="flex flex-col mt-4 space-y-2">
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm font-semibold">Delivery Address</span>
                                    <span className="text-xs text-gray-500">1234 Main Street, New York, NY 10001</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm font-semibold">
                                        Lastest Update
                                    </span>
                                    <span className="text-xs text-gray-500">Order confirmed, Out for delivery</span>
                                </div>
                                <Separator className="!my-3" />
                                <div className="flex w-full space-x-2">
                                    <Button variant="ghost" className="w-full">Cancel Order</Button>
                                    <Button variant="default" className="w-full" color="indigo">Track Order</Button>
                                </div>
                            </div>
                        </Card>

                        <Card className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <h1 className="text-xl font-bold">Account Settings</h1>
                            </div>
                            <p className="text-sm mt-2">Manage your account settings here.</p>
                            <div className="flex flex-col mt-4 space-y-2">
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold">Email Address</span>
                                    <Input placeholder="user@email.com" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold">Password</span>
                                    <Input placeholder="********" />
                                </div>
                                <div className="flex items-center space-x-2 !mt-3">
                                    <span className="text-sm font-semibold">Two-factor authentication</span>
                                    <Switch onChange={() => { }} />
                                </div>
                                <Separator className="!my-3" />
                                <div className="flex w-full space-x-2">
                                    <Button variant="ghost" className="w-full">Cancel</Button>
                                    <Button variant="default" className="w-full" color="indigo">Save Changes</Button>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="flex flex-col space-y-6 max-w-[25rem] w-[25rem]">
                        <Card className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <h1 className="text-xl font-bold text-black dark:text-white">Notifications</h1>
                            </div>
                            <p className="text-sm">Manage your notifications and alerts here.</p>
                            <div className="flex flex-col mt-4 space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold">Email Notifications</span>
                                    <Switch onChange={() => { }} />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold">Push Notifications</span>
                                    <Switch onChange={() => { }} />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold">SMS Notifications</span>
                                    <Switch onChange={() => { }} />
                                </div>
                            </div>
                        </Card>

                        <Card className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <h1 className="text-xl font-bold text-black dark:text-white">Billing Information</h1>
                            </div>
                            <p className="text-sm">Manage your billing information and payment methods here.</p>
                            <div className="flex flex-col mt-4 space-y-2">
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold">Card Number</span>
                                    <Input placeholder="1234 5678 9012 3456" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold">Expiration Date</span>
                                    <Input placeholder="MM/YY" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold">CVV</span>
                                    <Input placeholder="123" />
                                </div>
                                <Separator className="!my-3" />
                                <div className="flex w-full space-x-2">
                                    <Button variant="ghost" className="w-full">Cancel</Button>
                                    <Button variant="default" className="w-full" color="indigo">Save Changes</Button>
                                </div>
                            </div>
                        </Card>

                        <Card className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <h1 className="text-xl font-bold text-black dark:text-white">Event Calendar</h1>
                            </div>
                            <p className="text-sm">Manage your events and reminders here.</p>
                            <div className="flex flex-col mt-4 space-y-2">
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold">Event Name</span>
                                    <Input placeholder="Event name" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold">Event Date</span>
                                    <Input type="date" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold">Event Time</span>
                                    <Input type="time" />
                                </div>
                                <Separator className="!my-3" />
                                <div className="flex w-full space-x-2">
                                    <Button variant="ghost" className="w-full">Cancel</Button>
                                    <Button variant="default" className="w-full" color="indigo">Save Changes</Button>
                                </div>
                            </div>
                        </Card>

                        <Card className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <h1 className="text-xl font-bold text-black dark:text-white">Profile Information</h1>
                            </div>
                            <p className="text-sm">Manage your profile information and settings here.</p>
                            <div className="flex flex-col mt-4 space-y-2">
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold">Full Name</span>
                                    <Input placeholder="John Doe" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold">Username</span>
                                    <Input placeholder="johndoe" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold">Bio</span>
                                    <Input placeholder="A short bio about yourself" />
                                </div>
                                <Separator className="!my-3" />
                                <div className="flex w-full space-x-2">
                                    <Button variant="ghost" className="w-full">Cancel</Button>
                                    <Button variant="default" className="w-full" color="indigo">Save Changes</Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section >

            <Alert open={isDomainAlertOpen} onClose={setIsDomainAlertOpen} outline={false}>
                <AlertTitle>Delete domain</AlertTitle>
                <AlertDescription>Are you sure you want to delete this domain?</AlertDescription>
                <AlertActions>
                    <Button variant="ghost" onClick={() => setIsDomainAlertOpen(false)}>Cancel</Button>
                    <Button variant="ghost" onClick={() => {
                        setIsDomainAlertOpen(false);
                        toast.success(`Domain has been removed.`);
                    }}>Delete</Button>
                </AlertActions>
            </Alert>
        </main>
    );
}