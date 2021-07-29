import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ServerDataResponse {
  tableDataProvince: [];
  record: string;
  updatedTime: string;
  lastestNews: string;
  totalCases: string;
  totalCasesToday: string;
  timelineProvince: [];
  timeLastestNews: string;
}

// https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery
const baseQuery = fetchBaseQuery({
  baseUrl: "https://admin-page-api.herokuapp.com/api",
  //   prepareHeaders: Handle header
});

export const serverDataApi = createApi({
  baseQuery: baseQuery,
  tagTypes: ["ServerData"],
  reducerPath: "serverData",
  endpoints: (build) => ({
    getDataCovid: build.query<ServerDataResponse, void>({
      query: () => "covidapp",
    }),
  }),
});

export const { useGetDataCovidQuery } = serverDataApi;
