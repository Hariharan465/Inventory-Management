import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
  reducerPath: "UserApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  tagTypes: ['getAllConsumer', 'getConsumer'],
  endpoints: (builder) => ({
    registerConsumer: builder.mutation<any, any>({
      query: (obj) => ({
        url: "/consumer/register",
        method: "POST",
        body: obj,
        headers: {
          'Authorization': "Bearer " + localStorage.getItem("token"),
        },
      }),
      invalidatesTags: ["getAllConsumer"],
    }),

    getAllConsumer: builder.query<any, any>({
      query: (obj) => ({
        url: "/consumer/get-all",
        method: "GET",
        body: obj,
        headers: {
          'Authorization': "Bearer " + localStorage.getItem("token"),
        },
      }),
      providesTags: ["getAllConsumer"],
    }),

    deleteConsumer: builder.mutation<any, any>({
      query: (_id) => ({
        url: "/consumer/delete/"+_id,
        method: "DELETE",
        headers: {
         'Authorization': "Bearer " + localStorage.getItem("token"),
        },
      }),
      invalidatesTags: ["getAllConsumer"],
    }),

    getConsumers: builder.query<any, any>({
      query: (_id) => ({
        url: "/consumer/get/"+_id,
        method: "GET",

        headers: {
          'Authorization': "Bearer " + localStorage.getItem("token"),
        },
      }),
      providesTags: ["getConsumer"],
    }),

    updateConsumer: builder.mutation<any, any>({
      query: ({data, _id}) => ({
        url: "/consumer/update/" + _id,
        method: "PATCH",
        body: data,
        headers: {
          'Authorization': "Bearer " + localStorage.getItem("token"),
        },
      }),
        
      invalidatesTags: ["getAllConsumer" , "getConsumer"],
    }),
  }),
});

export const {
  useRegisterConsumerMutation,
  useGetAllConsumerQuery,
  useDeleteConsumerMutation,
  useGetConsumersQuery,
  useUpdateConsumerMutation
} = UserApi;
