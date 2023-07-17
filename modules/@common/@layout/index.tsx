import Head from "next/head";

import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  title?: string;
  children?: JSX.Element | JSX.Element[] | string;
  metaTitle?: string;
  metaKeywords?: string;
  metaDescription?: string;
  metaUrl?: string;
  metaImage?: string;
  JsonLd?: any;
}

export const Layout = ({
  children,
  title,
  metaTitle,
  metaKeywords,
  metaDescription,
  metaUrl,
  metaImage,
  JsonLd,
}: LayoutProps) => {
  //
  const formatedTitle = title
    ? title + " | Study International"
    : "Study International | Study International";
  const formatedMetaTitle = metaTitle
    ? metaTitle + " | Study International"
    : "Study International";
  const formatedMetaKeywords = metaKeywords
    ? metaKeywords
    : "Study International";
  const formatedMetaDescription = metaDescription
    ? metaDescription
    : "Study International";

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{formatedTitle}</title>
        <meta name="title" content={formatedMetaTitle} />
        <meta name="keywords" content={formatedMetaKeywords} />
        <meta name="description" content={formatedMetaDescription} />
        {metaUrl && <link rel="canonical" href={metaUrl} />}
        {/* Opengraph */}
        <meta property="og:title" content={formatedMetaTitle} />
        <meta property="og:description" content={formatedMetaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="bdwinners" />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:image" content={metaImage} />

        {/* Twitter */}
        <meta name="twitter:title" content={formatedMetaTitle} />
        <meta name="twitter:description" content={formatedMetaDescription} />
        <meta name="twitter:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="referrer" content="no-referrer"></meta>

        {JsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={JsonLd()}
          />
        )}
      </Head>
      <div className="flex flex-col	min-h-screen">
        <Header />
        <main>{children}</main>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
