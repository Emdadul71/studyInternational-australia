import FeqSection from "@/modules/@common/faq";
import GetReady from "@/modules/@common/get_ready";
import LeadForm from "@/modules/@common/lead_form";
import LeadFormSection from "@/modules/@common/lead_form_section";
import StudyInfo from "@/modules/country/@components/study_info";
import Faq from "@/modules/faq";
import ServiceNewHero from "@/modules/services/@components/new_hero";
import React from "react";
import ScholarshipHero from "../@components/hero";
import ScholarshipDescription from "../@components/description";
import ScholarshipShortDescription from "../@components/scholarship_short_description";

const dataScholarshipShortDescription = [
  {
    id: 1,
    topTitle: "Scholarships In UK for Bangladeshi Students",
    imgSrc: "/images/misc/uk-scholarship.webp",
    alt: "uk Scholarship",
  },
  {
    id: 2,
    topTitle: "Scholarships In USA for Bangladeshi Students",
    imgSrc: "/images/misc/uk-scholarship.webp",
    alt: "uk Scholarship",
  },
  {
    id: 3,
    topTitle: "Scholarships In Australia for Bangladeshi Students",
    imgSrc: "/images/misc/scholarship-aus.webp",
    alt: "Australia Scholarship",
  },
  {
    id: 4,
    topTitle: "Scholarships In Canada for Bangladeshi Students",
    imgSrc: "/images/misc/uk-scholarship.webp",
    alt: "uk Scholarship",
  },
  {
    id: 5,
    topTitle: "Scholarships In Australia for Bangladeshi Students",
    imgSrc: "/images/misc/uk-scholarship.webp",
    alt: "uk Scholarship",
  },
  {
    id: 6,
    topTitle: "Scholarships In Australia for Bangladeshi Students",
    imgSrc: "/images/misc/uk-scholarship.webp",
    alt: "uk Scholarship",
  },
  {
    id: 7,
    topTitle: "Scholarships In Australia for Bangladeshi Students",
    imgSrc: "/images/misc/uk-scholarship.webp",
    alt: "uk Scholarship",
  },
  {
    id: 8,
    topTitle: "Scholarships In Australia for Bangladeshi Students",
    imgSrc: "/images/misc/uk-scholarship.webp",
    alt: "uk Scholarship",
  },
];

const scholarshipFaqData = {
  faq: [
    {
      id: 1,
      question: "How to get a scholarship to study abroad?",
      answer:
        "To apply for or avail a scholarship to study abroad, students have to visit the particular university’s website and fill in the necessary information. They will also be required to attach their academic documents as proof.",
    },
    {
      id: 2,
      question:
        "How to get an education loan for abroad studies without collateral?",
      answer:
        "To apply for or avail a scholarship to study abroad, students have to visit the particular university’s website and fill in the necessary information. They will also be required to attach their academic documents as proof.",
    },
    {
      id: 3,
      question: "How can I study abroad for free?",
      answer:
        "To apply for or avail a scholarship to study abroad, students have to visit the particular university’s website and fill in the necessary information. They will also be required to attach their academic documents as proof.",
    },
    {
      id: 4,
      question: "Is studying abroad worth it?",
      answer:
        "To apply for or avail a scholarship to study abroad, students have to visit the particular university’s website and fill in the necessary information. They will also be required to attach their academic documents as proof.",
    },
  ],
};

const ScholarshipList = () => {
  return (
    <>
      <ScholarshipHero
        data={{
          title: "Study Abroad Scholarships for Bangladeshi Students",
          featuredImage: "/images/scholarship/scholarship-landing.webp",
        }}
      />

      <section>
        <div className="container">
          <ScholarshipDescription />
        </div>
      </section>

      <LeadFormSection isServices classes={{ root: "mb-10 lg:mb-[80px]" }} />

      <ScholarshipShortDescription />

      <FeqSection
        title="Frequently Asked Questions to study abroad"
        data={scholarshipFaqData}
      />
    </>
  );
};

export default ScholarshipList;
