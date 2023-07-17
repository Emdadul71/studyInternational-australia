import { staticAsset } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propTypes {
  data?: any;
}

const OfferCard = ({ data }: propTypes) => {
  return (
    <Link
      className="inline-flex flex-col h-full hover:text-inherit"
      href={`/services/${data?.slug}`}
    >
      <div className="w-full h-[250px] lg:h-[210px] mb-6 rounded-md">
        <Image
          src={staticAsset(
            data?.sectionHero?.featuredImage ||
              "/images/misc/image-placeholder-big.webp"
          )}
          width={370}
          height={208}
          alt={data?.sectionHero?.title}
          blurDataURL="/images/misc/avatar-placeholder-small.webp"
          className="w-full h-full object-cover rounded-t-md	"
        />
      </div>

      <h5 className="heading-five mb-[10px] block line-clamp-2 hover:text-primary transition-all">
        {data?.sectionHero?.title}
      </h5>
      <p className="line-clamp-3 mb-6">{data?.sectionHero?.shortDescription}</p>
      <button className="mt-auto btn btn-primary w-full text-secondary">
        Find out More
      </button>
    </Link>
  );
};

export default OfferCard;
