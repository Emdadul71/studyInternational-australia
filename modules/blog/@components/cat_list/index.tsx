"use client";

import { useGetBlogsQuery } from "@/appstore/blog/blog_api";
import { useGetCategoriesQuery } from "@/appstore/category/category_api";
import BlogCard from "@/modules/@common/blog_card";
import LeadFormSection from "@/modules/@common/lead_form_section";
import Spinner from "@/modules/@common/loading_spinner";
import Skeleton from "@/modules/@common/skeleton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BlogCatList = () => {
  const router = useRouter();
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const [moreData, setMoreData] = useState<any>([]);
  const { category_slug } = router.query;
  const [cat, setCat] = useState("");

  const { data: blogList, isLoading } = useGetBlogsQuery<any>({
    category: category_slug,
    page: page,
    limit: limit,
  });

  const { data: categories } = useGetCategoriesQuery<any>({
    page: page,
    limit: limit,
  });

  const dataArray = blogList?.data;
  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
    setLimit((prev) => prev + 2);
  };

  useEffect(() => {
    if (moreData && moreData.length > 0) {
      if (cat === category_slug) {
        setMoreData(dataArray);
      } else {
        setMoreData((prev: any) => [...prev, ...dataArray]);
      }
    } else {
      setMoreData(dataArray);
    }
  }, [dataArray]);
  const handlePush = (slug: any) => {
    router.push(`/blog/category/${slug}`);
    setCat(slug);
  };

  return (
    <section className="pt-[60px]">
      <div className="max-w-[1450px] mx-auto px-5">
        <div className="mb-8">
          <h1 className="mb-6">Category: {category_slug}</h1>
          <ul className="flex items-center flex-wrap gap-3">
            {categories?.data?.map((item: any, i: number) => {
              return (
                <li
                  onClick={() => handlePush(item?.slug)}
                  key={i}
                  className={`px-[10px] py-[5px] bg-greylight rounded text-sm cursor-pointer hover:text-primary transition-all ${
                    category_slug == item?.slug ? "font-bold text-primary" : ""
                  }`}
                >
                  {item?.title}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_330px] gap-[30px]">
          <div>
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] self-start">
                {new Array(4).fill(1).map((_, i) => {
                  return (
                    <div className="h-full" key={i}>
                      <Skeleton className={"h-[240px] dark:!bg-neutral-800"} />
                      <Skeleton
                        className={"h-[110px] mt-4 dark:!bg-neutral-800"}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] self-start">
                  {moreData?.map((item: any, i: number) => {
                    return <BlogCard item={item} key={i} />;
                  })}
                </div>
                {moreData?.length > 5 && (
                  <div
                    onClick={handleLoadMore}
                    className="flex col-span-4 justify-center mt-[40px]"
                  >
                    <button
                      className={`btn btn-grey ${isLoading ? "disabled" : ""}`}
                    >
                      {isLoading && <Spinner height="20px" />}
                      <span> Load More</span>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
          <div className="self-start">
            <LeadFormSection isSmall />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCatList;
