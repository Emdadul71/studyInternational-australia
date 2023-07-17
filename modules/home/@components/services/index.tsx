import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import styles from "./service.module.scss";
import ViewLink from "@/modules/@common/view_link";
import { staticAsset } from "@/helpers/utils";
import dataServices from "@/fakedata/services-data.json";

const Services = () => {
  const [index, setIndex] = useState<any>(0);

  return (
    <section>
      <div className="container-extend">
        <div className="grid grid-cols-1 lg:grid-cols-[330px_1fr_auto] gap-4 lg:gap-[30px] items-center mb-5 lg:mb-[60px]">
          <h2 className="heading-one">
            <span className="block text-lg">Services</span>
            <span className="block">
              What <span className="inline lg:block">We Offer</span>
            </span>
          </h2>
          <div className="text-grey text-[20px]">
            Study International takes pride in our step-by-step comprehensive
            support for prospective and current students seeking higher
            education and/or migration opportunities in Australia.
          </div>
          <ViewLink title="View All Services" url="/services" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-[30px]">
          <div className={`${styles.image_wrapper} flex items-center`}>
            {dataServices?.map((itm, i) => {
              return (
                <Image
                  key={i}
                  src={staticAsset(
                    itm?.imageSrc ||
                      "/images/services/education-counselling.webp"
                  )}
                  alt="Study International Logo"
                  width={330}
                  height={400}
                  blurDataURL={staticAsset(
                    "/images/services/education-counselling.webp"
                  )}
                  placeholder="blur"
                  className={`${styles.service_image} ${
                    index === i ? styles.active : ""
                  }`}
                />
              );
            })}
          </div>

          <div>
            <ul>
              {dataServices?.map((item, i) => {
                return (
                  <li
                    onMouseOver={() => setIndex(i)}
                    onMouseDown={() => setIndex("")}
                    key={i}
                  >
                    <Link
                      href={`/services/${item?.slug}`}
                      className={`${
                        styles.service_list
                      } group grid grid-cols-1 lg:grid-cols-[auto_255px_1fr_auto] gap-2 lg:gap-[40px] items-center cursor-pointer border-b py-4 hover:text-inherit ${
                        i === 0 ? "border-t" : ""
                      } ${index === i ? styles.active : ""}`}
                    >
                      <span className={`text-[28px] font-medium ${styles.sl}`}>
                        {item?.sl}
                      </span>
                      <div
                        className={`${styles.title} text-[22px] font-medium leading-[35px]`}
                      >
                        {item?.title}
                      </div>
                      <div>{item?.description}</div>

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
      </div>
    </section>
  );
};

export default Services;
