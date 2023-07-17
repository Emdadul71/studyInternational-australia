import { apiSlice } from "../api_slice";

export const blogApi = apiSlice.injectEndpoints({
  endpoints: (build: any) => ({
    getBlogs: build.query({
      query: ({ page = 1, limit = 10, category = "" }) => {
        return `/public/blogs?status=ACTIVE&category=${category}&page=${page}&limit=${limit}`;
      },
    }),
  }),
});

export const { useGetBlogsQuery } = blogApi;
