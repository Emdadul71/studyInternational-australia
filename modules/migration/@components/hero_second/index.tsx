import { staticAsset } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MigrationHeroSecond = () => {
  return (
    <section className="py-8 lg:py-[50px] mb-8 lg:mb-[80px] bg-bluelight">
      <div className="container-extend">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="mb-3 text-primary">
              Employment prospects in the UK
            </h1>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src={staticAsset("/images/country/employment-prospects.webp")}
              alt="Study International"
              width={690}
              height={560}
              blurDataURL={staticAsset(
                "/images/misc/image-placeholder-big.webp"
              )}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationHeroSecond;
