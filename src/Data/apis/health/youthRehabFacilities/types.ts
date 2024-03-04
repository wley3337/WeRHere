import { GenericFeatureCollectionReturn } from "src/Data/apis/genericTypes/genericFeatureApiReturn"

export interface YouthRehabFacilitiesCamelCase {
  features: [
    {
      geometry: {
        coordinates: [number, number]
        type: "Point"
      }
      id: number
      properties: {
        address: string
        created: "Yes" | null
        creator: string | null
        edited: number
        editor: string
        // gisId: "{ba15d20c-e813-40c7-a604-f87288b0e342}"
        gisId: string
        globalid: string
        latitude: number
        longitude: number
        marId: number
        name: string
        objectid: number
        // type can be single space " "
        type: string
        webLink: string
        xcoord: number
        ycoord: number
      }
      type: "Feature"
    },
  ]
  type: "FeatureCollection"
}

export interface YouthRehabFacilitiesReturnType {
  features: [
    {
      geometry: {
        coordinates: [number, number]
        type: "Point"
      }
      id: number
      properties: {
        ADDRESS: string
        CREATED: "Yes" | null
        CREATOR: string | null
        EDITED: number
        EDITOR: string
        // GIS_ID: "{BA15D20C-E813-40C7-A604-F87288B0E342}"
        GIS_ID: string
        GLOBALID: string
        LATITUDE: number
        LONGITUDE: number
        MAR_ID: number
        NAME: string
        OBJECTID: number
        // TYPE can be single space " "
        TYPE: string
        WEB_LINK: string
        XCOORD: number
        YCOORD: number
      }
      type: "Feature"
    },
  ]
  type: "FeatureCollection"
}

export type YouthRehabAPIReturn =
  GenericFeatureCollectionReturn<YouthRehabFacilitiesReturnType>

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
