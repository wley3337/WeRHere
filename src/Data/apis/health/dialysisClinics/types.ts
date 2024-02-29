import { GenericFeatureCollectionReturn } from "src/Data/apis/genericTypes/genericFeatureApiReturn"

//HOURS: " Monday - Friday 8:30 am - 4:30 pm"
export interface DialysisClinicFeatureCamelCase {
  geometry: {
    type: "Point"
    coordinates: [number, number]
  }
  id: 1
  properties: {
    address: string
    city: string
    created: string | null
    creator: string | null
    edited: string | null
    editor: string | null
    gisId: string
    globalid: string
    hours: string
    latitude: number
    longitude: number
    marId: number
    objectid: number
    org: string
    phone: string
    program: string
    state: string
    ward: string
    xcoord: number
    ycoord: number
    zipcode: number
  }
  type: "Feature"
}
export interface DialysisClinicFeatureReturnType {
  geometry: {
    type: "Point"
    coordinates: [number, number]
  }
  id: 1
  properties: {
    ADDRESS: string
    CITY: string
    CREATED: string | null
    CREATOR: string | null
    EDITED: string | null
    EDITOR: string | null
    GIS_ID: string
    GLOBALID: string
    HOURS: string
    LATITUDE: number
    LONGITUDE: number
    MAR_ID: number
    OBJECTID: number
    ORG: string
    PHONE: string
    PROGRAM: string
    STATE: string
    WARD: string
    XCOORD: number
    YCOORD: number
    ZIPCODE: number
  }
  type: string
}

export type DialysisClinicsAPIReturn =
  GenericFeatureCollectionReturn<DialysisClinicFeatureReturnType>

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
