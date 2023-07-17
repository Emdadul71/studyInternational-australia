import { staticAsset } from "@/helpers/utils";
import Image from "next/image";
import React from "react";
import { BsEnvelope, BsGlobe } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

interface propTypes {
  data?: any;
}
const ECardDirector = ({ data }: propTypes) => {
  return (
    <div className="max-w-[360px] w-full mx-auto">
      <div className="px-4 pt-[40px] mb-[22px]">
        <div>
          <div className="max-w-[134px] w-full  h-[168px] mx-auto mb-4">
            <Image
              src={staticAsset("/images/e-card/ashraf-hoq.png")}
              alt="e-card SI logo"
              width={134}
              height={168}
              blurDataURL="/images/misc/image-placeholder-big.webp"
              placeholder="blur"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center items-center">
            <h4 className="text-[#EF6922]">{data?.name}</h4>
            <p className="heading-six font-normal text-[#363534] mb-0">
              {data?.designation}
            </p>
            <p className="heading-six font-medium	 text-[#363534] mb-6">
              {data?.institute}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t pt-4 border-[#EF6922]">
          <div>
            <div className="flex items-center gap-[10px]">
              <div>
                <Image
                  src={staticAsset("/images/e-card/mobile-img.png")}
                  alt="e-card SI logo"
                  width={16}
                  height={16}
                  blurDataURL="/images/misc/image-placeholder-big.webp"
                  placeholder="blur"
                  className="w-full h-full object-cover"
                />
              </div>
              <a
                href={`tel:+88 ${data?.contact}`}
                className="m-0 text-[14px] hover:text-[#EF6922] transition-all"
              >
                {data?.contact}
              </a>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-[10px]">
              <div>
                <Image
                  src={staticAsset("/images/e-card/email.png")}
                  alt="e-card SI logo"
                  width={16}
                  height={16}
                  blurDataURL="/images/misc/image-placeholder-big.webp"
                  placeholder="blur"
                  className="w-full h-full object-cover"
                />
              </div>
              <a
                href={`mailto:${data?.email}`}
                className="m-0 text-[14px] hover:text-[#EF6922] transition-all"
              >
                {data?.email}
              </a>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-[10px]">
              <div className="shrink-0 mt-1">
                <Image
                  src={staticAsset("/images/e-card/location-img.png")}
                  alt="e-card SI logo"
                  width={16}
                  height={16}
                  blurDataURL="/images/misc/image-placeholder-big.webp"
                  placeholder="blur"
                  className="w-full h-full object-cover"
                />
              </div>

              <a
                href="https://goo.gl/maps/kbdLZB1TL9Mu2mv28"
                target="_blank"
                className="mb-0 text-[14px] block hover:text-[#EF6922] transition-all leading-[20px]"
              >
                <span>
                  <span className="block">Ground Floor, 146 Marsden St,</span>
                  Parramatta NSW 2150, Australia
                </span>
              </a>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-[10px]">
              <div className="shrink-0">
                <Image
                  src={staticAsset("/images/e-card/globe.png")}
                  alt="e-card SI logo"
                  width={16}
                  height={16}
                  blurDataURL="/images/misc/image-placeholder-big.webp"
                  placeholder="blur"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <a
                  href="https://studyinternational.net.au"
                  className="text-[14px] hover:text-[#EF6922] transition-all"
                >
                  www.studyinternational.net.au
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-[148px] w-full  h-[56px] mx-auto mb-4">
          <a href="https://studyinternational.net.au/">
            <Image
              src={staticAsset("/images/e-card/e-card-logo.png")}
              alt="e-card SI logo"
              width={148}
              height={56}
              blurDataURL="/images/misc/image-placeholder-big.webp"
              placeholder="blur"
              className="w-full h-full object-cover"
            />
          </a>
        </div>
        <p className="text-[14px] text-center">
          <span className="font-bold">Our Offices:</span>{" "}
          <a
            href="https://goo.gl/maps/kbdLZB1TL9Mu2mv28"
            className="hover:text-[#EF6922]"
            target="_blank"
          >
            Parramatta
          </a>{" "}
          |{" "}
          <a
            href="https://goo.gl/maps/B74YwCN7FMtzWEaq7"
            className="hover:text-[#EF6922]"
            target="_blank"
          >
            Blacktown
          </a>{" "}
          |{" "}
          <a
            href="https://goo.gl/maps/47sKFBBWze5SkiZY8"
            className="hover:text-[#EF6922]"
            target="_blank"
          >
            Bangladesh
          </a>
        </p>
        <div className="flex justify-center  gap-[10px]">
          <div className="bg-[#EF6922] p-[6px] rounded-full">
            <a href="https://www.linkedin.com/company/study-international-bangladesh/">
              <FaLinkedinIn className="text-white hover:text-[#692735] transition-all" />
            </a>
          </div>
          <div className="bg-[#EF6922] p-[6px] rounded-full">
            <a href="https://www.facebook.com/SIBangladesh">
              {" "}
              <FaFacebookF className="text-white hover:text-[#692735] transition-all" />
            </a>
          </div>
          <div className="bg-[#EF6922] p-[6px] rounded-full">
            <a href="https://www.youtube.com/@StudyInternationalaustralia">
              {" "}
              <FaYoutube className="text-white hover:text-[#692735] transition-all" />
            </a>
          </div>
          <div className="bg-[#EF6922] p-[6px] rounded-full">
            <a href="https://www.instagram.com/studyinternationalbangladesh/">
              {" "}
              <FaInstagram className="text-white hover:text-[#692735] transition-all" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECardDirector;
