import Layout from "@/modules/@common/@layout";
import Awards from "@/modules/awards";
const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URI;

const AwardsPage = () => {
  return (
    <Layout
      title="We’re Known as One of The Industry’s Best"
      metaTitle="We’re Known as One of The Industry’s Best"
      metaKeywords="industry’s,awards"
      metaUrl={`${baseUrl}awards`}
    >
      <Awards />
    </Layout>
  );
};

export default AwardsPage;
