"use client";

import { useGetBlogsQuery } from "@/appstore/blog/blog_api";
import { useGetCategoriesQuery } from "@/appstore/category/category_api";
import useWindowDimensions from "@/hooks/use_window_dimensions";
import BlogCard from "@/modules/@common/blog_card";
import { LeadFormSection } from "@/modules/@common/lead_form_section";
import Spinner from "@/modules/@common/loading_spinner";
import Skeleton from "@/modules/@common/skeleton";
import { useEffect, useState } from "react";

const BlogList = () => {
  const { width } = useWindowDimensions();
  const mobile = width < 1024;
  const [cat, setCat] = useState("");
  const [limit, setLimit] = useState(7);
  const [page, setPage] = useState(1);
  const [moreData, setMoreData] = useState<any>([]);
  const { data: blogList, isLoading } = useGetBlogsQuery<any>({
    category: cat,
    page: page,
    limit: limit,
  });
  const { data: categories } = useGetCategoriesQuery<any>({
    page: 1,
    limit: 10,
  });

  const dataArray = blogList?.data;
  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
    setLimit((prev) => prev + 2);
  };

  useEffect(() => {
    if (moreData && moreData.length > 0) {
      if (cat !== "") {
        setMoreData(dataArray);
      } else {
        setMoreData((prev: any) => [...prev, ...dataArray]);
      }
    } else {
      setMoreData(dataArray);
    }
  }, [dataArray]);

  return (
    <section className="pt-[60px]">
      <div className="max-w-[1450px] mx-auto px-5">
        <div className="mb-8">
          <h1 className="mb-6">Study International Blogs</h1>
          <ul className="flex items-center flex-wrap gap-3">
            {categories?.data?.map((item: any, i: number) => {
              return (
                <li
                  onClick={() => {
                    setCat(item?.slug);
                    setLimit(6);
                  }}
                  key={i}
                  className={`px-[10px] py-[5px] bg-greylight rounded text-sm cursor-pointer hover:text-primary transition-all ${
                    cat == item?.slug ? "font-bold text-primary" : ""
                  }`}
                >
                  {item?.title}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="grid grid-cols-1fr lg:grid-cols-[1fr_330px] gap-[30px]">
          {cat ? (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] self-start">
                {moreData?.map((item: any, i: number) => {
                  return <BlogCard item={item} key={i} />;
                })}
              </div>
              {/* cat LoadMore */}
              {dataArray?.length > 5 && (
                <div
                  onClick={handleLoadMore}
                  className="flex col-span-4 justify-center mt-[40px]"
                >
                  <button
                    className={`btn btn-grey ${isLoading ? "disabled" : ""}`}
                  >
                    {isLoading && <Spinner height="20px" />}
                    <span>Load More</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px] mb-[30px]">
                  {new Array(8).fill(1).map((_, i) => {
                    return (
                      <div className="h-full" key={i}>
                        <Skeleton className={"h-full dark:!bg-neutral-800"} />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <>
                  <div>
                    {moreData?.length > 0 ? (
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_330px] gap-[30px] mb-[30px]">
                          {moreData
                            ?.slice(0, mobile ? 4 : 3)
                            ?.map((item: any, i: number) => {
                              if (i === 0) {
                                return (
                                  <div
                                    key={i}
                                    className="lg:col-span-2 lg:row-span-2"
                                  >
                                    <BlogCard
                                      classes={{
                                        title:
                                          "lg:text-[34px] lg:leading-[40px]",
                                        description: "lg:line-clamp-2",
                                        imageWrapper: "lg:h-[460px] ",
                                      }}
                                      item={item}
                                    />
                                  </div>
                                );
                              } else {
                                return (
                                  <div key={i}>
                                    <BlogCard
                                      item={item}
                                      classes={{
                                        description: "lg:hidden",
                                        imageWrapper: "lg:max-h-[186px] ",
                                      }}
                                    />
                                  </div>
                                );
                              }
                            })}
                        </div>

                        {moreData?.length > 0 && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                            {moreData.map((item: any, i: number) => {
                              return (
                                <BlogCard
                                  item={item}
                                  key={i}
                                  classes={{
                                    imageWrapper: "max-h-[350px]",
                                  }}
                                />
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="min-h-[300px] flex justify-center items-center">
                        <p className="text-3xl"> No blog found !</p>
                      </div>
                    )}
                    {moreData?.length > 6 && (
                      <div
                        onClick={handleLoadMore}
                        className="flex col-span-4 justify-center mt-[40px]"
                      >
                        <button
                          className={`btn btn-grey ${
                            isLoading ? "disabled" : ""
                          }`}
                        >
                          {isLoading && <Spinner height="20px" />}
                          <span> Load More</span>
                        </button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </>
          )}
          {blogList?.data?.length > 0 && (
            <div>
              <LeadFormSection isSmall />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
