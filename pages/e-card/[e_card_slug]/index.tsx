import Layout from "@/modules/@common/@layout";
import ECard from "@/modules/@common/e_card";
import React from "react";

// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";
import ECardDirector from "@/modules/@common/e_card_director";

const eCardPage = (props: any) => {
  if (props?.templete === "director") {
    return <ECardDirector data={props} />;
  } else {
    return <ECard data={props} />;
  }
};

export default eCardPage;

export async function getStaticProps(context: any) {
  const { params } = context;
  const slug = params.e_card_slug;

  const filePath = path.join(process.cwd(), "/fakedata/e-card-data.json");
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
  const filePath = path.join(process.cwd(), "/fakedata/e-card-data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());

  const paths = objectData.data.map((item: { slug: string }) => {
    return {
      params: {
        e_card_slug: `${item.slug}`,
      },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}
