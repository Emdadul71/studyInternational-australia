import Testimonials from "@/modules/@common/testimonials";
import BlogCatList from "../@components/cat_list";
import LeadFormSection from "@/modules/@common/lead_form_section";

const BlogCategory = () => {
  return (
    <div>
      <BlogCatList />
      <Testimonials />
      <LeadFormSection />
    </div>
  );
};

export default BlogCategory;
