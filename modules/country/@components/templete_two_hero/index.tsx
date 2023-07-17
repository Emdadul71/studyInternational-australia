import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface propTypes {
  classes?: {
    root?: string;
  };
  data?: any;
}

const TempleteTwoHero = ({ classes, data }: propTypes) => {
  const router = useRouter();
  const country_slug = router?.query?.country_slug;

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
                <Link href="/home">Home</Link>
              </li>
              <li>
                <div className="w-[8px] h-[2px] bg-grey mt-[2px]"></div>
              </li>
              <li>
                <Link href="/country">Country</Link>
              </li>

              <li>
                <div className="w-[8px] h-[2px] bg-grey mt-[2px]"></div>
              </li>
              <li>{country_slug}</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="container relative">
          <div className="max-w-[850px] mx-auto relative mt-[-150px] lg:mt-[-320px] block">
            <div className="absolute w-full h-full top-0 left-0 service_hero_overley rounded-[10px]"></div>
            <div className="w-full h-[478px]">
              <Image
                src={data?.imgSrc || `/images/misc/image-placeholder-big.webp`}
                width={850}
                height={478}
                alt={data?.alt}
                blurDataURL="/images/misc/image-placeholder-big.webp"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TempleteTwoHero;
