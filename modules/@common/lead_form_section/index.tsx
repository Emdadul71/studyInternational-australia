"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import LeadForm from "../lead_form";
import { staticAsset } from "@/helpers/utils";
import AppointmentForm from "../appoinement_form";

const dataUtil: any = [
  // "Application Fee Waiver",
  // "SOP & LOR Prep Support",
  // "Education Loan Search",
  // "Visa Assistance",
  // "Up to 100% Scholarships Upon Admission",
];

const dataImages = [
  { name: "person 1", src: "/images/lead/image-1.png" },
  { name: "person 2", src: "/images/lead/image-2.png" },
  { name: "person 3", src: "/images/lead/image-3.png" },
  { name: "person 4", src: "/images/lead/image-4.png" },
  { name: "person 5", src: "/images/lead/image-5.png" },
];

interface propTypes {
  classes?: {
    root?: string;
  };
  isSmall?: boolean;
  isWhite?: boolean;
  isServices?: boolean;
  isAppointment?: boolean;
}

export const LeadFormSection = ({
  classes,
  isSmall,
  isServices,
  isAppointment,
}: propTypes) => {
  return (
    <section
      className={`bg-primary  ${
        isSmall ? "rounded-md pt-10 pb-10" : "pt-8 lg:pt-[80px]"
      } ${classes?.root ? classes.root : ""} `}
    >
      <div className="container">
        <div
          className={`${
            isServices ? "max-w-[650px]" : "max-w-[900px]"
          } mx-auto`}
        >
          <div className="mb-12 flex flex-col items-center">
            <div>
              <ul className="flex mb-4 items-center">
                {dataImages?.map((item, i) => {
                  return (
                    <Fragment key={i}>
                      <li
                        className={`w-[48px] h-[48px] rounded-full border-white border-2 ${
                          i !== 0 ? "ml-[-10px]" : ""
                        }`}
                      >
                        <Image
                          src={staticAsset(
                            item?.src ||
                              "/images/misc/avatar-placeholder-big.webp"
                          )}
                          alt="Certified Education Consultant"
                          width={32}
                          height={32}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </li>
                      {dataImages.length - 1 === i && (
                        <li
                          className={`flex items-center justify-center w-[48px] h-[48px] rounded-full bg-white border-white border-2 ml-[-10px]`}
                        >
                          <span>145+</span>
                        </li>
                      )}
                    </Fragment>
                  );
                })}
              </ul>
            </div>
            <div
              className={`flex items-center gap-[6px] font-semibold mb-4 ${
                isSmall ? "text-[18px]" : "heading-five"
              }`}
            >
              <span className="inline-block text-white">
                20+ Education & Migration Experts
              </span>

              {!isAppointment && (
                <span
                  className={`inline-block bg-white text-primary py-[2px] px-1 lg:py-[3px] lg:px-[7px]  ${
                    isSmall
                      ? "leading-[24px]"
                      : "leading-[20px] lg:leading-[20px]"
                  }`}
                >
                  Online
                </span>
              )}
            </div>
            <div className="max-w-[452px]">
              <h3
                className={`text-white mb-5 text-center ${
                  isSmall ? "text-[26px] leading-[34px] " : "heading-three "
                }`}
              >
                <span className="block">Contact Us Now</span>
                <span className="block">Education & Migration</span>
              </h3>
            </div>
            <ul
              className={`text-white ${
                isServices
                  ? "grid grid-cols-2 justify-center items-center"
                  : "flex self-start"
              }  sm:justify-center flex-wrap  ${
                isSmall
                  ? "flex-col self-start items-start gap-3 text-base"
                  : "items-center gap-5 text-xl"
              }`}
            >
              {dataUtil &&
                dataUtil?.map((item: any, i: any) => {
                  return (
                    <li
                      className={`flex items-center gap-2 ${
                        dataUtil.length - 1 === i
                          ? "col-span-2 justify-center"
                          : ""
                      }`}
                      key={i}
                    >
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
            {isAppointment ? (
              <AppointmentForm />
            ) : (
              <LeadForm isSmall={isSmall} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
