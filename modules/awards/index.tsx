import React from "react";
import AwardHero from "./@components/hero";
import Testimonials from "../@common/testimonials";
import Certificate from "./@components/certificate";

const Awards = ({ data }: any) => {
  return (
    <div>
      <AwardHero />
      <Certificate />
      <Testimonials />
    </div>
  );
};

export default Awards;
