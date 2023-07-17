import API from "@/helpers/api";
import { excerptWithRemoveQuote } from "@/helpers/utils";
import Layout from "@/modules/@common/@layout";
import EventDetailTemplateOne from "@/modules/event/detail/template_one";
const forntendUrl = process.env.NEXT_PUBLIC_FRONTEND_URI;

const EventDetailPge = ({ eventDetail }: any) => {
  const desc =
    eventDetail && eventDetail?.metaDescription
      ? eventDetail?.metaDescription
      : eventDetail?.content
      ? excerptWithRemoveQuote(eventDetail?.content, 150)
      : "";

  return (
    <Layout
      title={eventDetail?.title}
      metaTitle={eventDetail?.metaTitle || eventDetail?.title}
      metaDescription={desc}
      metaKeywords={eventDetail?.keywords}
      metaImage={eventDetail?.featureImage}
      metaUrl={`${forntendUrl}/events/${eventDetail?.slug}`}
    >
      <EventDetailTemplateOne data={eventDetail} />
    </Layout>
  );
};

export default EventDetailPge;

export async function getServerSideProps({ query }: any) {
  const { event_slug } = query;
  let props = {
    eventDetail: "",
  };

  try {
    const eventDetail: any = await API.get(`/public/events/${event_slug}`);
    if (!eventDetail.error && eventDetail.data) {
      props.eventDetail = eventDetail.data;
    } else {
      return {
        redirect: {
          permanent: false,
          destination: "/404",
        },
      };
    }
    return {
      props,
    };
  } catch (err) {
    return {
      props,
    };
  }
}
