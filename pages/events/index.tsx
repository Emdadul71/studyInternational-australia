import Layout from "@/modules/@common/@layout";
import EventLandingTemplateOne from "@/modules/event/landing/template_one";
const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URI;

const EventListPage = () => {
  return (
    <Layout
      title="Study International Events"
      metaTitle="Study International Events"
      metaDescription="Your dream study abroad opportunity awaits - connect with universities in key destinations around the world and explore your options as a future international student."
      metaKeywords="study international,Abroad,global"
      metaUrl={`${baseUrl}events`}
      metaImage={`${baseUrl}images/about/about-image.jpg`}
    >
      <EventLandingTemplateOne />
    </Layout>
  );
};

export default EventListPage;
