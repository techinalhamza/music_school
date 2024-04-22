import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function Hero() {
  return (
    <div className="text-white h-[40rem] md:h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-0 md:py-10 ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4  text-center w-full z-10 relative">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-[34rem] mx-auto">
          dive into our comprenhensive music courses and transform your musilcal
          journey today.weather you're a beginner or looking to refine your
          skills. join to unlock your true potential
        </p>
        <div className="mt-4">
          <Link href={"/coureses"}>
            {" "}
            <Button
              borderRadius="1.75rem"
              className="bg-black dark:bg-slate-900 text-white dark:text-white capitalize"
            >
              explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
