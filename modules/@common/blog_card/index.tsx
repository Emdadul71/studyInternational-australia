import { excerpt, htmlParse } from "@/helpers/utils";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import styles from "./blog_card.module.scss";

interface propTypes {
  classes?: {
    root?: string;
    title?: string;
    description?: string;
    imageWrapper?: string;
    image?: string;
  };
  item?: any;
}

const BlogCard = ({ classes, item }: propTypes) => {
  return (
    <div className={styles.blog_card_wrapper}>
      <Link
        href={`/blog/${item?.slug}`}
        className="group hover:text-inherit h-full grid grid-rows-[auto_1fr]"
      >
        <div
          className={`block overflow-hidden w-full mb-6 max-h-[400px] ${
            classes?.imageWrapper ? classes.imageWrapper : ""
          }`}
        >
          <Image
            src={item?.featureImage}
            alt={item?.title}
            width={600}
            height={500}
            blurDataURL="/images/misc/image-placeholder-big.webp"
            placeholder="blur"
            className="w-full h-full object-cover rounded-md scale-100	group-hover:scale-110 transition-all duration-1000"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-sm mb-2">
            <span className="block text-black font-bold">Admin</span>
            <span className="w-[6px] h-[6px] rounded-full bg-grey block"></span>
            <span>
              {item?.publishedAt && moment(item?.publishedAt).format("LL")}
            </span>
          </div>

          <h3
            className={`heading-five mb-2 transition-all line-clamp-2 ${
              classes?.title ? classes.title : ""
            }`}
          >
            {item?.title}
          </h3>

          <div
            className={`line-clamp-2 text-grey mb-5 ${
              classes?.description ? classes.description : ""
            }`}
          >
            {excerpt(item?.content, 400)}
          </div>

          <div className="flex items-center gap-4 mt-auto">
            <span
              className={`${styles.left_arrow} inline-block w-[22px] h-[2px] bg-black`}
            ></span>
            <span
              className={`${styles.continue_reading} inline-block text-sm text-black font-bold`}
            >
              CONTINUE READING
            </span>
            <span className={`${styles.right_arrow}`}>
              <BsArrowRight className="inline-block text-2xl" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
