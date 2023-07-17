import Layout from "@/modules/@common/@layout";
import TestimonialList from "@/modules/testimonials/list";
import React from "react";
const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URI;

const TestimonialPage = () => {
  return (
    <Layout
      title="Testimonials"
      metaTitle="Testimonial"
      metaDescription="Discover Why Our Clients Rave About Their Unforgettable Experiences and the Outstanding Quality of Our Services"
      metaUrl={`${baseUrl}testimonials`}
    >
      <TestimonialList />
    </Layout>
  );
};

export default TestimonialPage;
