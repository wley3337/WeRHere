/*
 * example of feature data
 *    {
 *       "attributes": {
 *          "OBJECTID": 1,
 *          "OWNER_RENTER": "Catholic Charities",
 *          "PROVIDER": "Catholic Charities",
 *          "ADDRESS": "6010 Georgia Ave., NW",
 *          "CITY": "Washington",
 *          "STATE": "DC",
 *          "LATITUDE": 38.96335141,
 *          "LONGITUDE": -77.02830252,
 *          "WARD": "Ward 4",
 *          "TYPE": "Low Barrier",
 *          "SUBTYPE": "Women",
 *          "STATUS": "Active",
 *          "NUMBER_OF_BEDS": 25,
 *          "ON_SITE_MEDICAL_CLINIC": null,
 *          "DGS_CONFIRMED": null,
 *          "DHS_CONFIRMED": "Yes",
 *          "ALREADY_PUBLIC_INFORMATION": "Yes",
 *          "LAST_UPDATED_BY_DHS": 1510722000000,
 *          "PUBLISH_TO_ODP": "Yes",
 *          "AGES_SERVED": "18+",
 *          "HOW_TO_ACCESS": "Show Up and/or Call Shelter Hotline (311)",
 *          "LGBTQ_FOCUSED": null,
 *          "XCOORD": "397547.11",
 *          "YCOORD": "143938.2",
 *          "NAME": "Nativity Shelter for Women",
 *          "ZIPCODE": "20011",
 *          "WEB_URL": "https://www.catholiccharitiesdc.org/nativity/",
 *          "MAR_ID": "308177",
 *          "GIS_ID": "HomelessShelterPt_1",
 *          "GLOBALID": "{453EC7E8-81EB-4C02-B866-78996813ABD2}",
 *          "CREATOR": null,
 *          "CREATED": null,
 *          "EDITOR": null,
 *          "EDITED": null
 *       },
 *       "geometry": {
 *          "x": -77.02830482074451,
 *          "y": 38.963358873102905
 *       }
 *    }
 *
 * */
export interface ShelterReturnFeatureCamelCase {
  properties: {
    objectid: number
    ownerRenter: string
    provider: string
    address: string
    city: string
    state: string
    latitude: number
    longitude: number
    ward: string
    type: string
    subtype: string
    status: string
    numberOfBeds: number
    onSiteMedicalClinic: string | null
    dgsConfirmed: null
    dhsConfirmed: string
    alreadyPublicInformation: string
    lastUpdatedByDhs: number
    publishToOdp: string
    agesServed: string
    howToAccess: string
    lgbtqFocused: string | null
    xcoord: string
    ycoord: string
    name: string
    zipcode: string
    webUrl: string
    marId: string
    gisId: string
    globalid: string // "{453ec7e8-81eb-4c02-b866-78996813abd2}",
    creator: string | null
    created: string | null
    editor: string | null
    edited: string | null
  }
  geometry: {
    x: number
    y: number
  }
}
export interface ShelterReturnFeature {
  properties: {
    OBJECTID: number
    OWNER_RENTER: string
    PROVIDER: string
    ADDRESS: string
    CITY: string
    STATE: string
    LATITUDE: number
    LONGITUDE: number
    WARD: string
    TYPE: string
    SUBTYPE: string
    STATUS: string
    NUMBER_OF_BEDS: number
    ON_SITE_MEDICAL_CLINIC: string | null
    DGS_CONFIRMED: null
    DHS_CONFIRMED: string
    ALREADY_PUBLIC_INFORMATION: string
    LAST_UPDATED_BY_DHS: number
    PUBLISH_TO_ODP: string
    AGES_SERVED: string
    HOW_TO_ACCESS: string
    LGBTQ_FOCUSED: string | null
    XCOORD: string
    YCOORD: string
    NAME: string
    ZIPCODE: string
    WEB_URL: string
    MAR_ID: string
    GIS_ID: string
    GLOBALID: string // "{453EC7E8-81EB-4C02-B866-78996813ABD2}",
    CREATOR: string | null
    CREATED: string | null
    EDITOR: string | null
    EDITED: string | null
  }
  geometry: {
    x: number
    y: number
  }
}

export interface SheltersReturnType {
  type: string
  name: string
  crs: {
    type: string
    properties: { name: string }
  }
  features: ShelterReturnFeature[]
}

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
