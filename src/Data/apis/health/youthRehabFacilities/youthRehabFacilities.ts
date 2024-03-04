import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import {
  YouthRehabAPIReturn,
  YouthRehabFacilitiesCamelCase,
} from "src/Data/apis/health/youthRehabFacilities/types"
import { toCamleCase } from "src/Data/utils/camelCaseKeys"

const youthRehabFacilitiesUrl =
  "https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Safety_WebMercator/MapServer/0/query?outFields=*&where=1%3D1&f=geojson"

export const youthRehabFacilitiesApi = createApi({
  reducerPath: "youthRehabFacilitiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: youthRehabFacilitiesUrl }),
  endpoints: (build) => ({
    getAllYouthRehabFacilities: build.query<YouthRehabFacilitiesCamelCase[]>({
      query: () => "/",
      transformResponse: (rawResult: YouthRehabAPIReturn) => {
        return rawResult.features.map((feature) =>
          toCamleCase<typeof feature>(feature),
        )
      },
    }),
  }),
})

export const { useGetAllYouthRehabFacilitiesQuery } = youthRehabFacilitiesApi

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
