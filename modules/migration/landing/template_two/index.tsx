import React from "react";
import MigrationHero from "../../@components/hero";
import MigrationDescription from "../../@components/description";
import AustraliaImmigration from "../../@components/australia_immigration";
import MigrationForm from "../../@components/migration_form";
import MigrationHeroSecond from "../../@components/hero_second";

const MigrationLandingTemplateTwo = () => {
  return (
    <div>
      <MigrationHeroSecond />
      <MigrationDescription />
      <AustraliaImmigration />
      <MigrationForm />
    </div>
  );
};

export default MigrationLandingTemplateTwo;
