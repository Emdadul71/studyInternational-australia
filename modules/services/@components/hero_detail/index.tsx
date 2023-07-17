import Image from "next/image";
import Link from "next/link";
import styles from "./hero_detail.module.scss";
import { staticAsset } from "@/helpers/utils";

interface propTypes {
  classes?: {
    root?: string;
  };
  data?: any;
}

const ServiceHeroDetail = ({ classes, data }: propTypes) => {
  return (
    <section
      className={`${
        styles.wrapper
      } py-10 lg:py-[100px] bg-bluelight mb-10 lg:mb-[80px] ${
        classes?.root ? classes.root : ""
      }`}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-5 lg:gap-[40px] items-center">
          <div className="lg:pr-[150px]">
            <h1 className="mb-3">{data?.data?.sectionHero?.title}</h1>
            <p className="mb-7">{data?.data?.sectionHero?.shortDescription}</p>
            <Link href="/counsellors" className="btn btn-secondary">
              Speak to an Expert
            </Link>
          </div>
          <div className={styles.imageWrapper}>
            <div className="wfull h-[390px] relative">
              <div className="w-full h-full absolute lg:top-[20px] lg:left-[20px] bg-secondary z-10 blur-[2.5px]"></div>

              <div className="absolute left-[-25px] top-[-25px]">
                <Image
                  src={staticAsset("/images/misc/ornament.png")}
                  alt={data?.data?.sectionHero?.title}
                  width={56}
                  height={54}
                />
              </div>
              <Image
                src={
                  data.data.sectionHero
                    ? staticAsset(data?.data?.sectionHero?.featuredImage)
                    : "/images/misc/image-placeholder-big.webp"
                }
                alt={data?.data?.sectionHero?.title}
                width={500}
                height={450}
                blurDataURL={"/images/misc/image-placeholder-big.webp"}
                placeholder="blur"
                className="w-full h-full object-cover relative rounded z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroDetail;
