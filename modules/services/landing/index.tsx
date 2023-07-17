import LeadForm from "@/modules/@common/lead_form_section";
import PartnerUniversities from "@/modules/@common/partner_universities";
import ServiceHeroLanding from "../@components/hero_landing";
import WeOffer from "../@components/we_offer";

const ServiceLanding = () => {
  return (
    <>
      <ServiceHeroLanding />
      <WeOffer />
      <PartnerUniversities />
      <LeadForm />
    </>
  );
};

export default ServiceLanding;
