import { staticAsset } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CounsellorAppoinmentSignup = () => {
  return (
    <section className="pb-8">
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

          <div className="grid lg:grid-cols-[1fr_300px] lg:gap-7">
            <div className="py-6 px-6 lg:px-12 text-center lg:text-left">
              <h4 className="mb-4 text-primary">
                Enroll in the ideal institution with Study International
                Counsellor.
              </h4>
              <p>
                Leading Education Consultants that has assisted 66000+ students
                this year!
              </p>
              <Link href="#" className="btn btn-secondary">
                Sign Up Now
              </Link>
            </div>

            <div className="pr-12 pt-3 flex items-center justify-center">
              <Image
                src={staticAsset("/images/misc/counsellor.webp")}
                alt="Study International Counsellor"
                width={252}
                height={232}
                blurDataURL="/images/misc/image-placeholder-big.webp"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounsellorAppoinmentSignup;
