import { staticAsset } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface propTypes {
  classes?: {
    root?: string;
  };
  data?: any;
}

const ServiceNewHero = ({ classes, data }: propTypes) => {
  return (
    <>
      <section
        className={`py-10 lg:pt-[80px] pb-[140px] lg:pb-[280px] bg-bluelight mb-10 lg:mb-[80px] ${
          classes?.root ? classes.root : ""
        }`}
      >
        <div className="container">
          <div className="max-w-[1030px] mx-auto">
            <h1 className="text-center mb-3 heading-two">{data?.title}</h1>

            <ul className="flex justify-center items-center gap-2">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <div className="w-[8px] h-[2px] bg-grey mt-[2px]"></div>
              </li>
              <li>{data?.slug}</li>
            </ul>
          </div>
          {data?.slug == "study-in-melbourne" && (
            <div className="max-w-[850px] w-full mx-auto">
              <p className="text-center mt-3 mb-0">
                Experience academic excellence, cultural vibrancy, and abundant
                opportunities in Australia's cosmopolitan city. Unleash your
                potential and thrive in Melbourne's diverse and innovative
                educational landscape.
              </p>
            </div>
          )}
          {data?.slug == "study-in-sydney" && (
            <div className="max-w-[850px] w-full mx-auto">
              <p className="text-center mt-3 mb-0">
                Thrive in a multicultural city with prestigious universities,
                diverse courses, and abundant opportunities. Embrace a
                transformative educational experience in vibrant Sydney.
              </p>
            </div>
          )}
          {data?.slug == "study-in-brisbane" && (
            <div className="max-w-[850px] w-full mx-auto">
              <p className="text-center mt-3 mb-0">
                Embrace a vibrant academic atmosphere, multiculturalism, and a
                relaxed lifestyle in Queensland's capital. Discover endless
                opportunities for growth and a warm community for international
                students.
              </p>
            </div>
          )}
          {data?.slug == "study-in-adelaide" && (
            <div className="max-w-[850px] w-full mx-auto">
              <p className="text-center mt-3 mb-0">
                Experience academic excellence, affordability, and a vibrant
                cultural scene in South Australia's capital. Embrace a welcoming
                community and endless opportunities for growth.
              </p>
            </div>
          )}
          {data?.slug == "study-in-perth" && (
            <div className="max-w-[850px] w-full mx-auto">
              <p className="text-center mt-3 mb-0">
                Discover academic excellence, natural beauty, and a vibrant
                lifestyle in Western Australia's capital. Embrace diverse
                opportunities and a welcoming community for international
                students
              </p>
            </div>
          )}
          {data?.slug == "study-in-canberra" && (
            <div className="max-w-[850px] w-full mx-auto">
              <p className="text-center mt-3 mb-0">
                Explore academic excellence, government hub, and cultural
                attractions in Australia's capital city. Experience a unique
                educational environment with diverse opportunities for growth.
              </p>
            </div>
          )}
          {data?.slug == "study-in-gold-coast" && (
            <div className="max-w-[850px] w-full mx-auto">
              <p className="text-center mt-3 mb-0">
                Embrace a vibrant coastal city with renowned institutions, a
                stunning environment, and diverse industry opportunities.
                Experience a balanced lifestyle while pursuing your educational
                goals.
              </p>
            </div>
          )}
        </div>
      </section>
      <section>
        <div className="container relative">
          <div className="max-w-[850px] mx-auto relative mt-[-150px] lg:mt-[-320px] block">
            <div className="absolute w-full h-full top-0 left-0 service_hero_overley rounded-[10px]"></div>
            <div className="w-full lg:h-[478px]">
              <Image
                src={staticAsset(
                  data?.featuredImage ||
                    "/images/misc/image-placeholder-big.webp"
                )}
                width={850}
                height={478}
                alt={data?.title}
                blurDataURL={staticAsset(
                  "/images/misc/image-placeholder-big.webp"
                )}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceNewHero;
