import { rtkClient } from "./rtkQueryClient";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
type PostsResponse = Post[];

// https://redux-toolkit.js.org/rtk-query/usage/code-splitting
const postApi = rtkClient.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    // https://redux-toolkit.js.org/rtk-query/api/createApi#anatomy-of-an-endpoint
    getPosts: build.query<PostsResponse, void>({
      query: () => "/posts",
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
  }),
});

export const { useGetPostsQuery } = postApi;
