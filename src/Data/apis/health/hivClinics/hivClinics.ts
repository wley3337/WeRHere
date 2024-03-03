import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import {
  HIVClinicAPIReturn,
  HIVClinicsFeatureCamelCase,
} from "src/Data/apis/health/hivClinics/types"
import { toCamleCase } from "src/Data/utils/camelCaseKeys"

const hivClinicsUrl =
  "https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Health_WebMercator/MapServer/3/query?outFields=*&where=1%3D1&f=geojson"

export const hivClinicsApi = createApi({
  reducerPath: "hivClinicssApi",
  baseQuery: fetchBaseQuery({ baseUrl: hivClinicsUrl }),
  endpoints: (build) => ({
    getAllHIVClinics: build.query<HIVClinicsFeatureCamelCase[]>({
      query: () => "/",
      transformResponse: (rawResult: HIVClinicAPIReturn) => {
        return rawResult.features.map((feature) =>
          toCamleCase<typeof feature>(feature),
        )
      },
    }),
  }),
})

export const { useGetAllHIVClinicsQuery } = hivClinicsApi

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
