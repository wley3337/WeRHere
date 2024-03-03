import { GenericFeatureCollectionReturn } from "src/Data/apis/genericTypes/genericFeatureApiReturn"

export interface HIVClinicsFeatureCamelCase {
  geometry: {
    coordinates: [number, number]
    type: "Point"
  }
  id: number
  properties: {
    address: string
    created: "yes" | null
    creator: string | null
    edited: "yes" | null
    editor: string | null
    gisId: string
    globalid: string // uuid inside of  "{}"
    marId: string
    name: string
    objectid: number
    services: string
    ward: string
    xcoord: number
    ycoord: number
    zipcode: string
  }
  type: "Feature"
}

export interface HIVClinicsFeatureReturnType {
  geometry: {
    coordinates: [number, number]
    type: "Point"
  }
  id: number
  properties: {
    ADDRESS: string
    CREATED: "Yes" | null
    CREATOR: string | null
    EDITED: "Yes" | null
    EDITOR: string | null
    GIS_ID: string
    GLOBALID: string
    MAR_ID: string
    NAME: string
    OBJECTID: number
    SERVICES: string
    WARD: string
    XCOORD: number
    YCOORD: number
    ZIPCODE: string
  }
  type: "Feature"
}
export type HIVClinicAPIReturn =
  GenericFeatureCollectionReturn<HIVClinicsFeatureReturnType>

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
