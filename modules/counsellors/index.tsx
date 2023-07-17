import React from "react";
import CounsellorHero from "./@components/hero";
import Temp from "./@components/temp";
import OurCounsellor from "../team/@components/our_counselors";
import LeadFormSection from "../@common/lead_form_section";

const CounsellorsLanding = () => {
  return (
    <div>
      <CounsellorHero />
      {/* <OurCounsellor classes={{ root: "pt-10" }} /> */}
      <LeadFormSection isServices />
    </div>
  );
};

export default CounsellorsLanding;
