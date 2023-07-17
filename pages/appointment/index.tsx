import { staticAsset } from "@/helpers/utils";
import LeadFormSection from "@/modules/@common/lead_form_section";
import Head from "next/head";
import Image from "next/image";

export const AppointementPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Thank You for Choosing Study International</title>
        <meta
          name="title"
          content="Thank You for Choosing Study International"
        />
        <meta name="robots" content="noindex" />

        {/* Opengraph */}
        <meta
          property="og:title"
          content="Thank You for Choosing Study International"
        />
        {/* <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="bdwinners" />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:image" content={metaImage} />

        <meta name="twitter:title" content={formatedMetaTitle} />
        <meta name="twitter:description" content={formatedMetaDescription} />
        <meta name="twitter:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="referrer" content="no-referrer"></meta> */}
      </Head>

      <div className="flex items-center justify-center py-4">
        <Image
          src={staticAsset("/images/misc/logo.png")}
          alt="Study International Logo"
          width={155}
          height={40}
          blurDataURL={staticAsset("/images/misc/logo.png")}
          placeholder="blur"
        />
      </div>

      <section className="bg-bluelight pt-8 lg:py-[100px]">
        <div className="container">
          <h2 className="text-center mb-5">
            Thank You for <br /> Choosing Study International
          </h2>
          <p className="m-0 text-center">{`Meet Our Counsellor's`}</p>
        </div>
      </section>
      <LeadFormSection isAppointment />
    </>
  );
};

export default AppointementPage;
