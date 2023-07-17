"use client";
import Slider from "react-slick";
import Image from "next/image";
import uniData from "./../../../fakedata/uni-logo.json";
import { staticAsset } from "@/helpers/utils";

const PartnerUniversities = () => {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    cssEase: "linear",
    slidesToShow: 10,
    centerPadding: "10px",
    slidesToScroll: 1,
    rows: 2,
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 1,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <section
      className="pt-8 lg:pt-[70px] overflow-hidden pb-8  partner_carousel_container max-h-[400px] lg:max-h-[445px]"
      style={{
        background:
          "radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0) 0%, rgba(234, 247, 255, 0.5) 100%), radial-gradient(100% 100% at 0% 100%, rgba(234, 247, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
      }}
    >
      <div className="px-5">
        <h2 className="text-center mb-5 lg:mb-10">
          Study at Leading Universities
        </h2>
      </div>
      <div>
        <Slider {...settings}>
          {uniData.map((item, i) => {
            return (
              <div className="m-1" key={i}>
                <div className="h-[50px] p-2 md:p-5 lg:p-3 box-content bg-white border partner_uni">
                  <Image
                    src={staticAsset(item?.universityLogoSrc)}
                    width={136}
                    height={50}
                    alt="Universities"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default PartnerUniversities;
