import Layout from "@/modules/@common/@layout";
import CountryDetailTemplateOne from "@/modules/country/detail/template_one";

// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";
const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URI;

const render = (props: any) => {
  return <CountryDetailTemplateOne data={props} />;
};

const CityDetailPage = (props: any) => {
  return (
    <Layout
      title={props?.title}
      metaTitle={props?.metaTitle}
      metaDescription={props?.metaDescription}
      metaKeywords={props?.metaKeywords}
      metaUrl={`${baseUrl}/country/${props.slug}`}
      metaImage={`${baseUrl}${props?.metaImage}`}
    >
      {render(props)}
    </Layout>
  );
};

export default CityDetailPage;

export async function getStaticProps(context: any) {
  const { params } = context;
  const slug = params.city_slug;

  const filePath = path.join(
    process.cwd(),
    "/fakedata/country-single-page-data.json"
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
    "/fakedata/country-single-page-data.json"
  );
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());

  const paths = objectData.data.map((item: { slug: string }) => {
    return {
      params: {
        city_slug: `${item.slug}`,
      },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}
