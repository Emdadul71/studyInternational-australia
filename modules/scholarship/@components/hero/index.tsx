import { staticAsset } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ScholarshipHero = ({ data }: any) => {
  return (
    <>
      <section
        className={`py-10 lg:pt-[80px] pb-[140px] lg:pb-[280px] bg-bluelight mb-10 lg:mb-[80px]`}
        // ${
        //     classes?.root ? classes.root : ""
        //   }
      >
        <div className="container">
          <div className="max-w-[780px] mx-auto">
            <h1 className="text-center mb-3 ">{data?.title}</h1>

            <ul className="flex justify-center items-center gap-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <div className="w-[8px] h-[2px] bg-grey mt-[2px]"></div>
              </li>
              <li>
                <Link href="/scholarships">Scholarships</Link>
              </li>
              {data?.slug && (
                <li>
                  <div className="w-[8px] h-[2px] bg-grey mt-[2px]"></div>
                </li>
              )}
              {data?.slug && <li>{data?.slug}</li>}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="container relative">
          <div className="max-w-[850px] mx-auto relative mt-[-150px] lg:mt-[-320px] block">
            <div className="absolute w-full h-full top-0 left-0 service_hero_overley rounded-[10px]"></div>
            <Image
              src={staticAsset(`${data?.featuredImage}`)}
              width={850}
              height={478}
              alt="Scholarship"
              blurDataURL="/images/misc/image-placeholder-big.webp"
              className="w-full h-full object-cover rounded-[10px]"
            />
            {/* <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Image
            src={staticAsset("/images/icons/play-icon.png")}
            width={54}
            height={54}
            alt="services hero"
            className="w-full h-full object-cover"
          />
        </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ScholarshipHero;
