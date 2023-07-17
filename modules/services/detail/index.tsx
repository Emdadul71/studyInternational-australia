import CountdownInfo from "@/modules/@common/countdown_info";
import StudyInfo from "@/modules/country/@components/study_info";
import Testimonials from "@/modules/@common/testimonials";
import OtherServices from "../@components/other_services";
import ServiceHeroDetail from "../@components/hero_detail";

interface propTypes {
  data?: any;
}

export const ServiceDetail = (data: propTypes) => {
  return (
    <>
      <ServiceHeroDetail classes={{ root: "!mb-0" }} data={data} />
      <CountdownInfo />
      <StudyInfo data={data} isServices />
      <OtherServices data={data} />
      <Testimonials />
    </>
  );
};

export default ServiceDetail;
