import Image from "next/image";
import Button from "@/app/components/button/button";
import Checkbox from "@/app/components/checkbox/checkbox";
import Choicebox from "@/app/components/choicebox/choicebox";

export default function Home() {
    return (
        <main className="flex flex-col space-y-6">
            <h1 className="text-xl font-semibold text-white">Choicebox</h1>
            <p className="text-zinc-400 text-sm">Choiceboxes allow the selection of multiple options from a set of options.</p>
            <div className="flex justify-center items-center w-full py-12 border rounded-lg border-border">
                <Choicebox color="dark/zinc">
                    <h1 className="text-lg font-semibold text-white">Choicebox</h1>
                    <p className="text-zinc-400 text-sm">This is a choicebox component.</p>
                </Choicebox>
            </div>
        </main>
    );
}
