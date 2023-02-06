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
    baseUrl: "https://shazam-core.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "f2e59ef060msh659123c26e8e3a0p14c323jsnf57fde9cfc1d"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "v1/charts/world" }),
    getSongsbyGenre: builder.query({
      query: (genre) => `v1/charts/genre-world?genre_code=${genre}`,
    }),
    getSongsbyCountry: builder.query({
      query: (countryCode) => `v1/charts/country?country_code=${countryCode}`,
    }),
    getSongsbySearch: builder.query({
      query: (searchTerm) =>
        `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `v2/artists/details?artist_id=${artistId}`,
    }),
  }),
});

export const {
  useGetSongsbyCountryQuery,
  useGetSongsbyGenreQuery,
  useGetTopChartsQuery,
  useGetSongsbySearchQuery,
  useGetArtistDetailsQuery,
} = shazamCoreApi;
