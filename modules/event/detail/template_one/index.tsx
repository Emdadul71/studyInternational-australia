import RecentEvent from "@/modules/@common/recent_event";
import Testimonials from "@/modules/@common/testimonials";
import { useRef } from "react";
import EventAbout from "../../@components/about";
import EventDetailHero from "../../@components/detail_hero";
import EventMap from "../../@components/map";
import ParticipantForm from "../../@components/participant_form";

export const EventDetailTemplateOne = ({ data }: any) => {
  const locationRef = useRef(null);
  const booknowRef = useRef(null);
  return (
    <>
      <EventDetailHero booknowRef={booknowRef} data={data} />
      <EventAbout
        data={data}
        locationRef={locationRef}
        booknowRef={booknowRef}
      />
      <ParticipantForm data={data} booknowRef={booknowRef} />
      <EventMap data={data} locationRef={locationRef} />
      <Testimonials classes={{ root: "!mb-0" }} />
      <RecentEvent classes={{ root: "!bg-white !mb-0" }} />
    </>
  );
};

export default EventDetailTemplateOne;
