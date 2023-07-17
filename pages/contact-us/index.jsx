import ContactUs from "@/modules/contact_us";
import Layout from "@/modules/@common/@layout";
const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URI;

const ContactUsPage = () => {
  return (
    <Layout
      title="Get in Touch"
      metaTitle="Get in Touch"
      metaKeywords="industry’s,awards"
      metaUrl={`${baseUrl}contact-us`}
    >
      <ContactUs />
    </Layout>
  );
};

export default ContactUsPage;
