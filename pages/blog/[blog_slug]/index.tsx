import Layout from "@/modules/@common/@layout";
import BlogDetailTemplateOne from "@/modules/blog/detail/template_one";
import API from "@/helpers/api";
import { excerptWithRemoveQuote, staticAsset } from "@/helpers/utils";
const forntendUrl = process.env.NEXT_PUBLIC_FRONTEND_URI;

const BlogDetailPage = ({ blogDetail }: any) => {
  const desc =
    blogDetail && blogDetail?.metaDescription
      ? blogDetail?.metaDescription
      : blogDetail?.content
      ? excerptWithRemoveQuote(blogDetail?.content, 150)
      : "";

  const JsonLd = () => {
    {
      return {
        __html: `
          [
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Study International",
              "alternateName": "Study International",
              "url": "https://studyinternational.net.au/",
              "logo": "${staticAsset('/images/misc/logo.png')}",
              "sameAs": [
                "https://www.facebook.com/SIBangladesh",
                "https://studyinternational.net.au/"
              ]
            },
            {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
                 "@type": "WebPage",
                 "@id": "${forntendUrl}/blog/${blogDetail?.slug}"
            },
            "headline": "${
              blogDetail?.metaTitle ? blogDetail?.metaTitle : blogDetail?.title
            }",
            "description":"${desc} | Study International",
            "image": "${blogDetail?.featureImage?.src}",
            "author": {
                 "@type": "Organization",
                 "name": "Study International"
            },
            "datePublished": "${blogDetail?.createdAt}"
       }]
      `,
      };
    }
  };

  return (
    <Layout
      title={blogDetail?.title}
      metaTitle={blogDetail?.metaTitle || blogDetail?.title}
      metaDescription={desc}
      metaKeywords={blogDetail?.keywords}
      metaImage={blogDetail?.featureImage}
      metaUrl={`${forntendUrl}/blog/${blogDetail?.slug}`}
      JsonLd={JsonLd}
    >
      <BlogDetailTemplateOne data={blogDetail} />
    </Layout>
  );
};

export default BlogDetailPage;

export async function getServerSideProps({ query }: any) {
  const { blog_slug } = query;
  let props = {
    blogDetail: null,
  };

  try {
    const blogDetail: any = await API.get(`/public/blogs/${blog_slug}`);
    if (!blogDetail.error && blogDetail.data) {
      props.blogDetail = blogDetail.data;
    } else {
      return {
        redirect: {
          permanent: false,
          destination: "/404",
        },
      };
    }
    return {
      props,
    };
  } catch (err) {
    return {
      props,
    };
  }
}
