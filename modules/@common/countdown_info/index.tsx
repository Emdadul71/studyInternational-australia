import { useState } from "react";

import dynamic from "next/dynamic";
import { shortenLargeNumber } from "@/helpers/utils";
const CountUp = dynamic(() => import("react-countup"), {
  ssr: false,
});
const VisibilitySensor: any = dynamic(() => import("react-visibility-sensor"), {
  ssr: false,
});

const dummaData = [
  {
    title: "Working Countries",
    count: 9,
  },
  {
    title: "Student Visas",
    count: 2000,
  },
  {
    title: "Institutions",
    count: 200,
  },
  {
    title: "Courses",
    count: 3000,
  },
];

interface propTypes {
  classes?: {
    root?: string;
  };
}

const CountdownInfo = ({ classes }: propTypes) => {
  const [focus, setFocus] = useState(false);
  return (
    <section
      style={{ background: "linear-gradient(90deg, #F58120 0%, #FAD902 100%)" }}
      className={`bg-secondarylight pt-[30px] mb-[30px] lg:pt-[80px] lg:mb-[80px] text-white ${
        classes?.root ? classes.root : ""
      }`}
    >
      <div className="container">
        <div className="grid place-items-center">
          <div className="text-[20px] text-center lg:text-left font-bold mb-5">
            Study International’s Insights for Your Study Abroad Journey
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-[60px] lg:gap-[110px]">
            {dummaData?.map((item: any, i: any) => {
              return (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <div className="heading-one mb-2">
                    {/* <CountUp
                      start={focus ? 0 : undefined}
                      end={item?.count ?? 0}
                      duration={1}
                      redraw={true}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                          <VisibilitySensor
                            onChange={(isVisible: any) => {
                              if (isVisible) {
                                setFocus(true);
                              }
                            }}
                          >
                            <span>+</span>
                          </VisibilitySensor>
                        </div>
                      )}
                    </CountUp> */}

                    <div>{shortenLargeNumber(item.count, 2)}+</div>
                  </div>
                  <div>{item?.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownInfo;
