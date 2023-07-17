import React from "react";
import AboutHero from "./@components/about_hero";
import AboutImage from "./@components/about_image";
import OurStory from "./@components/our_story";
import LeadForm from "../@common/lead_form_section";
import Testimonials from "../@common/testimonials";
import BlogSection from "../@common/blog_section";
import PartnerUniversities from "../@common/partner_universities";
import CountdownInfo from "../@common/countdown_info";
import HowWeWork from "./@components/how_we_work";

const AboutUs = () => {
  return (
    <div>
      <AboutHero />
      <AboutImage />
      <OurStory />
      <CountdownInfo />
      {/* <HowWeWork /> */}
      <PartnerUniversities />
      <BlogSection classes={{ root: "pt-10" }} />
      <Testimonials />
      <LeadForm />
    </div>
  );
};

export default AboutUs;
