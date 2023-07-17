import { htmlParse, staticAsset } from "@/helpers/utils";
import LeadForm from "@/modules/@common/lead_form_section";
import Image from "next/image";
import React from "react";
import { BsInstagram, BsTelephoneFill, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";

const TeamDetail = ({ teamDetail }: any) => {
  return (
    <>
      <section className="bg-bluelight py-8 lg:py-[120px]">
        <div className="container">
          <h1 className=" mb-[15px]">{teamDetail?.name}</h1>
          <div className="flex items-center gap-[15px]">
            <div className="w-[4px] h-[24px] bg-secondary"></div>
            <p className="m-0 font-medium">Founder & CEO</p>
          </div>
        </div>
      </section>

      <section className="pt-[40px]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-[30px]">
            <div>
              <div className="flex flex-col md:flex-row lg:flex-row items-start gap-[30px] mb-[30px]">
                <div className="w-full h-[363px]">
                  <Image
                    src={staticAsset("/images/misc/team.webp")}
                    width={330}
                    height={363}
                    alt="team details"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="mb-[15px]">Education</h5>
                  <div className="from_texteditor_wrapper">
                    {htmlParse(teamDetail?.education)}
                  </div>
                </div>
              </div>
              <p className="mb-[30px]">
                SI is a global leader in international student placement and
                co-owner of IELTS (International English Language Testing
                System). We help students study in English speaking countries
                such as Australia, UK, USA, New Zealand, Ireland and Canada. Our
                extensive network of approachable experts helps you identify and
                secure the right university or school. We’ve been doing it for
                over 50 years creating a huge network of opportunities with more
                than 100 offices in 31 countries.
              </p>
              <div className=" bg-greylight mb-[30px] border-secondary border-l-[5px] px-[30px] py-4">
                SI is a global leader in international student placement and
                co-owner of IELTS (International English Language Testing
                System). We help students study in English speaking countries
                such as Australia, UK, USA, New Zealand, Ireland and Canada.
              </div>
              <p>
                SI is a global leader in international student placement and
                co-owner of IELTS (International English Language Testing
                System). We help students study in English speaking countries
                such as Australia, UK, USA, New Zealand, Ireland and Canada. Our
                extensive network of approachable experts helps you identify and
                secure the right university or school. We’ve been doing it for
                over 50 years creating a huge network of opportunities with more
                than 100 offices in 31 countries.
              </p>
              <div className="flex flex-col  lg:flex-row items-start lg:items-end gap-5 lg:gap-[115px] px-5 lg:px-[50px] py-5 lg:py-[40px] bg-primary rounded-[8px]">
                <div>
                  <h5 className="text-white text-[26px] font-bold mb-[28px]">
                    Contact Details
                  </h5>
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex items-start gap-[10px]">
                      <BsTelephoneFill className="text-secondary shrink-0	text-lg" />
                      <p className="mb-0 text-white">+1 628 123 4000</p>
                    </div>
                    <div className="flex items-start gap-[10px]">
                      <HiEnvelope className="text-secondary shrink-0 text-xl" />
                      <p className="mb-0 text-white">brandon@consulting.com</p>
                    </div>
                    <div className="flex items-start gap-[10px]">
                      <HiLocationMarker className="text-secondary shrink-0 text-xl" />
                      <p className="mb-0 text-white s">
                        131 Bain Street, New York, Pennsylvania 01234, United
                        States
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="whitespace-nowrap text-white text-start mb-[10px]">
                    Social Profiles
                  </p>
                  <ul className="flex items-center gap-4">
                    <li>
                      <a href="#">
                        <HiEnvelope className="text-white text-xl" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <BsTwitter className="text-white text-xl" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaFacebookF className="text-white text-xl" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaYoutube className="text-white text-xl" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <BsInstagram className="text-white text-lg" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <LeadForm isSmall />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetail;
