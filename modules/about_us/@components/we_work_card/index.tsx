import Image from "next/image";
import React from "react";

interface propTypes {
  classes?: {
    root?: string;
  };
  isSmall?: boolean;
  item?: any;
}

const WeWorkCard = ({ classes, isSmall, item }: propTypes) => {
  return (
    <div className="card_parent">
      <div className="w-full h-[363px] relative">
        <Image
          src={item?.profileImage}
          width={330}
          height={363}
          alt="How We work"
          className="w-full h-full object-cover"
        />
        <div className="w-full h-full absolute top-0 left-0 team_overley"></div>
      </div>
      <h3 className="mt-6 heading-five">{item?.level?.name}</h3>
      <p className="m-0 text-[20px] leading-[28px]">{item?.name}</p>
    </div>
  );
};

export default WeWorkCard;
