"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const musicContent = [
  {
    title: "Instrument Lessons",
    description:
      "Learn to play your favorite instruments with our expert instructors. Whether you're a beginner or advanced musician, we offer personalized lessons tailored to your skill level. Discover the joy of making music and unleash your creativity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] flex items-center justify-center text-white">
        <Image
          src="/Instrument Lessons.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Music Theory",
    description:
      "Deepen your understanding of music with our comprehensive music theory courses. From basic concepts to advanced techniques, our lessons cover everything you need to know to master music theory. Unlock the secrets behind your favorite melodies and compositions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--lime-500))] flex items-center justify-center text-white">
        <Image
          src="/Music Theory.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />{" "}
      </div>
    ),
  },
  {
    title: "Performance Workshops",
    description:
      "Refine your skills and showcase your talent in our performance workshops. Gain valuable experience performing in front of live audiences and receive feedback from experienced musicians. Build confidence, express yourself, and take your performances to the next level.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
        <Image
          src="/Performance Workshops.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />{" "}
      </div>
    ),
  },
  {
    title: "Songwriting Sessions",
    description:
      "Unlock your creativity and learn the art of songwriting with our engaging sessions. Whether you're a budding songwriter or an experienced musician, our workshops will help you hone your skills and craft captivating melodies and lyrics. Express yourself through music and bring your ideas to life.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--orange-500))] flex items-center justify-center text-white">
        <Image
          src="/Songwriting Sessions.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />{" "}
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div className="py-10">
      <StickyScroll content={musicContent} />
    </div>
  );
}

export default WhyChooseUs;
