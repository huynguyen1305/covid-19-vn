import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks

// https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery
const baseQuery = fetchBaseQuery({
  baseUrl: "https://disease.sh/v3/covid-19/",
  //   prepareHeaders: Handle header
});

export const rtkClient = createApi({
  baseQuery: baseQuery,
  tagTypes: ["CovidData"],
  reducerPath: "rtkClient",
  endpoints: () => ({}),
});
