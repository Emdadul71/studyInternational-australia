"use client";
import BlogSection from "@/modules/@common/blog_section";
import AustraliaPartners from "../@components/australia_partners";
import PartnerHero from "../@components/partner_hero";
import UkPartners from "../@components/uk_partners";
import CanadaPartners from "../@components/canada_partners";
import UsaPartners from "../@components/usa_partners";
import OtherPartners from "../@components/other_partners";
import MalaysiaPartners from "../@components/malaysia_partners";

const PartnerList = () => {
  return (
    <div>
      <PartnerHero />
      <AustraliaPartners />
      <CanadaPartners />
      <UsaPartners />
      <UkPartners />
      <MalaysiaPartners />
      <OtherPartners />
      <BlogSection />
    </div>
  );
};

export default PartnerList;
