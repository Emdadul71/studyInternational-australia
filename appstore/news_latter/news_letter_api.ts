import { apiSlice } from "@/appstore/api_slice";

export const newsletterApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    newslatterSubscription: build.mutation({
      query: (data) => ({
        url: "/public/subscribe",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useNewslatterSubscriptionMutation } = newsletterApi;
