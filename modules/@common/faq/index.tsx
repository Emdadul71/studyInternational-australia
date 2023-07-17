import Faq from "@/modules/faq";
import React from "react";

interface propTypes {
  data?: any;
  title: string;
  classes?: any;
}

const FeqSection = ({ data, title, classes }: propTypes) => {
  return (
    <section>
      <div className="container">
        <h3 className="heading-two text-center mb-10">{title}</h3>
        <div>
          <Faq data={data} />
        </div>
      </div>
    </section>
  );
};

export default FeqSection;
