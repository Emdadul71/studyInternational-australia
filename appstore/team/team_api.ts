import { apiSlice } from "../api_slice";

export const teamApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getTeam: build.query({
      query: ({ page, limit }) => {
        return `/public/team?page=${page}&limit=${limit}`;
      },
    }),
  }),
});

export const { useGetTeamQuery } = teamApi;
