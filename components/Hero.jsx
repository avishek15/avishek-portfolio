import Image from "next/image";
import React from "react";
import Hero from "@/public/Hero-1.png";

const HeroBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 lg:mr-8 relative">
        <Image src={Hero} alt="hero" fill className="object-contain" />
      </div>

      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-3 md:gap-4 lg:gap-8 items-center justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Transforming Data for a Brighter Tomorrow
        </h1>
        {/* <p className="text-justify md:text-lg xl:text-xl tracking-tight">
          With a unique blend of data science and full-stack development
          expertise, I specialize in transforming innovative ideas into
          impactful solutions. Proficient in advanced machine learning
          techniques and modern frameworks like React and Next.js, I excel at
          creating intelligent algorithms and seamless web applications that
          engage users and drive results. Let&apos;s collaborate to bring your
          vision to life and exceed expectations.
        </p> */}
        <p className="text-justify md:text-lg lg:text-2xl tracking-tighter md:tracking-tight lg:tracking-normal">
          Combining <span className="font-bold">data science</span> and{" "}
          <strong className="tracking-tighter">full-stack</strong> development,
          I transform innovative ideas into impactful solutions. Proficient in
          advanced machine learning and modern frameworks like{" "}
          <strong>React</strong> and <strong>Next.js</strong>, I create
          intelligent algorithms and seamless web apps that engage users and
          drive results. Let&apos;s collaborate to bring your vision to life and
          exceed expectations.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 w-full text-base md:text-base lg:text-xl">
          <button className="p-2 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-2 rounded-lg ring-1 ring-black">
            Contact Me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
