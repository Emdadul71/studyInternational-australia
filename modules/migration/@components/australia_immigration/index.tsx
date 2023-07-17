import React from "react";
import ImmigrationCard from "../../@common/immigration_card";

const immigrationData = [
  {
    id: 1,
    iconSrc: "/images/icons/gsm-visa.png",
    title: "GSM Visa",
    alt: "gsm visa",
  },
  {
    id: 2,
    iconSrc: "/images/icons/employer.png",
    title: "Employer Sponsored Visa",
    alt: "Employer Sponsored Visa",
  },
  {
    id: 3,
    iconSrc: "/images/icons/visitor.png",
    title: "Visitor Visa",
    alt: "Visitor Visa",
  },
  {
    id: 4,
    iconSrc: "/images/icons/global-talent.png",
    title: "Global Talent Program",
  },
  {
    id: 5,
    iconSrc: "/images/icons/partner-visa.png",
    title: "Partner Visa",
  },
  {
    id: 6,
    iconSrc: "/images/icons/parents-visa.png",
    title: "Parents Visa",
  },
  {
    id: 7,
    iconSrc: "/images/icons/family-visa.png",
    title: "Family Visa",
  },
  {
    id: 8,
    iconSrc: "/images/icons/student-visa.png",
    title: "Student Visa",
  },
  {
    id: 9,
    iconSrc: "/images/icons/appeals-reviews.png",
    title: "Appeals & Reviews",
  },
  {
    id: 10,
    iconSrc: "/images/icons/temporary.png",
    title: "Temporary Activity Visa",
  },
  {
    id: 11,
    iconSrc: "/images/icons/protection.png",
    title: "Protection Visa",
  },
  {
    id: 12,
    iconSrc: "/images/icons/business-visa.png",
    title: "Business Visa",
  },
];

const AustraliaImmigration = () => {
  return (
    <section className="bg-secondarylight pt-[60px]">
      <div className="container">
        <div className="max-w-[930px] w-full mx-auto">
          <h2 className="text-center mb-[15px]">Australia Immigration</h2>
          <p className="text-xl text-center mb-[40px]">
            Study International provides all types of Australia Immigration
            services and guide you to study, work or settle in Australia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
            {immigrationData?.map((item: any, i: any) => {
              return <ImmigrationCard data={item} key={i} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AustraliaImmigration;
