import Layout from "@/modules/@common/@layout";
import AboutUs from "@/modules/about_us";
const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URI;

const AboutUsPage = () => {
  return (
    <Layout
      title="Where are you thinking of studying Abroad with Study International?"
      metaTitle="Where are you thinking of studying Abroad with Study International?"
      metaDescription="A trusted and progressive partner in the global journey of every aspiring international student
      Speak to an Expert"
      metaKeywords="study international,Abroad,global"
      metaUrl={`${baseUrl}who-we-are`}
      metaImage={`${baseUrl}images/about/about-image.jpg`}
    >
      <AboutUs />
    </Layout>
  );
};

export default AboutUsPage;
