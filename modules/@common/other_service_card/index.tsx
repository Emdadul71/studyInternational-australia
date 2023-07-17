import { staticAsset } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsArrowRight } from "react-icons/bs";

interface propTypes {
  classes?: {
    root?: string;
    title?: string;
    description?: string;
    imageWrapper?: string;
    image?: string;
  };
  data?: any;
}

const OtherServiceCard = ({ data, classes }: propTypes) => {
  return (
    <Link
      href={`${data?.slug}`}
      className="group grid grid-rows-[auto_1fr] bg-white hover:text-inherit hover:shadow-[0px_10px_30px_rgba(82,71,175,0.1)] transition-all flex flex-col rounded-md"
    >
      <div
        className={`block h-[210px] w-full ${
          classes?.imageWrapper ? classes.imageWrapper : ""
        }`}
      >
        <Image
          src={staticAsset(
            data?.imageSrc || "/images/misc/image-placeholder-big.webp"
          )}
          alt="Study International Logo"
          width={600}
          height={500}
          blurDataURL={staticAsset("/images/misc/logo.png")}
          placeholder="blur"
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="p-6 border rounded-b-md group-hover:border-transparent">
        <h3
          className={`text-[20px] leading-[28px] mb-2 line-clamp-2	 ${
            classes?.title ? classes.title : ""
          }`}
        >
          {data?.title}
        </h3>

        <div
          className={`line-clamp-2 text-grey ${
            classes?.description ? classes.description : ""
          }`}
        >
          {data?.description}
        </div>
      </div>
    </Link>
  );
};

export default OtherServiceCard;
