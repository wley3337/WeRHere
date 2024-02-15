import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import {
  ShelterReturnFeatureCamelCase,
  SheltersReturnType,
} from "src/Data/apis/shelters/types"
import { toCamleCase } from "src/Data/utils/camelCaseKeys"

const shelterUrl =
  "https://opendata.arcgis.com/datasets/87c5e68942304363a4578b30853f385d_25.geojson"

export const shelterApi = createApi({
  reducerPath: "sheltersApi",
  baseQuery: fetchBaseQuery({ baseUrl: shelterUrl }),
  endpoints: (build) => ({
    getAllShelters: build.query<ShelterReturnFeatureCamelCase[]>({
      query: () => "/",
      transformResponse: (rawResult: SheltersReturnType) => {
        return rawResult.features.map((feature) =>
          toCamleCase<typeof feature>(feature),
        )
      },
    }),
  }),
})

export const { useGetAllSheltersQuery } = shelterApi
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
