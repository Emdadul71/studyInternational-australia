import { staticAsset } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TimelineHero = () => {
  return (
    <section className="relative ">
      <Image
        src={staticAsset("/images/about/about-hero-bg.png")}
        width={500}
        height={500}
        alt="Picture of the author"
        className="absolute right-0 top-0 hidden lg:block"
      />

      <div className="container">
        <div className="pt-[80px]">
          <div className="w-full lg:w-[810px] ">
            <h1 className="relative z-[10]">
              Our mission is to empower students to explore new frontiers and
              reach their full potential
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineHero;
