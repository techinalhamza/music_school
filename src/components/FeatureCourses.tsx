"use client";
import Link from "next/link";
import React from "react";
import coursesData from "../data/data.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function FeatureCourses() {
  const FeatureCoursesData = coursesData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="text-white">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-tight uppercase">
          feature Courses
        </h2>
        <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">
          learn with the best
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {FeatureCoursesData.map((val) => (
          <div className="flex justify-center">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black dark:bg-zinc-900">
              <p className="text-base sm:text-xl text-neutral-200 mt-4 mb-2 dark:text-neutral-200">
                {val.title}
              </p>

              <p className="text-sm text-neutral-400 dark:text-neutral-400">
                {val.description}
              </p>
              <button className="rounded-full pl-4 pr-1 py-1 text-neutral-200 flex items-center space-x-1 tracking-widest bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <Link href={`/courses/${val.slug}`}>learn more</Link>
              </button>
            </BackgroundGradient>
          </div>
        ))}
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="bg-white hover:bg-gray-100 py-2 px-4 text-neutral-700 rounded border border-neutral-600 transition duration-200"
        >
          view all courses
        </Link>
      </div>
    </div>
  );
}

export default FeatureCourses;
