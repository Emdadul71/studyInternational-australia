import Layout from "@/modules/@common/@layout";
import CountryLandingTemplateOne from "@/modules/country/landing/template_one";
const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URI;

const CountryPage = () => {
  return (
    <Layout
      title="Where are you thinking of studying Abroad with Study International?"
      metaTitle="Where are you thinking of studying Abroad with Study International?"
      metaDescription="A trusted and progressive partner in the global journey of every aspiring international student
        Speak to an Expert"
      metaKeywords="study international,Abroad,global"
      metaUrl={`${baseUrl}country`}
      metaImage={`${baseUrl}images/country/study-international.jpg`}
    >
      <CountryLandingTemplateOne />
    </Layout>
  );
};

export default CountryPage;
