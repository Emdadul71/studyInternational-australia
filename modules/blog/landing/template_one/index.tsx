import Testimonials from "@/modules/@common/testimonials";
import BlogList from "../../@components/blog_list";
import LeadFormSection from "@/modules/@common/lead_form_section";
import BlogHero from "../../@components/hero";

export const BlogLandingTemplateOne = () => {
  return (
    <div>
      <BlogHero />
      <BlogList />
      <Testimonials />
      <LeadFormSection />
    </div>
  );
};

export default BlogLandingTemplateOne;
