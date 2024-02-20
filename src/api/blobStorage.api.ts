import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CurrentStateGet } from "../types/State";

// Define a service using a base URL and expected endpoints
export const blobStorageApi = createApi({
  reducerPath: "blobStorageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/blobApi",
  }),
  tagTypes: ["CurrentState"],
  endpoints: (builder) => ({
    getCurrentState: builder.query<CurrentStateGet, void>({
      query: () => `current?key=DavidSantos995sf**`,
      providesTags: ["CurrentState"],
    }),
    getChapterStatus: builder.query<CurrentStateGet, string>({
      query: (chapterTitle) =>
        `status?key=DavidSantos995sf**&chapterTitle=${chapterTitle}`,
      providesTags: (s) => {
        if (!s) return ["CurrentState"];
        return [{ type: "CurrentState", key: s.chapterTitle }];
      },
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
      invalidatesTags: (_a, _b, c) => {
        if (!c) return ["CurrentState"];
        return [{ type: "CurrentState", key: c.chapterTitle }];
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetChapterStatusQuery,
  useGetCurrentStateQuery,
  usePostStatusMutation,
} = blobStorageApi;
