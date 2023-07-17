import Layout from "@/modules/@common/@layout";
import CareerList from "@/modules/career/landing";
const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URI;

const CareerPage = () => {
  return (
    <Layout
      title="Join our team & let’s work together"
      metaTitle="Join our team & let’s work together"
      metaDescription="Join our team & let’s work together"
      metaKeywords="study international,Abroad,global"
      metaUrl={`${baseUrl}career`}
      metaImage={`${baseUrl}images/about/about-image.jpg`}
    >
      <CareerList />
    </Layout>
  );
};

export default CareerPage;
