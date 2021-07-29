import { rtkClient } from "./rtkQueryClient";

export interface CovidData {
  active: number;
  cases: number;
  deaths: number;
  recovered: number;
  tests: number;
  todayCases: number;
  todayDeaths: number;
  todayRecovered: number;
  updated: number;
  country: string;
}
export interface ChartData {
  country: string;
  province: string[];
  timeline: any;
}
export type CovidDataTableResponse = CovidData[];

// https://redux-toolkit.js.org/rtk-query/usage/code-splitting
const covidDataApi = rtkClient.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    // https://redux-toolkit.js.org/rtk-query/api/createApi#anatomy-of-an-endpoint
    getWorldData: build.query<CovidData, void>({
      query: () => "/all",
      //https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#customizing-query-responses-with-transformresponse
      //   transformResponse: (response: any) => response.data,
      //   providesTags: (result) =>
      //     result
      //       ? [
      //           ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
      //           { type: 'Posts', id: 'LIST' },
      //         ]
      //       : [{ type: 'Posts', id: 'LIST' }],
    }),
    getVnData: build.query<CovidData, void>({
      query: () => "/countries/vn",
    }),
    getDataTable: build.query<CovidDataTableResponse, void>({
      query: () => "/countries",
    }),
    getHistoricalData: build.query<ChartData, void>({
      query: () => "historical/vn",
    }),
  }),
});

export const {
  useGetWorldDataQuery,
  useGetVnDataQuery,
  useGetDataTableQuery,
  useGetHistoricalDataQuery,
} = covidDataApi;
