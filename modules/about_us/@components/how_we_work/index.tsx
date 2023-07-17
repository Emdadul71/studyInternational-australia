import React from "react";
import WeWorkCard from "../we_work_card";

const howWeWorkData = [
  {
    id: 1,
    name: "Ashraf Haq",
    designation: "CEO",
    imgSrc:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    name: "Md. Rakib Chowdhury",
    designation: "Country Manager",
    imgSrc:
      "https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNlb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Md. Mamun Hossain",
    designation: "Project Manager",
    imgSrc:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNlb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];
const HowWeWork = () => {
  return (
    <section>
      <div className="container">
        <h3 className="text-center mb-8 lg:mb-10">How We Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[50px]">
          {howWeWorkData?.map((item: any, i: any) => {
            return (
              <WeWorkCard
                key={i}
                classes={{ root: "bg-red-500" }}
                item={item}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
