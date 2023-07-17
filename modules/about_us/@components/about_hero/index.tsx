import { staticAsset } from "@/helpers/utils";
import ViewLink from "@/modules/@common/view_link";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const AboutHero = () => {
  return (
    <section className="relative">
      <Image
        src={staticAsset("/images/about/about-hero-bg.png")}
        width={500}
        height={500}
        alt="Picture of the author"
        className="absolute right-0 top-0 z-[-10]"
      />
      <div className="container">
        <div className="pt-[30px] lg:pt-[80px]">
          <div className="max-w-[810px] w-full">
            <h1>Who We Are</h1>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center  gap-8 lg:gap-[110px] mt-[30px]">
            {/* <Link
              href="/about-us"
              className="flex items-center justify-center w-[130px] h-[130px] rounded-full border gap-2  shrink-0"
            >
              <p className="m-0">
                View All <br></br>Services
              </p>
              <RiArrowRightUpLine />
            </Link> */}
            <ViewLink title="View all Services" url="/services" />
            <p className="m-0 text-lg font-normal max-w-[570px] w-full">
              Study International takes pride in our comprehensive step-by-step
              support for prospective and current international students
              en-route to making their study abroad dreams a reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
