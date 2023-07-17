"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import LeadFormService from "../lead_from_service";
import { staticAsset } from "@/helpers/utils";

const dataUtil: any = [
  // "Application Fee Waiver",
  // "SOP & LOR Preparation",
  // "Education Loan",
  // "Visa Assistance",
  // "Up to 100% Scholarship on Admit",
];

const dataImages = [
  { name: "person 1", src: "/images/misc/avatar-placeholder-colored.webp" },
  { name: "person 2", src: "/images/misc/avatar-placeholder-big.webp" },
  { name: "person 3", src: "/images/misc/avatar-placeholder-colored.webp" },
  { name: "person 4", src: "/images/misc/avatar-placeholder-big.webp" },
  { name: "person 5", src: "/images/misc/avatar-placeholder-colored.webp" },
];

interface propTypes {
  classes?: {
    root?: string;
  };
  isSmall?: boolean;
  isWhite?: boolean;
  isService?: boolean;
}

export const LeadFormSectionService = ({
  classes,
  isSmall,
  isService,
}: propTypes) => {
  return (
    <section
      className={`bg-primary  ${
        isSmall ? "rounded-md pt-10 pb-10" : "pt-8 lg:pt-[80px]"
      } ${classes?.root ? classes.root : ""} `}
    >
      <div className="container">
        <div
          className={`${isService ? "max-w-[650px]" : "max-w-[900px]"} mx-auto`}
        >
          <div className="mb-12 flex flex-col items-center">
            <div>
              <ul className="flex mb-5 items-center">
                {dataImages?.map((item, i) => {
                  return (
                    <Fragment key={i}>
                      <li
                        className={`w-[34px] lg:w-[52px] h-[34px] lg:h-[52px] rounded-full border-white border-2 ${
                          i !== 0 ? "ml-[-10px]" : ""
                        }`}
                      >
                        <Image
                          src={
                            staticAsset(item?.src) ||
                            staticAsset(
                              "/images/misc/avatar-placeholder-big.webp"
                            )
                          }
                          alt="Study International Logo"
                          width={50}
                          height={50}
                          blurDataURL={staticAsset(
                            "/images/misc/avatar-placeholder-big.webp"
                          )}
                          placeholder="blur"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </li>
                      {dataImages.length - 1 === i && (
                        <li
                          className={`flex items-center justify-center w-[34px] lg:w-[52px] h-[34px] lg:h-[52px] rounded-full bg-white border-white border-2 ml-[-10px]`}
                        >
                          <Link href="#" className="text-sm lg:text-base">
                            145+
                          </Link>
                        </li>
                      )}
                    </Fragment>
                  );
                })}
              </ul>
            </div>
            <div
              className={`flex items-center gap-[6px] font-semibold mb-4 text-lg lg:text-[26px] ${
                isSmall ? "text-[18px]" : "text-[26px]"
              }`}
            >
              <span className="inline-block text-white  ">
                Certified Education Consultants
              </span>
              <span
                className={`inline-block bg-white text-primary py-0 px-2 ${
                  isSmall ? "leading-[24px]" : "leading-[32px]"
                }`}
              >
                Online
              </span>
            </div>

            <h3
              className={`text-white mb-5 text-xl lg:text-[28px] ${
                isSmall
                  ? "text-[26px] leading-[34px] text-center"
                  : "heading-two lg:whitespace-nowrap"
              }`}
            >
              Step-by-Step Expert Enrollment Guidance
            </h3>
            <ul
              // className={`text-white flex self-start lg:justify-center flex-wrap  ${
              className={`text-white grid grid-cols-2 justify-center items-center  lg:justify-center flex-wrap  ${
                isSmall
                  ? "flex-col self-start items-start gap-y-3 gap-x-4 text-base"
                  : "items-center gap-3 text-xl"
              }`}
            >
              {dataUtil?.map((item: any, i: any) => {
                return (
                  <li className={`flex  items-center gap-2`} key={i}>
                    <Image
                      src={staticAsset("/images/icons/checked.png")}
                      alt="Premium Expert Admission Guidance"
                      width={16}
                      height={16}
                      className="shrink-0"
                    />
                    <span className="text-base">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <LeadFormService />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSectionService;
