import { apiSlice } from "@/appstore/api_slice";

export const participantApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createParticipant: build.mutation({
      query: (data) => ({
        url: "/public/participant",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateParticipantMutation } = participantApi;
