import GetReady from "@/modules/@common/get_ready";
import Ataglance from "../../@components/ataglance";
import CountryHeroTwo from "../../@components/hero_two";
import StudyInfo from "../../@components/study_info";
import ArticleSection from "@/modules/@common/article_section";
import Testimonials from "@/modules/@common/testimonials";
import LeadFormSection from "@/modules/@common/lead_form_section";
import TempleteTwoHero from "../../@components/templete_two_hero";
import { useRouter } from "next/router";
import InfoUK from "../../@components/info_uk";
import InfoAustralia from "../../@components/info_australia";
import InfoCanada from "../../@components/info_canada";
import InfoUSA from "../../@components/info_usa";

const heroDataUK = {
  id: 1,
  title:
    "Study Guide to United Kingdom for International Students: Admissions, Eligibility, Cost of Living & Jobs",
  imgSrc: "/images/country/uk-details.webp",
  alt: "United Kingdom",
};
const heroDataUSA = {
  id: 1,
  title:
    "Study Guide to USA for International Students: Admissions, Eligibility, Cost of Living & Jobs",
  imgSrc: "/images/country/usa-details.webp",
  alt: "United States of America",
};
const heroDataAustralia = {
  id: 1,
  title:
    "Study Guide to Australia for International Students: Admissions, Eligibility, Cost of Living & Jobs",
  imgSrc: "/images/country/australia-details.webp",
  alt: "Australia",
};
const heroDataCanada = {
  id: 1,
  title:
    "Study Guide to Canada for International Students: Admissions, Eligibility, Cost of Living & Jobs",
  imgSrc: "/images/country/canada-details.webp",
  alt: "Canada",
};

const dataHero = {
  "study-in-the-uk": heroDataUK,
  "study-in-australia": heroDataAustralia,
  "study-in-canada": heroDataCanada,
  "study-in-the-usa": heroDataUSA,
};

export const CountryDetailTemplateTwo = () => {
  const router = useRouter();
  const { query } = router;

  const showInfo = {
    "study-in-the-uk": <InfoUK />,
    "study-in-australia": <InfoAustralia />,
    "study-in-canada": <InfoCanada />,
    "study-in-the-usa": <InfoUSA />,
  };
  return (
    <div>
      <TempleteTwoHero //@ts-ignore
        data={dataHero[query?.country_slug]}
      />
      <Ataglance />
      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[810px_330px] gap-8">
            {/*  @ts-ignore */}
            <div>{showInfo[query?.country_slug]}</div>

            <div>
              <LeadFormSection isSmall />
            </div>
          </div>
        </div>
      </section>
      <GetReady />
      <ArticleSection />
      <Testimonials />
      <LeadFormSection />
    </div>
  );
};

export default CountryDetailTemplateTwo;
