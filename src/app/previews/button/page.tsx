import Image from "next/image";
import Button from "@/app/components/button/button";

export default function Home() {
    return (
        <main className="flex flex-col space-y-6">
            <h1 className="text-xl font-semibold text-white">Button</h1>
            <p className="text-zinc-400 text-sm">Buttons are used to initialize an action, either in the background or foreground of an experience.</p>
            <div className="flex justify-center items-center w-full py-12 border rounded-lg border-border">
                <Button variant="default" color="dark/zinc">Edit profile</Button>
                <Button variant="default" color="fuchsia">Edit profile</Button>
                <Button variant="default" color="zinc">Edit profile</Button>
                <Button variant="default" color="rose">Edit profile</Button>
            </div>
        </main>
    );
}
