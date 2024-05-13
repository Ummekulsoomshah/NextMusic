'use client';
import { useRouter } from "next/navigation";
export default function Page() {
    const router = useRouter();
    console.log(router,"info");
    return <h1>Course: </h1>;
}