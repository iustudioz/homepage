import Image from "next/image";

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center">
                <Image
                    className="rounded-lg"
                    src="/images/logo.jpg"
                    alt="I:U STUDIO logo"
                    width={180}
                    height={38}
                    priority
                />
                <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="tracking-[-.01em]">
                        Coming soon in September...
                    </li>
                </ol>


            </main>

        </div>
    );
}
