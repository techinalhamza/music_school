"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

function FeatureWebinars() {
  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];
  return (
    <div className="text-white">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-tight uppercase">
          feature Webinars
        </h2>
        <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">
          enhance your musical journy
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
      <div className="mt-10 text-center">
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

export default FeatureWebinars;
