"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from "../data/music.json";
import Link from "next/link";
// import { IconAppWindow } from "@tabler/icons-react";
// import Image from "next/image";

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}
export default function BackgroundGradientDemo() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);
    return (
        <div>
            <div className="text-center mt-20 mb-20">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Special For You</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Trending Now</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {featuredCourses.map((course: Course) => (
                        <BackgroundGradient key={course.id}>
                    <div key={course.id} className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                {course.title}
                            </p>

                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                {course.description}
                            </p>

                            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                <span>Like</span>
                                <span>Comment</span>
                                <Link href={`/courses/${course.id}`}>
                                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                    Listen
                                </span>
                                </Link>
                                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                    Download
                                </span>
                            </button>
                    </div>
                        </BackgroundGradient>
                ))}
            </div>
        </div>
 
    );
}
