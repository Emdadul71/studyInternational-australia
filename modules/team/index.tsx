import React from "react";
import TeamHero from "./@components/hero";
import LeadershipTeam from "./@components/leadership_team";
import OurCounselors from "./@components/our_counselors";
import OurCounsellor from "./@components/our_counselors";
import LeadForm from "../@common/lead_form_section";

const Team = () => {
  return (
    <div>
      <TeamHero />
      <LeadershipTeam />
      {/* <OurCounsellor /> */}
      <LeadForm />
    </div>
  );
};

export default Team;
