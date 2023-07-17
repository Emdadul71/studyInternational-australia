import { apiSlice } from "../api_slice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (build: any) => ({
    getCategories: build.query({
      query: ({ page = 1, limit = 10 }) => {
        return `/public/categories?page=${page}&limit=${limit}`;
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
