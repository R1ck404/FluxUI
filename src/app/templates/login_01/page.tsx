"use client"

import Button from "@/app/components/button/button";
import Card from "@/app/components/card/card";
import Checkbox from "@/app/components/checkbox/checkbox";
import Input from "@/app/components/input/input";
import { Separator } from "@/app/components/seperator/separator";
import { toast } from "@/app/components/toast/toast";
import Link from "next/link";
import { useState } from "react";

export default function LoginTemplate() {
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);
        const fakePromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                setIsLoading(false);
                resolve("Success");
            }, 2000);
        });

        toast.promise(() => fakePromise, {
            loading: "Logging in...",
            success: "Logged in successfully!",
            error: "Error logging in. Please try again.",
        });
    }
    return (
        <main className="flex flex-row w-screen h-screen bg-background">
            <div className="flex flex-col justify-center items-center w-full lg:w-2/3 xl:w-7/12 h-full p-12">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <h1 className="text-5xl font-bold text-color-default">Welcome back!</h1>
                    <p className="text-color-secondary">
                        Login to your account to access your dashboard.
                    </p>

                    <Separator className="!my-4" />

                    <div>
                        <p className="text-color-secondary text-xs">Email</p>
                        <Input placeholder="Email" type="email" className="mt-0.5" />

                        <p className="text-color-secondary text-xs mt-4">Password</p>
                        <Input placeholder="Password" type="password" className="mt-0.5" />
                    </div>
                    <div className="flex items-center justify-between w-full mt-4">
                        <span className="flex items-center space-x-2">
                            <Checkbox className="text-color-secondary text-xs" />
                            <p className="text-color-default text-xs">Remember me?</p>
                        </span>
                        <Link href="/forgot-password" className="text-color-default text-xs">Forgot password?</Link>
                    </div>
                    <Button variant="default" color="dark/zinc" className="w-full mt-2" loading={isLoading}>Login</Button>

                    <div className="flex items-center w-full space-x-2 mt-6">
                        <Separator />
                        <p className="text-color-secondary">Or</p>
                        <Separator />
                    </div>

                    <div className="mt-2 flex space-x-2">
                        <Button variant="default" color="dark/zinc" className="w-full">
                            <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                                <path d="M8.15991 6.54543V9.64362H12.4654C12.2763 10.64 11.709 11.4837 10.8581 12.0509L13.4544 14.0655C14.9671 12.6692 15.8399 10.6182 15.8399 8.18188C15.8399 7.61461 15.789 7.06911 15.6944 6.54552L8.15991 6.54543Z" fill="#4285F4">
                                </path>
                                <path d="M3.6764 9.52268L3.09083 9.97093L1.01807 11.5855C2.33443 14.1963 5.03241 16 8.15966 16C10.3196 16 12.1305 15.2873 13.4542 14.0655L10.8578 12.0509C10.1451 12.5309 9.23598 12.8219 8.15966 12.8219C6.07967 12.8219 4.31245 11.4182 3.67967 9.5273L3.6764 9.52268Z" fill="#34A853">
                                </path>
                                <path d="M1.01803 4.41455C0.472607 5.49087 0.159912 6.70543 0.159912 7.99995C0.159912 9.29447 0.472607 10.509 1.01803 11.5854C1.01803 11.5926 3.6799 9.51991 3.6799 9.51991C3.5199 9.03991 3.42532 8.53085 3.42532 7.99987C3.42532 7.46889 3.5199 6.95983 3.6799 6.47983L1.01803 4.41455Z" fill="#FBBC05">
                                </path>
                                <path d="M8.15982 3.18545C9.33802 3.18545 10.3853 3.59271 11.2216 4.37818L13.5125 2.0873C12.1234 0.792777 10.3199 0 8.15982 0C5.03257 0 2.33443 1.79636 1.01807 4.41455L3.67985 6.48001C4.31254 4.58908 6.07983 3.18545 8.15982 3.18545Z" fill="#EA4335">
                                </path>
                            </svg>
                        </Button>
                        <Button variant="default" color="dark/zinc" className="w-full">
                            <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                                <path clip-rule="evenodd" d="M9.00319 15.9377C12.948 15.4442 16 12.0785 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.8172 2.67341 15.0099 6.25 15.808V10.4303H4.5V8H6.25V6.93969C6.25 4.22193 7.28461 2.96364 9.95128 2.96364C10.4559 2.96364 11.3277 3.06264 11.6854 3.16164V5.37163C11.497 5.35247 11.168 5.34289 10.7625 5.34289C9.45307 5.34289 9 5.8379 9 7.12812V8H11.5577L11.1106 10.4303H9.00319V15.9377Z" fill="currentColor" fill-rule="evenodd">
                                </path>
                            </svg>
                        </Button>
                        <Button variant="default" color="dark/zinc" className="w-full">
                            <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                                <path clip-rule="evenodd" d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z" fill="currentColor" fill-rule="evenodd">
                                </path>
                            </svg>
                        </Button>
                        <Button variant="default" color="dark/zinc" className="w-full">
                            <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                                <g clip-path="url(#clip0_872_3147)">
                                    <path clip-rule="evenodd" d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z" fill="currentColor" fill-rule="evenodd">
                                    </path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_872_3147">
                                        <rect fill="white" height="16" width="16">
                                        </rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </Button>
                    </div>
                </form>
            </div>
            <div className="md:block hidden lg:w-1/3 xl:w-5/12 h-full p-3">
                <div className="w-full h-full p-0.5  rounded-3xl from-secondary bg-gradient-to-bl via-background to-secondary">
                    <div className="relative flex items-center justify-center rounded-3xl w-full h-full from-secondary bg-gradient-to-br via-background to-secondary p-1">
                        <q className="text-2xl font-normal text-color-secondary font-mono uppercase text-center">
                            Code is like humor. When you have to explain it, it’s bad. – Cory House
                        </q>
                    </div>
                </div>
            </div>
        </main>
    )
}