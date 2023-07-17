import { staticAsset } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propTypes {
  classes?: {
    root?: any;
  };
  data?: any;
}
const GetReady = ({ data, classes }: propTypes) => {
  return (
    <section className={`${classes?.root ? classes?.root : ""}`}>
      <div className="container">
        <div className="max-w-[810px] mx-auto bg-bluelight rounded relative overflow-hidden">
          <Image
            src={staticAsset("/images/misc/dots.png")}
            alt="Study International Counsellor"
            width={28}
            height={28}
            className="absolute right-0 top-[20px]"
          />
          <Image
            src={staticAsset("/images/misc/dots.png")}
            alt="Study International Counsellor"
            width={28}
            height={28}
            className="absolute bottom-[-8px] left-[-8px]"
          />

          <div className="p-5 lg:p-0 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 lg:gap-7 items-center">
            <div className="lg:py-6 lg:px-12">
              <h4 className="mb-3 heading-two text-primary">
                Ready to Get Started?
              </h4>
              <p>
                Help us find the best study abroad courses and universities for
                you with just a few simple steps.
              </p>
            </div>
            <div className="lg:pr-12 lg:pt-3">
              <Link href={`${data?.url}`} className="btn btn-secondary">
                {data?.getReadyTitle}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetReady;
