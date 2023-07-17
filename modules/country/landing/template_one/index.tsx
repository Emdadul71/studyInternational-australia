import FeqSection from "@/modules/@common/faq";
import CountryHeroOne from "../../@components/hero_one";
import LeadForm from "@/modules/@common/lead_form_section";
import CountryCaresoul from "@/modules/@common/country_caresoul";
import CountdownInfo from "@/modules/@common/countdown_info";
import StudyInfo from "../../@components/study_info";
import StudyFees from "../../@components/study_fees";
import CounsellorAppoinmentSignup from "@/modules/@common/counsellor_appoinment_signup";
import ArticleSection from "@/modules/@common/article_section";

const faqData = {
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
    {
      id: 5,
      question: "How many students go abroad to study from Bangladesh?",
      answer:
        "To apply for or avail a scholarship to study abroad, students have to visit the particular university’s website and fill in the necessary information. They will also be required to attach their academic documents as proof.",
    },
  ],
};

export const CountryLandingTemplateOne = () => {
  return (
    <div>
      <CountryHeroOne />
      <CountdownInfo classes={{ root: "lg:!mb-10" }} />
      <CountryCaresoul />
      <StudyInfo />
      {/* <CounsellorAppoinmentSignup /> */}
      {/* <StudyFees /> */}
      <ArticleSection classes={{ root: "lg:pt-[80px]" }} />
      <FeqSection
        title="Frequently Asked Questions to study abroad"
        data={faqData}
      />
      {/* <LeadForm /> */}
    </div>
  );
};

export default CountryLandingTemplateOne;
