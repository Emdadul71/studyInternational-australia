import ViewLink from "@/modules/@common/view_link";
import AboutImage from "@/modules/about_us/@components/about_image";
import Link from "next/link";
import { FiArrowDownRight, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import styles from "./landing.module.scss";

const dataServices = [
  {
    sl: "01",
    title: "Frontend Developer",
    description: "2 Open Roles",
  },
  {
    sl: "02",
    title: "UI Designer",
    description: "7 Open Roles",
  },
  {
    sl: "03",
    title: "UX Designer",
    description: "12 Open Roles.",
  },
  {
    sl: "04",
    title: "SEO Optimizer",
    description: "2 Open Roles",
  },
  {
    sl: "05",
    title: "JavaScript Developer",
    description: "1 Open Role",
  },
];

const CareerList = () => {
  return (
    <>
      <section className="pt-[40px] pb-[30px] lg:pt-[100px] lg:pb-[60px]">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_auto] gap-5 items-center">
            <div className="lg:max-w-[690px]">
              <h1 className="text-center lg:text-left">
                Join our team & let’s work together
              </h1>
            </div>
            <ViewLink title="View All Jobs" url="#" />
          </div>
        </div>
      </section>

      <AboutImage isShowTime={false} />

      <section>
        <div className="container">
          <h2 className="heading-one max-w-[450px] mb-[60px]">
            We’re Currently hiring
          </h2>

          <div>
            <ul>
              {dataServices?.map((item, i) => {
                return (
                  <li key={i}>
                    <Link
                      href="/career/details"
                      className={`${
                        styles.job_list
                      } text-base  md:text-lg lg:text-[28px] grid grid-cols-[auto_1fr_1fr_auto] gap-3 lg:gap-[50px] items-center cursor-pointer border-b py-4 lg:py-7 ${
                        i === 0 ? "border-t" : ""
                      } hover:text-inherit`}
                    >
                      <span className=" font-medium lg:mr-[20px]">
                        {item?.sl}
                      </span>
                      <div className="font-medium">{item?.title}</div>
                      <div className="">{item?.description}</div>
                      <div className="flex justify-end text-2xl text-grey overflow-hidden">
                        <div className={styles.arrow}>
                          <FiArrowRight className={styles.arrow_top} />
                          <FiArrowRight className={styles.arrow_bottom} />
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerList;
