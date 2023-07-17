import { staticAsset } from "@/helpers/utils";
import Image from "next/image";
import React from "react";

interface propTypes {
  data?: any;
}
const AwardCard = ({ data }: propTypes) => {
  return (
    <div className="border-[6px] p-2">
      <div className="w-full h-[449px]">
        <Image
          src={staticAsset(data?.imgSrc)}
          width={408}
          height={449}
          alt="Awards"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AwardCard;
