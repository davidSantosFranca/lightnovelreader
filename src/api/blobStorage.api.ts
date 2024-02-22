import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CurrentState } from "../types/State";

// Define a service using a base URL and expected endpoints
export const blobStorageApi = createApi({
  reducerPath: "blobStorageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/blobApi",
  }),
  tagTypes: ["CurrentState"],
  endpoints: (builder) => ({
    getCurrentState: builder.query<CurrentState, void>({
      query: () => `status?key=DavidSantos995sf**`,
      providesTags: ["CurrentState"],
    }),
    postStatus: builder.mutation<void, CurrentState>({
      query: (body) => ({
        url: `status`,
        method: "POST",
        body: {
          ...body,
          key: "DavidSantos995sf**",
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCurrentStateQuery, usePostStatusMutation } =
  blobStorageApi;
