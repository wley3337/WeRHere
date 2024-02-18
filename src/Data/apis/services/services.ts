import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import {
  ServicesAPIReturn,
  ServicesFeatureCamelCase,
} from "src/Data/apis/services/types"
import { toCamleCase } from "src/Data/utils/camelCaseKeys"

const servicesUrl =
  "https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/6/query?outFields=*&where=1%3D1&f=geojson"

export const servicesApi = createApi({
  reducerPath: "servicessApi",
  baseQuery: fetchBaseQuery({ baseUrl: servicesUrl }),
  endpoints: (build) => ({
    getServices: build.query<ServicesFeatureCamelCase[]>({
      query: (query: Record<string, any>) => `${new URLSearchParams(query)}`,
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
