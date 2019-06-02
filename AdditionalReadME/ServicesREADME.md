## Shelter Route information and APIs
[back to main README](../README.md)
* Redux actions are under ShelterActions.js

Icon from: 

#### Sevrices Locations API

* URL:
- 'https://opendata.arcgis.com/datasets/47be87a68e7a4376a3bdbe15d85de398_6.geojson' Original data, but has cors issues
- 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/6/query?where=1%3D1&outFields=*&outSR=4326&f=json' Used instead to eliminate cors
* Data Structure:
 ```
[{
    features: 
        [
            attributes:
            ACCESSIBILITY_SERVICES: null
            ADULT_LITERACY: null
            ART_THERAPY: null
            ASSESSMENT: null
            BORROW_MATERIALS: null
            CASE_MANAGEMENT: null
            CHILD_CARE: null
            CITY: "Washington "
            CLIENTS_SERVED_PER_DAY: null
            CLOTHING: null
            COMPUTERS: null
            DENTAL_SERVICES: null
            DESCRIPTION: null
            DOCUMENTATION_ASSISTANCE: null
            DOMESTIC_VIOLENCE_SERVICES: null
            FOOD_GROCERIES: null
            GROUPS: null
            HAIRCUTS: null
            HARM_REDUCTION: null
            HIV_TESTING: null
            HOURS_OF_OPERATION: null
            HOUSING: null
            HOUSING_NAVIGATION: null
            INCOME_TAX_HELP: null
            LATITUDE: 38.89720759
            LAUNDRY: null
            LEGAL_SERVICES: null
            LGBTQ_FOCUSED: null
            LIBRARY_CARD: null
            LONGITUDE: -77.02295312
            MAIL: null
            MARID: "901542"
            MEALS: null
            MEDICAL_BENEFITS: null
            MEDICAL_SERVICES: null
            MENTAL_HEALTH: null
            MINISTRY: null
            OBJECTID: 52
            OPEN_TO_PUBLIC: null
            ORGANIZATION_NAME: "National Portrait Gallery"
            PHONE: null
            PHONE_NUMBER: null
            PROGRAM_NAME: "Public Restrooms"
            PUBLIC_RESTROOMS: "Yes"
            RECORD_LAST_UPDATED: 1505174400000
            REFRESHMENTS: null
            SHOWERS: null
            SNAP_FOOD_STAMPS: null
            STATE: "DC"
            STORAGE: null
            STREET_ADDRESS: "8TH STREET NW AND F STREET NW"
            SUBSTANCE_ABUSE_TREATMENT: null
            SUPPORTED_EMPLOYMENT: null
            TANF_FINANCIAL_ASSISTANCE: null
            TARGET: "Men & Women"
            TRANSPORTATION: null
            VOCATIONAL_TRAINING: null
            WARD: null
            WEBSITE_URL: "https://dcdhs.dc.gov/page/downtown-washington-dc-public-restrooms"
            XCOORD: 398008.87964411
            YCOORD: 136595.53545219
            ZIP: null
    ]
    geometry: [
        x: -77.0229554120809
        y: 38.89721504807388
    ]
}]
```
