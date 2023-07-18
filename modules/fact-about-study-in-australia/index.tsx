import React from "react";
import FactAboutHero from "./@components/hero";
import CountryCaresoul from "../@common/country_caresoul";
import PartnerUniversities from "../@common/partner_universities";
import Testimonials from "../@common/testimonials";
import LeadFormSection from "../@common/lead_form_section";
import InfoFactAbout from "./@components/info-fact-about";

const FactAboutStudyInAustralia = () => {
  return (
    <div>
      <FactAboutHero />
      <InfoFactAbout />
      <section className="bg-primary p-0">
        <div className="container">
          <div className="max-w-[650px] mx-auto">
            <LeadFormSection isServices />
          </div>
        </div>
      </section>
      <PartnerUniversities />
      <Testimonials />
    </div>
  );
};

export default FactAboutStudyInAustralia;
