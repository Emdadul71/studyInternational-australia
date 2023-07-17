import React, { Fragment } from "react";
import ArticleCard from "../article_card";
import { useGetBlogsQuery } from "@/appstore/blog/blog_api";
import Skeleton from "../skeleton";

const ArticleSection = ({ classes }: any) => {
  const {
    data: blogList,
    isLoading,
    isError,
  } = useGetBlogsQuery<any>({
    page: 1,
    limit: 4,
  });

  if (isLoading && !isError) {
    return (
      <section className={`${classes?.root ? classes.root : ""}`}>
        <div className="container">
          <div>
            <h3 className="mb-5 lg:mb-7 text-center">
              Read More Insightful Articles
            </h3>
          </div>
          {new Array(4).fill(1).map((_, i) => {
            return (
              <Fragment key={i}>
                <div className="grid lg:grid-cols-[330px_1fr] gap-5 lg:gap-[30px]">
                  <Skeleton className={"h-[188px]"} />
                  <div>
                    <Skeleton className={"h-[32px] mb-2"} />
                    <Skeleton className={"h-[125px]"} />
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </section>
    );
  } else if (!isLoading && !isError && blogList?.data.length !== 0) {
    return (
      <section className={`${classes?.root ? classes.root : ""}`}>
        <div className="container">
          <h3 className="mb-5 lg:mb-7 text-center">
            Read More Insightful Articles
          </h3>

          {blogList?.data?.map((item: any, i: any) => {
            return (
              <Fragment key={i}>
                <ArticleCard item={item} key={i} />
                {i !== blogList?.data?.length - 1 && (
                  <div className="border-b my-4"></div>
                )}
              </Fragment>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default ArticleSection;
