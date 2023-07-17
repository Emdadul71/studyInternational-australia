import { apiSlice } from "../api_slice";

export const leadApi = apiSlice.injectEndpoints({
  endpoints: (build: any) => ({
    createLead: build.mutation({
      query: (data: any) => ({
        url: "/public/inquiry",
        method: "POST",
        body: data,
      }),
    }),
    createAppointment: build.mutation({
      query: (data: any) => ({
        url: "/public/inquiry",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateLeadMutation, useCreateAppointmentMutation } = leadApi;
