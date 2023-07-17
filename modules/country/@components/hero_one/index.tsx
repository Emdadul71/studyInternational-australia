import { staticAsset } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";

const CountryHeroOne = () => {
  return (
    <section
      className="pb-0"
      style={{
        background: `radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0) 0%, rgba(234, 247, 255, 0.5) 100%), radial-gradient(100% 100% at 0% 100%, rgba(234, 247, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF`,
      }}
    >
      <div className="container-extend">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
          <div className="max-w-[550px] mx-auto lg:mx-0 text-center lg:text-left py-5">
            <h1 className="heading-two mb-3">
              Where are you thinking of studying Abroad with Study
              International?
            </h1>
            <p className="text-grey lg:max-w-[450px]">
              A trusted and progressive partner in the global journey of every
              aspiring international student
            </p>
            <Link href="#" className="btn btn-secondary">
              Speak to an Expert
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src={staticAsset("/images/country/study-international.webp")}
              alt="Study International"
              width={690}
              height={560}
              blurDataURL="/images/misc/image-placeholder-big.webp"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryHeroOne;
