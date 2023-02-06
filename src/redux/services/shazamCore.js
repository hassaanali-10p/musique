import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f2e59ef060msh659123c26e8e3a0p14c323jsnf57fde9cfc1d",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

// fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "f2e59ef060msh659123c26e8e3a0p14c323jsnf57fde9cfc1d"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
    getSongsbyCountry: builder.query({
      query: (countryCode) => `/charts/country?country_code=${countryCode}`,
    }),
    getSongsbySearch: builder.query({
      query: (searchTerm) =>
        `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
  }),
});

export const {
  useGetSongsbyCountryQuery,
  useGetTopChartsQuery,
  useGetSongsbySearchQuery,
} = shazamCoreApi;
