import WeWorkCard from "@/modules/about_us/@components/we_work_card";
import React from "react";
import AwardCard from "../award_card";
import Link from "next/link";

const data = [
  { id: 1, imgSrc: "/images/misc/ISANA-MEMBERSHIP.jpg" },
  { id: 1, imgSrc: "/images/misc/ISANA-TUTORIAL_GAUTAM.jpg" },
];

const data2 = [
  { id: 1, imgSrc: "/images/misc/QEAC-E557-ASH.jpg" },
  { id: 1, imgSrc: "/images/misc/QEAC-H274-GAUTAM.jpg" },
  { id: 1, imgSrc: "/images/misc/QEAC-H389-GULZAR.jpg" },
];
const data3 = [
  { id: 1, imgSrc: "/images/misc/Scanned-image-2-1.jpg" },
  { id: 1, imgSrc: "/images/misc/Scanned-image-6-1.jpg" },
  { id: 1, imgSrc: "/images/misc/Scanned-image-4-1.jpg" },
  { id: 1, imgSrc: "/images/misc/Scanned-image-8-1.jpg" },
  { id: 1, imgSrc: "/images/misc/CDU.jpg" },
  { id: 1, imgSrc: "/images/misc/Skilltech.jpg" },
  { id: 1, imgSrc: "/images/misc/Scanned-image-18-1.jpg" },
  { id: 1, imgSrc: "/images/misc/UOW.jpg" },
];
const Certificate = () => {
  return (
    <section className="pt-8 lg:pt-[80px]">
      <div className="container">
        <h2 className="text-center mb-8 lg:mb-[50px]">Certification</h2>
        <div className="grid grid-cols-[470px_auto]">
          <div>
            <h3 className="mb-2">ISANA</h3>
            <div className="w-[100px] h-[4px] bg-secondary mb-5"></div>
            <p>
              International Education Association is an association of
              Australian and New Zealand international education professionals
              whose members are dedicated to the advancement of international
              education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px]">
            {data?.map((item: any, i: any) => {
              return <AwardCard data={item} key={i}/>;
            })}
          </div>
        </div>
        <div className="mt-[80px]">
          <div>
            <h3 className="mb-2">PIER Certification</h3>
            <div className="w-[70px] h-[4px] bg-secondary mb-5"></div>
            <p>
              Educate is certified by Professional International Education
              Resources (PIER) as Qualified Education Agent Counsellor in
              Australia. Our company is part of PIER’s global network of
              partners in the professional education industry:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {data2?.map((item: any, i: any) => {
              return <AwardCard data={item} key={i} />;
            })}
          </div>
        </div>
        <div className="mt-[80px]">
          <h3 className="mb-2">Other Certification</h3>
          <div className="w-[80px] h-[4px] bg-secondary mb-5"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {data3?.map((item: any, i: any) => {
              return <AwardCard data={item} key={i} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
