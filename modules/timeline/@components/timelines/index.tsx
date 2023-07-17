"use client";

import useWindowDimensions from "@/hooks/use_window_dimensions";
import React from "react";

const dataTimeline = [
  { id: 1, isYellow: true, isWhite: false },
  { id: 2, isYellow: false, isWhite: true },
  { id: 3, isYellow: false, isWhite: true },
  { id: 4, isYellow: true, isWhite: false },
  { id: 5, isYellow: true, isWhite: false },
  { id: 6, isYellow: false, isWhite: true },
  { id: 7, isYellow: false, isWhite: true },
  { id: 8, isYellow: true, isWhite: false },
];

const Timelines = () => {
  const { width } = useWindowDimensions();

  const mobile = width < 1024;

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {dataTimeline?.map((item: any, i: any) => {
            return (
              <div key={i}>
                {i % 2 == 1 && !mobile && <div className="h-[100px]"></div>}
                <div
                  className={`${
                    (!mobile ? item?.isYellow : i % 2 == 0)
                      ? "bg-secondarylight"
                      : "border"
                  } 
                  p-6 lg:p-[40px] relative rounded-[6px]`}
                >
                  <p className="text-primary text-[50px] font-bold m-0">2005</p>
                  <p className="text-paragraph text-[34px] font-bold m-0 mb-[15px]">
                    SI Established
                  </p>
                  <p className="m-0">
                    SI was established in Sydney and started providing education
                    consultancy to the International Students in its initial
                    phase
                  </p>

                  {i % 2 == 0 && !mobile && (
                    <div className="w-[30px] h-[1px] border-t-[1px] border-grey absolute top-[65%] right-[-30px]"></div>
                  )}
                </div>

                {i % 2 == 0 && i !== dataTimeline?.length - 2 && !mobile && (
                  <div className="h-[110px] relative  md:block">
                    <div className="w-6/12 h-[80%] border-t-[1px] border-l-[1px] border-grey absolute top-[50%] right-[-30px]"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timelines;
