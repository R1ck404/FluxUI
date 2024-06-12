import Image from "next/image";
import Button from "@/app/components/button/button";
import Checkbox from "@/app/components/checkbox/checkbox";

export default function Home() {
    return (
        <main className="flex flex-col space-y-6">
            <h1 className="text-xl font-semibold text-white">Checkbox</h1>
            <p className="text-zinc-400 text-sm">Checkboxes allow the selection of multiple options from a set of options.</p>
            <div className="flex justify-center items-center w-full py-12 border rounded-lg border-border">
                <Checkbox color="dark/zinc" />
                <Checkbox color="dark/zinc" defaultChecked disabled />
                <Checkbox color="zinc" />
                <Checkbox color="zinc" defaultChecked disabled />
                <Checkbox color="fuchsia" />
                <Checkbox color="fuchsia" defaultChecked disabled />
            </div>
        </main>
    );
}
