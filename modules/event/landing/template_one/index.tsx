import EventSection from "@/modules/@common/event_section";
import EventHeroOne from "../../@components/hero_one";
import WhySi from "@/modules/@common/why_si";
import BlogSection from "@/modules/@common/blog_section";
import LeadForm from "@/modules/@common/lead_form_section";
import Testimonials from "@/modules/@common/testimonials";

export const EventLandingTemplateOne = () => {
  return (
    <>
      <EventHeroOne />
      <EventSection classes={{ root: "!mb-0 !pt-0 !bg-white" }} />
      <WhySi />
      <BlogSection />
      <Testimonials classes={{ root: "!mb-0" }} />
      <LeadForm />
    </>
  );
};

export default EventLandingTemplateOne;
