import Faq from "@/modules/faq";
import Image from "next/image";
import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const faqData = {
  faq: [
    {
      id: 1,
      question: "Study Visa",
      answer:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    },
    {
      id: 2,
      question: "Cost & Expenses",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      id: 3,
      question: "Education System",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      id: 4,
      question: "Popular Courses",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      id: 5,
      question: "Student Visa Process",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
  ],
};

const HomeTab = () => {
  const [view, setView] = useState(1);
  const [animationParent, enableAnimations] = useAutoAnimate();

  return (
    <section>
      <div className="container">
        <div className="max-w-[930px] w-full mx-auto">
          <div className="flex justify-center ">
            <div
              className={`flex justify-center w-full   rounded-l-md ${
                view === 1
                  ? "bg-primary text-white "
                  : "bg-[#FEFBF0] hover:bg-secondary transition-all"
              }`}
            >
              <button
                className="btn  w-full text-xl"
                onClick={() => setView(1)}
              >
                Study
              </button>
            </div>
            <div
              className={`flex justify-center w-full rounded-r-md ${
                view === 2
                  ? "bg-primary text-white"
                  : "bg-[#FEFBF0] hover:bg-secondary transition-all"
              }`}
            >
              <button className="btn w-full text-xl" onClick={() => setView(2)}>
                Migration
              </button>
            </div>
          </div>
          <div>
            <div ref={animationParent}>
              {view === 1 && (
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
                    <div className="self-start pr-[15px]">
                      <Image
                        src="/images/home/study-tab.png"
                        alt="home study tab"
                        width={450}
                        height={334}
                        blurDataURL="/images/misc/image-placeholder-big.webp"
                        placeholder="blur"
                        className="w-full h-full object-cover rounded-md scale-100	group-hover:scale-110 transition-all duration-1000"
                      />
                    </div>
                    <div>
                      <h5 className="mb-5 pl-1 mt-4 lg:mt-0">
                        I need help with my study plan
                      </h5>
                      <Faq data={faqData} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div ref={animationParent}>
              {view === 2 && (
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
                    <div className="self-start pr-[15px]">
                      <Image
                        src="/images/home/study-tab.png"
                        alt="home study tab"
                        width={450}
                        height={334}
                        blurDataURL="/images/misc/image-placeholder-big.webp"
                        placeholder="blur"
                        className="w-full h-full object-cover rounded-md scale-100	group-hover:scale-110 transition-all duration-1000"
                      />
                    </div>
                    <div>
                      <h5 className="mb-5 pl-1 mt-4 lg:mt-0">
                        I need help with my Migration plan
                      </h5>
                      <Faq data={faqData} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTab;
