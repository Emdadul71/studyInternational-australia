import Layout from "@/modules/@common/@layout";
import ScholarshipDetails from "@/modules/scholarship/details";

// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";
const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URI;

const ScholarshipDetailPage = (props: any) => {
  return (
    <Layout
      title={props?.title}
      metaTitle={props?.metaTitle}
      metaDescription={props?.metaDescription}
      metaKeywords={props?.metaKeywords}
      metaUrl={`${baseUrl}scholarships/${props.slug}`}
      metaImage={`${baseUrl}${props?.metaImage}`}
    >
      <ScholarshipDetails data={props} />
    </Layout>
  );
};

export default ScholarshipDetailPage;

export async function getStaticProps(context: any) {
  const { params } = context;
  const slug = params.scholarship_slug;

  const filePath = path.join(
    process.cwd(),
    "/fakedata/scholarship-single-page-data.json"
  );
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());

  const dataFinal = objectData.data?.find(
    (item: { slug: string }) => item.slug === slug
  );

  if (!dataFinal) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  } else {
    return {
      props: dataFinal,
    };
  }
}

export async function getStaticPaths() {
  const filePath = path.join(
    process.cwd(),
    "/fakedata/scholarship-single-page-data.json"
  );
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());

  const paths = objectData.data.map((item: { slug: string }) => {
    return {
      params: {
        scholarship_slug: `${item.slug}`,
      },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}
