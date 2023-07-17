import { useGetTeamQuery } from "@/appstore/team/team_api";
import Skeleton from "@/modules/@common/skeleton";
import WeWorkCard from "@/modules/about_us/@components/we_work_card";
import Link from "next/link";
import React from "react";

const LeadershipTeam = () => {
  const { data, isLoading } = useGetTeamQuery({ page: 1, limit: 10 });
  return (
    <section className="pt-8 lg:pt-[80px]">
      <div className="container">
        <h3 className="text-center mb-8 lg:mb-[50px]">Our Team</h3>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
            {new Array(12).fill(1).map((_, i) => {
              return (
                <div className="h-full" key={i}>
                  <Skeleton className={"h-[360px] "} />
                  <Skeleton
                    className={"h-[60px] mt-[10px] dark:!bg-neutral-800"}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
            {data?.data?.length > 0 ? (
              <>
                {data?.data.map((item: any, i: any) => {
                  return (
                    <Link href={`/team/${item?.slug}`}>
                      <WeWorkCard key={i} item={item} />
                    </Link>
                  );
                })}
              </>
            ) : (
              <div className="min-h-[300px] w-full flex justify-center items-center col-span-4">
                <p className="text-3xl">No data found !</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadershipTeam;
