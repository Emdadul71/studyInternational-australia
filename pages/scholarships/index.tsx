import Layout from "@/modules/@common/@layout";
import ScholarshipList from "@/modules/scholarship/list";
const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URI;

const ScholarshipsPage = () => {
  return (
    <Layout
      title="Study Abroad Scholarships for Bangladeshi Students"
      metaTitle="Study Abroad Scholarships for Bangladeshi Students"
      metaDescription="Studying in a foreign country can do wonders for your professional future. However, there are numerous factors to consider, including where to study, which course to take, and how much money you will need to invest. Many students from Bangladesh travel abroad each year to further their education. Bangladeshi students who aspire to study abroad should read up on the latest developments. You need to be well-versed in the area you plan to study in, the institution you intend to attend, and the major you plan to pursue. We will examine the benefits of studying abroad, the best countries to apply to, and the application process for students from Bangladesh."
      metaKeywords="scholarships,study,abroad,student"
      metaUrl={`${baseUrl}scholarships`}
      metaImage={`${baseUrl}images/scholarship/scholarship-landing.jpg`}
    >
      <ScholarshipList />
    </Layout>
  );
};

export default ScholarshipsPage;
