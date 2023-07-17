import BlogSection from "@/modules/@common/blog_section";
import CountryCaresoul from "@/modules/@common/country_caresoul";
import { LeadFormSection } from "@/modules/@common/lead_form_section";
import PartnerUniversities from "@/modules/@common/partner_universities";
import Testimonials from "@/modules/@common/testimonials";
import WhySi from "@/modules/@common/why_si";
import HomeHeroOne from "../@components/hero_one";
import Services from "../@components/services";
import WelcomeSI from "../@components/welcome_si";
import RecentEvent from "@/modules/@common/recent_event";
import HomeTab from "../@components/home_tab";

const HomeTemplateOne = () => {
  return (
    <div>
      <HomeHeroOne />
      <WelcomeSI />
      {/* <RecentEvent classes={{ root: "bg-secondarylight" }} /> */}
      <Services />
      {/* <HomeTab /> */}
      <WhySi classes={{ root: "mb-10 lg:!mb-[80px]" }} />
      <CountryCaresoul />
      <BlogSection />
      <Testimonials />
      <LeadFormSection isSmall={false} />
      <PartnerUniversities />
    </div>
  );
};

export default HomeTemplateOne;
