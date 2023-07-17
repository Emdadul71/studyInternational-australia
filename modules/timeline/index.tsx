import LeadForm from "../@common/lead_form_section";
import Testimonials from "../@common/testimonials";
import TimelineHero from "./@components/timeline_hero";
import Timelines from "./@components/timelines";

const Timeline = () => {
  return (
    <div>
      <TimelineHero />
      <Timelines />
      <Testimonials />
      <LeadForm />
    </div>
  );
};

export default Timeline;
