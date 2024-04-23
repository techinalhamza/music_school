"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "/user-3.jpg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "/user-2.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "/user-3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "/user-2.jpg",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "/user-3.jpg",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "/user-2.jpg",
  },
];

function Clients() {
  return (
    <div className="relative text-white ">
      <WavyBackground className="max-w-4xl mx-auto pb-">
        <div className="text-center flex gap-8 flex-col mb-4">
          <h1 className="text-6xl font-semibold ">meet our instructors</h1>
          <p>discover the profationls who will guide your musical journy</p>
        </div>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </WavyBackground>
    </div>
  );
}
export default Clients;
