import Layout from "@/modules/@common/@layout";
import ServiceLanding from "@/modules/services/landing";
const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URI;

const ServicesPage = () => {
  return (
    <Layout
      title="Providing you the pathway to excellence"
      metaTitle="Providing you the pathway to excellence"
      metaDescription="Allow us the opportunity to foster a harmonious transition from school to university with exceptional personalized overseas education counselling. Our Education Counsellors can get you on the right track towards an amazing career."
      metaUrl={`${baseUrl}services`}
    >
      <ServiceLanding />
    </Layout>
  );
};

export default ServicesPage;
