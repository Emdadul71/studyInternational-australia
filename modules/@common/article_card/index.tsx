import { excerpt, htmlParse } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propTypes {
  item?: any;
}
const ArticleCard = ({ item }: propTypes) => {
  return (
    <Link href={`/blog/${item?.slug}`} className="hover:text-inherit group">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[330px_1fr] gap-5 lg:gap-[30px]">
        <div className="w-full max-h-[400px] overflow-hidden">
          <Image
            src={
              item?.featureImage || "/images/misc/image-placeholder-big.webp"
            }
            alt={item?.title}
            width={350}
            height={200}
            blurDataURL="/images/misc/image-placeholder-big.webp"
            placeholder="blur"
            className="rounded-md h-full  w-full object-cover scale-100 group-hover:scale-110 transition-all duration-1000"
          />
        </div>
        <div>
          <h3 className="heading-four group-hover:text-primary mb-3 line-clamp-2	lg:line-clamp-1">
            {item?.title}
          </h3>
          {item?.content && (
            <div className="line-clamp-6">{excerpt(item?.content, 620)}</div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
