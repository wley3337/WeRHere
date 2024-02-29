import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import {
  DialysisClinicFeatureCamelCase,
  DialysisClinicsAPIReturn,
} from "src/Data/apis/health/dialysisClinics/types"
import { toCamleCase } from "src/Data/utils/camelCaseKeys"

const dialysisClinicsUrl =
  "https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Health_WebMercator/MapServer/10/query?outFields=*&where=1%3D1&f=geojson"

export const dialysisClinicsApi = createApi({
  reducerPath: "dialysisClinicssApi",
  baseQuery: fetchBaseQuery({ baseUrl: dialysisClinicsUrl }),
  endpoints: (build) => ({
    getAllDialysisClinics: build.query<DialysisClinicFeatureCamelCase[]>({
      query: () => "/",
      transformResponse: (rawResult: DialysisClinicsAPIReturn) => {
        return rawResult.features.map((feature) =>
          toCamleCase<typeof feature>(feature),
        )
      },
    }),
  }),
})

export const { useGetAllDialysisClinicsQuery } = dialysisClinicsApi

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
