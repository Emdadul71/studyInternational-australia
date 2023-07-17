import Image from "next/image";
import React from "react";
import Scholarshipdata from "@/fakedata/scholarship-landing.json";
import Link from "next/link";
import { staticAsset } from "@/helpers/utils";

interface propTypes {
  classes?: {
    root?: any;
  };
  data?: any;
  points?: any;
}

const ScholarshipShortDescription = ({ data, points, classes }: propTypes) => {
  return (
    <>
      {Scholarshipdata?.map((item: any, i: any) => {
        return (
          <section
            className={`${
              classes?.root ? classes?.root : ""
            } from_texteditor_wrapper`}
          >
            <div className="container">
              <div
                className={`grid ${
                  i % 2 == 1
                    ? "grid-cols-1 lg:grid-cols-[450px_1fr]"
                    : "grid-cols-1 lg:grid-cols-[1fr_450px]"
                } gap-[30px]`}
              >
                <div className={`${i % 2 == 1 ? "lg:order-1" : ""}`}>
                  <h3 className="mb-[15px]">{item?.title}</h3>
                  <p>{item?.description}</p>
                  <ul className="flex flex-col gap-3 list-disc mb-[30px]">
                    {item?.points?.map((item: any, i: any) => {
                      return (
                        <li>
                          <strong>{item?.title} </strong>
                          <span>{item?.desc} </span>
                        </li>
                      );
                    })}
                  </ul>
                  <p>{item?.conclution}</p>
                  <Link href={item?.detailLink} className="btn btn-secondary">
                    Read More
                  </Link>
                </div>
                <div>
                  <div className="w-full h-[450px]">
                    <Image
                      src={`${
                        staticAsset(item?.imgSrc) ||
                        staticAsset("/images/misc/image-placeholder-big.webp")
                      }`}
                      width={450}
                      height={450}
                      alt={item?.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ScholarshipShortDescription;
