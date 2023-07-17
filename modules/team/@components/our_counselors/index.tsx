import WeWorkCard from "@/modules/about_us/@components/we_work_card";
import Link from "next/link";
import React from "react";

const counselorsData = [
  {
    id: 1,
    name: "Fakhrul Islam",
    designation: "Counsellor Head",
    slug: "#",
    imgSrc:
      "https://images.unsplash.com/photo-1559418162-0d309d8d10a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Vvc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Md. Noman Chowdhury",
    designation: "Senior Counsellor",
    slug: "#",
    imgSrc:
      "https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNlb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Md. Mamun Hossain",
    designation: "Counsellor",
    slug: "#",
    imgSrc:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNlb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "R.K Rahman",
    designation: "Counsellor",
    slug: "#",
    imgSrc:
      "https://images.unsplash.com/photo-1559718062-361155fad299?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNlb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "Mizanur Rahman",
    designation: "Counsellor",
    slug: "#",
    imgSrc:
      "https://images.unsplash.com/photo-1549473448-5d7196c91f48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNlb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    name: "Nazrul Islam",
    designation: "Counsellor",
    slug: "#",
    imgSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "R.K Rahman",
    designation: "Counsellor",
    slug: "#",
    imgSrc:
      "https://images.unsplash.com/photo-1559718062-361155fad299?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNlb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "R.K Rahman",
    designation: "Counsellor",
    slug: "#",
    imgSrc:
      "https://images.unsplash.com/photo-1559718062-361155fad299?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNlb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const OurCounsellor = ({ classes }: any) => {
  return (
    <section className={`${classes?.root ? classes?.root : ""}`}>
      <div className="container">
        <h3 className="text-center mb-8 lg:mb-[50px]">Our Counsellors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
          {counselorsData.map((item: any, i: any) => {
            return (
              <Link href={`${item?.slug}`}>
                <WeWorkCard key={i} item={item} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurCounsellor;
