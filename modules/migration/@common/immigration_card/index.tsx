import { staticAsset } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propsTypes {
  data?: any;
}

const ImmigrationCard = ({ data }: propsTypes) => {
  return (
    <Link
      href="#"
      className="flex flex-col items-center justify-start py-[30px] px-4 bg-white hover:shadow-[0px_5px_15px_rgba(0,0,0,0.1)] transition-all rounded-md border-[1px]	border-greylight"
    >
      <div className="bg-secondary p-[13px] rounded-[10px] mb-4">
        <Image
          src={staticAsset(data?.iconSrc)}
          alt={data?.alt}
          width={34}
          height={34}
          blurDataURL={staticAsset("/images/misc/avatar-placeholder-small.webp")}
          placeholder="blur"
        />
      </div>
      <p className="text-primary font-bold text-lg leading-[24px] text-center mb-0  block">
        {data?.title}
      </p>
    </Link>
  );
};

export default ImmigrationCard;
