import { excerpt, htmlParse, readingTime } from "@/helpers/utils";
import BlogSection from "@/modules/@common/blog_section";
import LeadFormSection from "@/modules/@common/lead_form_section";
import SocialShare from "@/modules/@common/social_share";
import moment from "moment";
import Image from "next/image";
const forntendUrl = process.env.NEXT_PUBLIC_FRONTEND_URI;

export const BlogDetailTemplateOne = ({ data }: any) => {
  return (
    <>
      <section className="pt-8 lg:pt-10">
        <div className="container">
          <div className="max-w-[930px] mx-auto">
            {data?.title && (
              <div className="mb-5 lg:mb-8">
                <h1 className="mb-5">{data?.title}</h1>
              </div>
            )}

            {/* author */}
            <div className="mb-4 lg:mb-8 grid grid-cols-1fr md:grid-cols-[1fr_auto] items-center">
              <div className="grid grid-cols-1 gap-4 lg:gap-6 items-center">
                <div>
                  <div>
                    By <span className="text-black font-medium">Admin</span>
                  </div>
                  {data?.publishedAt && (
                    <div className="flex flex-col md:flex-row lg:items-center gap-1">
                      <span>Last Updated: </span>
                      <span className="text-black font-medium">
                        {moment(data?.publishedAt).format("LL")}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-2 items-center ml-[76px] md:ml-0">
                <div>
                  <SocialShare
                    sharedUrl={`${forntendUrl}/blog/${data?.slug}`}
                  />
                </div>
                <div className="text-greylight"> | </div>
                {data?.content && (
                  <div>{readingTime(data?.content)} Min Read</div>
                )}
              </div>
            </div>
            <div className="mb-5 lg:mb-8">
              <Image
                src={data?.featureImage}
                alt="Study International Logo"
                width={600}
                height={500}
                blurDataURL="/images/misc/image-placeholder-big.webp"
                placeholder="blur"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* content */}
            {data?.content && (
              <div className="max-w-[690px] mx-auto from_texteditor_wrapper">
                {htmlParse(data?.content)}
              </div>
            )}
          </div>
        </div>
      </section>
      <BlogSection classes={{ root: "!pt-0" }} />
      <LeadFormSection />
    </>
  );
};

export default BlogDetailTemplateOne;
