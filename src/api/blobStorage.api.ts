import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CurrentStateGet } from "../types/State";

// Define a service using a base URL and expected endpoints
export const blobStorageApi = createApi({
  reducerPath: "blobStorageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://lightnovelreaderserver.azurewebsites.net/api/",
  }),
  tagTypes: ["CurrentState"],
  endpoints: (builder) => ({
    getStatus: builder.query<CurrentStateGet, void>({
      query: () => `status?key=DavidSantos995sf**`,
      providesTags: ["CurrentState"],
    }),
    postStatus: builder.mutation<void, CurrentStateGet>({
      query: (body) => ({
        url: `status`,
        method: "POST",
        body: {
          ...body,
          key: "DavidSantos995sf**",
        },
      }),
      invalidatesTags: ["CurrentState"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetStatusQuery, usePostStatusMutation } = blobStorageApi;
