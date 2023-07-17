import { useGetBlogsQuery } from "@/appstore/blog/blog_api";
import BlogCard from "../blog_card";
import Skeleton from "../skeleton";
import useWindowDimensions from "@/hooks/use_window_dimensions";

interface propTypes {
  classes?: any;
}

const BlogSection = ({ classes }: propTypes) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 1024;
  const {
    data: blogList,
    isLoading,
    isError,
  } = useGetBlogsQuery<any>({
    page: 1,
    limit: isMobile ? 4 : 3,
  });

  if (isLoading && !isError) {
    return (
      <section className={`${classes?.root ? classes?.root : ""}`}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_450px] items-center mb-6 lg:mb-12">
            <h3 className="heading-two">Latest Posts</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-[30px]">
            {new Array(3).fill(1).map((_, i) => {
              return (
                <div className="h-full" key={i}>
                  <Skeleton className={"h-[230px] dark:!bg-neutral-800"} />
                  <Skeleton
                    className={"h-[140px] mt-[10px] dark:!bg-neutral-800"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  } else if (!isLoading && !isError && blogList?.data.length !== 0) {
    return (
      <section className={`${classes?.root ? classes?.root : ""}`}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_450px] items-center mb-6 lg:mb-12">
            <h3 className="heading-two">Latest Posts</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-[30px]">
            {blogList?.data?.map((item: any, i: number) => {
              return <BlogCard item={item} key={i} />;
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default BlogSection;
