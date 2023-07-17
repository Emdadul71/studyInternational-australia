import FeqSection from "@/modules/@common/faq";
import LeadFormSection from "@/modules/@common/lead_form_section";
import ServiceNewHero from "@/modules/services/@components/new_hero";
import InfoAustralia from "../../@components/info_australia";
import { useRouter } from "next/router";
import InfoUK from "../../@components/info_melbourne";
import InfoCanada from "../../@components/info_canada";
import InfoUSA from "../../@components/info_usa";
import GetReady from "@/modules/@common/get_ready";
import ArticleSection from "@/modules/@common/article_section";
import { htmlParse } from "@/helpers/utils";
import InfoJapan from "../../@components/info_japan";

interface propTypes {
  data?: any;
}
export const CountryDetailTemplateOne = ({ data }: propTypes) => {
  const dataFaqUK = [
    {
      id: 1,
      question: "What is the ideal intake for the UK?",
      answer:
        "This depends on the program, level of study, and the institution you're applying to. The September intake is typically the most preferred. For this intake, the majority of universities offer all major courses. While this intake is the most competitive, it’s also the one where you have the most number of seats and programs open. <br><br> Starting your applications early and making sure to submit a thorough and complete package that matches your chosen program’s eligibility criteria boosts your chances of admission. But don’t fret if you miss the Fall intake - the Winter intake is comparable in terms of course availability and a good option to start your program without having to wait another academic year.",
    },
    {
      id: 2,
      question: "Is it expensive to study in the UK?",
      answer:
        "In comparison to places like the USA, the UK's tuition fees and cost of living objectively seem to be on the higher end. Do your homework to determine your cost expectations, though, as affordability is subjective, depending on your own budget, and can vary considerably based on your needs. And remember, scholarships and education loans can help lighten the financial burden considerably!",
    },
  ];
  const dataFaqAustralia = [
    {
      id: 1,
      question:
        "Is it possible for a Bangladeshi student to study in Australia without IELTS?",
      answer:
        "Yes, you can apply with MOI or other test scores like PTE, TOEFL, Duolingo and so on.",
    },
    {
      id: 2,
      question:
        "In Australia, what is the minimum age to work a part-time job?",
      answer:
        "There is no uniform minimum age policy across the country; rather, different states and territories set their own standards. Still, if you're 18 or older, you can legally work part-time in Australia.",
    },
  ];

  const dataFaqCanada = [
    {
      id: 1,
      question: "Is studying in Canada affordable for international students?",
      answer:
        "The numerous universities and provinces in Canada have different tuition and living expenses. We strongly advise doing research as much as you can about the universities you're thinking about, as well as the expense of living there. Affordability is subjective to the student and the student’s budget, but with the range of options available, we believe you can find something perfect for you. Plus, there’s plenty of scholarship options to look into as well!",
    },
    {
      id: 2,
      question: "How much does a student visa to Canada cost?",
      answer:
        "The application fee for a study permit is CAD 150. There are additional costs if biometric data must be provided or if you must participate in an interview. Don't forget to confirm if these are necessary in your country.",
    },
  ];
  const dataFaqUSA = [
    {
      id: 1,
      question:
        "Does the USA provide full scholarships to international students?",
      answer:
        "Scholarships for international students attending universities in the United States range from fully funded to partially funded and it varies across the universities or organizations providing the scholarships. ",
    },
    {
      id: 2,
      question: "What are the best US cities for international students?",
      answer:
        "University and college environments in several US cities can differ widely. Which cities are best for students can be difficult to generalize since it’s a matter of preference! Nonetheless, according to QS Best Student Cities 2023, there are 5 US cities in the top 50, among which Boston is the best city for international students in the USA.",
    },
  ];

  return (
    <>
      <ServiceNewHero data={data} />
      <section className="pb-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[810px_330px] gap-8">
            <div className="from_texteditor_wrapper">
              {data?.description && <div>{htmlParse(data?.description)}</div>}
            </div>
            <div>
              <LeadFormSection isSmall />
            </div>
          </div>
        </div>
      </section>

      {/* <FeqSection title="Frequently Asked Questions (FAQs)" data={data} /> */}
      <LeadFormSection />
    </>
  );
};

export default CountryDetailTemplateOne;
