import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import {
  ServicesAPIReturn,
  ServicesFeatureCamelCase,
} from "src/Data/apis/services/types"
import { toCamleCase } from "src/Data/utils/camelCaseKeys"

const servicesUrl =
  "https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/6/"

export const servicesApi = createApi({
  reducerPath: "servicessApi",
  baseQuery: fetchBaseQuery({ baseUrl: servicesUrl }),
  endpoints: (build) => ({
    getServices: build.query<ServicesFeatureCamelCase[]>({
      query: (query: Record<string, any>) => {
        const baseEntries = [
          // this is what the query param should look like.
          // It should not be all caps like the website.
          // descriptive fields are not partial search, they're exact match
          // ["where", "BORROW_MATERIALS='Yes'"],
          // this is what no filter looks like
          ["where", "1=1"],
          // returns all fields of a feature
          ["outFields", "*"],
          ["outSR", "4326"],
          ["f", "json"],
        ]

        const search = new URLSearchParams(baseEntries)
        return `query?${search.toString()}`
      },
      transformResponse: (rawResult: ServicesAPIReturn) => {
        return rawResult.features.map((feature) =>
          toCamleCase<typeof feature>(feature),
        )
      },
    }),
  }),
})

export const { useGetServicesQuery } = servicesApi
/* This file is part of WeRHere.

WeRHere is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

WeRHere is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with WeRHere.  If not, see <https://www.gnu.org/licenses/>. */
