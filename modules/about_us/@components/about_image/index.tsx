import { staticAsset } from "@/helpers/utils";
import Image from "next/image";
import React from "react";

interface propTypes {
  isShowTime?: boolean;
}

const AboutImage = ({ isShowTime = true }: propTypes) => {
  return (
    <section className="overflow-hidden mb-3 md:mb-[60px] lg:mb-3">
      <div className="container ">
        <div className="mr-[-20vw] ">
          <Image
            src={staticAsset("/images/about/about-image.webp")}
            width={1545}
            height={869}
            alt="Picture of the author"
          />
        </div>
      </div>

      {isShowTime && (
        <div className="absolute right-[50px] lg:right-[130px] bg-secondary justify-end pl-5 pr-5 lg:pr-10 py-[10px]">
          <span>From</span>
          <h3>2005</h3>
        </div>
      )}
    </section>
  );
};

export default AboutImage;
