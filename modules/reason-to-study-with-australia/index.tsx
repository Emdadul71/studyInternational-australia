import React from "react";
import PartnerUniversities from "../@common/partner_universities";
import Testimonials from "../@common/testimonials";
import LeadFormSection from "../@common/lead_form_section";
import ReasonToStudyAustraliaHero from "./@components/hero";
import InfoReasonToStudyAustralia from "./@components/info-reason-to-study-australia";

const ReasonToStudyWithAustralia = () => {
  return (
    <div>
      <ReasonToStudyAustraliaHero />
      <InfoReasonToStudyAustralia />
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

export default ReasonToStudyWithAustralia;
