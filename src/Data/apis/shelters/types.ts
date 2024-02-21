import { GenericFeatureCollectionReturn } from "src/Data/apis/genericTypes/genericFeatureApiReturn"

export interface ShelterReturnFeatureCamelCase {
  geometry: {
    x: number
    y: number
  }
  id: number
  properties: {
    address: string
    agesServed: string
    alreadyPublicInformation: "yes" | null
    city: string
    created: "yes" | null
    creator: "yes" | null
    dgsConfirmed: "yes" | null
    dhsConfirmed: "yes" | null
    edited: "yes" | null
    editor: "yes" | null
    gisId: string
    globalid: string
    howToAccess: string
    lastUpdatedByDhs: number
    latitude: number
    lgbtqFocused: "yes" | null
    longitude: number
    marId: string
    name: string
    numberOfBeds: number
    objectid: number
    onSiteMedicalClinic: "yes" | null
    ownerRenter: string
    provider: string
    publishToOdp: "yes" | null
    state: string
    status: string
    subtype: string
    type: string
    ward: string
    webUrl: string
    xcoord: string
    ycoord: string
    zipcode: string
  }
  type: "Feature"
}
export interface ShelterReturnFeature {
  geometry: {
    coordinates: [number, number]
    type: string
  }
  id: number
  properties: {
    ADDRESS: string
    AGES_SERVED: string
    ALREADY_PUBLIC_INFORMATION: "Yes" | null
    CITY: string
    CREATED: "Yes" | null
    CREATOR: "Yes" | null
    DGS_CONFIRMED: "Yes" | null
    DHS_CONFIRMED: "Yes" | null
    EDITED: "Yes" | null
    EDITOR: "Yes" | null
    GIS_ID: string
    GLOBALID: string
    HOW_TO_ACCESS: string
    LAST_UPDATED_BY_DHS: number
    LATITUDE: number
    LGBTQ_FOCUSED: "Yes" | null
    LONGITUDE: number
    MAR_ID: string
    NAME: string
    NUMBER_OF_BEDS: number
    OBJECTID: number
    ON_SITE_MEDICAL_CLINIC: "Yes" | null
    OWNER_RENTER: string
    PROVIDER: string
    PUBLISH_TO_ODP: "Yes" | null
    STATE: string
    STATUS: string
    SUBTYPE: string
    TYPE: string
    WARD: string
    WEB_URL: string
    XCOORD: string
    YCOORD: string
    ZIPCODE: string
  }
  type: "Feature"
}

export type ShelterAPIReturn =
  GenericFeatureCollectionReturn<ShelterReturnFeature>

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
