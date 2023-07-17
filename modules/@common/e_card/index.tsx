import Image from "next/image";
import React, { useEffect } from "react";
import { BsEnvelope, BsGlobe } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { staticAsset } from "@/helpers/utils";

interface propTypes {
  data?: any;
}

const ECard = (data: propTypes) => {
  // function addContact() {
  //   const phoneNumber = `+88 ${data?.data?.contact}`; // Replace with the desired phone number
  //   const link = document.createElement("a");
  //   link.href = `tel:${phoneNumber}`;
  //   link.setAttribute("save", "contact.vcf");
  //   link.click();
  // }
  // const contact = {
  //   firstName: "John",
  //   lastName: "Doe",
  //   email: "john.doe@example.com",
  //   phone: "1234567890",
  // };
  const content = data?.data;

  function saveContactAsVCF(data: any) {
    const vCard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `N;CHARSET=UTF-8:${content?.name}`,
      `ROLE;CHARSET=UTF-8:${content?.designation}`,
      `EMAIL;CHARSET=UTF-8;TYPE=work:${content?.email}`,
      `TEL;TYPE=WORK,VOICE:${content?.contact}`,
      `ADR;TYPE=work;LABEL=Bangaldesh Office:;;Level 8, Tower Hamlet 16 Kamal Ataturk Avenue Banani;Dhaka;Banani;1213;Bangladesh`,
      "END:VCARD",
    ].join("\n");

    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${data?.data?.name}.vcf`;
    a.click();

    URL.revokeObjectURL(url);
  }
  return (
    <div className="flex flex-col md:max-w-[360px] w-full mx-auto h-[calc(100vh-56px)]">
      <div className="px-4 pt-[40px]">
        <div className="max-w-[148px] w-full   mx-auto mb-[40px]">
          <Image
            src={staticAsset("/images/e-card/e-card-logo.png")}
            alt="e-card SI logo"
            width={148}
            height={56}
            blurDataURL="/images/misc/image-placeholder-big.webp"
            placeholder="blur"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div>
            <h4 className="text-[#692735]">{data?.data?.name}</h4>
            <p className="heading-six font-normal text-[#363534] mb-6">
              {data?.data?.designation}
            </p>
          </div>
          <div className="p-[10px] border-b">
            <div className="flex items-center gap-[6px]">
              <CiMobile3 className="shrink-0	text-base" />
              <a
                href={`tel:+88 ${data?.data?.contact}`}
                className="m-0 text-sm hover:text-[#692735]"
              >
                {data?.data?.contact}
              </a>
            </div>
          </div>
          <div className="p-[10px] border-b">
            <div className="flex items-center gap-[6px]">
              <BsEnvelope className="shrink-0	text-sm" />
              <a
                href={`mailto:${data?.data?.email}`}
                className="m-0 text-sm hover:text-[#692735]"
              >
                {data?.data?.email}
              </a>
            </div>
          </div>
          <div className="p-[10px] border-b">
            <div className="flex items-center gap-[6px]">
              <BsGlobe className="shrink-0	text-sm" />
              <a
                href="https://studyinternational.net.au"
                className="m-0 text-sm hover:text-[#692735]"
              >
                www.studyinternational.net.au
              </a>
            </div>
          </div>
          <div className="p-[10px]">
            <div className="flex items-start gap-[6px]">
              <IoLocationOutline className="shrink-0	mt-[2px] " />
              <div>
                <a
                  href="https://goo.gl/maps/47sKFBBWze5SkiZY8"
                  target="_blank"
                  className="block mb-2 text-[12px] leading-[16px] hover:text-[#692735]"
                >
                  <span className="block text-[#002F5B] font-semibold">
                    Dhaka (Bangladesh)
                  </span>{" "}
                  Level 8, Tower Hamlet 16 Kamal Ataturk Avenue Banani, Dhaka,
                  Bangladesh
                </a>
                <a
                  href="https://goo.gl/maps/kbdLZB1TL9Mu2mv28"
                  className="mb-2 text-[12px] leading-[16px] block hover:text-[#692735]"
                >
                  <span className="block text-[#E01E35] font-semibold">
                    Head Office
                  </span>
                  <span className="block text-[#002F5B] font-semibold">
                    Parramatta (Sydney)
                  </span>
                  <span className="block"> Ground Floor, 146 Marsden St,</span>
                  Parramatta NSW 2150, Australia
                </a>
                <a
                  href="https://goo.gl/maps/B74YwCN7FMtzWEaq7"
                  className="mb-2 text-[12px] leading-[16px] block hover:text-[#692735]"
                >
                  <span className="block text-[#002F5B] font-semibold">
                    Blacktown (Sydney)
                  </span>
                  <span className="block">7/12-20 Main St, Blacktown</span> NSW
                  2148, Australia
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[18px] mb-[28px]">
          <button
            className="btn e-card-button rounded-full"
            onClick={saveContactAsVCF}
          >
            Add to Contact
          </button>
        </div>
      </div>

      <div className="flex justify-center e-card-social-bg py-[13px] gap-[10px] mt-auto">
        <div className="bg-white p-[6px] rounded-full">
          <a href="https://www.linkedin.com/company/study-international-bangladesh/">
            <FaLinkedinIn className="text-[#002f5b] hover:text-[#692735]" />
          </a>
        </div>
        <div className="bg-white p-[6px] rounded-full">
          <a href="https://www.facebook.com/SIBangladesh">
            {" "}
            <FaFacebookF className="text-[#002f5b] hover:text-[#692735]" />
          </a>
        </div>
        <div className="bg-white p-[6px] rounded-full">
          <a href="https://www.youtube.com/@StudyInternationalaustralia">
            {" "}
            <FaYoutube className="text-[#002f5b] hover:text-[#692735]" />
          </a>
        </div>
        <div className="bg-white p-[6px] rounded-full">
          <a href="https://www.instagram.com/studyinternationalbangladesh/">
            {" "}
            <FaInstagram className="text-[#002f5b] hover:text-[#692735]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ECard;
