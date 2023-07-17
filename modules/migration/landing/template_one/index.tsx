import React from "react";
import MigrationHero from "../../@components/hero";
import MigrationDescription from "../../@components/description";
import AustraliaImmigration from "../../@components/australia_immigration";
import MigrationForm from "../../@components/migration_form";
import LeadFormSection from "@/modules/@common/lead_form_section";

const MigrationLandingTemplateOne = () => {
  return (
    <div>
      <MigrationHero />
      <MigrationDescription />
      <AustraliaImmigration />
      <LeadFormSection isServices />
    </div>
  );
};

export default MigrationLandingTemplateOne;
