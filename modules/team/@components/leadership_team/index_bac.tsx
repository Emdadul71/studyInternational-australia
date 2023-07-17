import WeWorkCard from "@/modules/about_us/@components/we_work_card";
import Link from "next/link";
import React from "react";

const leadershipTeamData = [
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
  {
    id: 4,
    name: "Mizanur Rahman",
    designation: "HR Head",
    imgSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGNlb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "Mizanur Rahman",
    designation: "HR Head",
    imgSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGNlb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    name: "Mizanur Rahman",
    designation: "Advisor",
    imgSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    name: "Mizanur Rahman",
    designation: "Advisor",
    imgSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "Mizanur Rahman",
    designation: "Advisor",
    imgSrc:
      "https://images.unsplash.com/photo-1525054974-849f88188c3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const LeadershipTeam = () => {
  return (
    <section className="pt-8 lg:pt-[80px]">
      <div className="container">
        <h3 className="text-center mb-8 lg:mb-[50px]">Our Leadership Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
          {leadershipTeamData.map((item: any, i: any) => {
            return (
              <Link href="team/details">
                <WeWorkCard key={i} item={item} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
