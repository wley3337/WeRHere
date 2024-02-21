# APIs to add

## Old Site

### 404's

[] Child mental health providers 404 ('https://opendata.arcgis.com/datasets/04e62c8179404e3bb515d3b5bf4599e0_31.geojson')
[] Adult mental health providers 404 ('https://opendata.arcgis.com/datasets/da634bb38ffe4fa3b2e6e0391fbf1618_30.geojson')
[] Hospitals 404 ('https://opendata.arcgis.com/datasets/6c18bb76d8644bc1bf53cac2d2199564_4.geojson')
[] Joyful Food Markets 404 ('https://opendata.arcgis.com/datasets/693e023ace4f46818edbf0aa7d6a60d3_56.geojson')

### 200's

All api addresses have changed.

[] Shelters ('https://opendata.arcgis.com/datasets/87c5e68942304363a4578b30853f385d_25.geojson')
[] Dialysis Clinics ('https://opendata.arcgis.com/datasets/45452b5fbb4a41efa44ce7c8eb3fc194_2.geojson')
[] Primary Care ('https://opendata.arcgis.com/datasets/018890d7399245759f05c7932261ef44_7.geojson')
[] Pharmacies ('https://opendata.arcgis.com/datasets/2335ba275c3f4320a3113f13181eab56_9.geojson')
[] HIV Clinics ('https://opendata.arcgis.com/datasets/b24aa2b089e5431eb360458c44ca13b4_3.geojson')
[] Youth Rehab Facilities ('https://opendata.arcgis.com/datasets/1d28aa7269dc40f9905912aa2e531f82_0.geojson')
[] Opiod Treatment Facilities ('https://opendata.arcgis.com/datasets/9e32b6bea7af491cb65796144e061d51_10.geojson')
[] Health Corner stores ('https://opendata.arcgis.com/datasets/9a2df4a51ce646819d0dedfecb7f466a_57.geojson')
[] WIC stores ('https://opendata.arcgis.com/datasets/cd60551c99f0421da412f79d2c7fe52b_55.geojson')

## New Site

### url updates

### Services

- [DC Open Data Address] (https://opendata.dc.gov/datasets/DCGIS::homeless-service-facilities/about)

- dataUrl: [https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/6/query?outFields=\*&where=1%3D1&f=geojson](https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/6/query?outFields=*&where=1%3D1&f=geojson)

```json
{
  "features": [
    {
      "geometry": {
        "coordinates": [-77.02703774568066, 38.98028835406811]
        "type": "Point",
      },
      "id": 1,
      "properties": {
        "ACCESSIBILITY_SERVICES": null,
        "ADDRESS": "7420 GEORGIA AVENUE NW",
        "ADULT_LITERACY": null,
        "ART_THERAPY": null,
        "ASSESSMENT": null,
        "BORROW_MATERIALS": "Yes",
        "CASE_MANAGEMENT": null,
        "CHILD_CARE": null,
        "CITY": "Washington",
        "CLIENTS_SERVED_PER_DAY": null,
        "CLOTHING": null,
        "COMPUTERS": "Yes",
        "CREATED": null,
        "CREATOR": null,
        "DENTAL_SERVICES": null,
        "DESCRIPTION": null,
        "DOCUMENTATION_ASSISTANCE": null,
        "DOMESTIC_VIOLENCE_SERVICES": null,
        "EDITED": null
        "EDITOR": null,
        "FOOD_GROCERIES": null,
        "GIS_ID": "HomelessServicePt_1",
        "GLOBALID": "{0FCDF887-B835-4FA2-832E-4E9B3B105E22}",
        "GROUPS": null,
        "HAIRCUTS": null,
        "HARM_REDUCTION": null,
        "HIV_TESTING": null,
        "HOURS_OF_OPERATION": null,
        "HOUSING": null,
        "HOUSING_NAVIGATION": null,
        "INCOME_TAX_HELP": null,
        "LATITUDE": 38.98028088,
        "LAUNDRY": null,
        "LEGAL_SERVICES": null,
        "LGBTQ_FOCUSED": null,
        "LIBRARY_CARD": "Yes",
        "LONGITUDE": -77.02703545,
        "MAIL": null,
        "MAR_ID": "253522",
        "MEALS": null,
        "MEDICAL_BENEFITS": null,
        "MEDICAL_SERVICES": null,
        "MENTAL_HEALTH": null,
        "MINISTRY": null,
        "NAME": "DC Public Library",
        "OBJECTID": 1,
        "OPEN_TO_PUBLIC": "Yes",
        "PHONE": null,
        "PHONE_NUMBER": null,
        "PROGRAM_NAME": "Shepherd Park Library",
        "PUBLIC_RESTROOMS": null,
        "RECORD_LAST_UPDATED": 1505188800000,
        "REFRESHMENTS": null,
        "SHOWERS": null,
        "SNAP_FOOD_STAMPS": null,
        "STATE": "DC",
        "STORAGE": null,
        "SUBSTANCE_ABUSE_TREATMENT": null,
        "SUPPORTED_EMPLOYMENT": null,
        "TANF_FINANCIAL_ASSISTANCE": null,
        "TARGET": "Men & Women",
        "TRANSPORTATION": null,
        "VOCATIONAL_TRAINING": "Yes",
        "WARD": "Ward 4",
        "WEBSITE_URL": "https://www.dclibrary.org/node/10380",
        "XCOORD": 397657.48,
        "YCOORD": 145817.5,
        "ZIPCODE": "20012",
      },
      "type": "Feature",
    }
  ],
  "type": "FeatureCollection"
}
```

### Shelters

- [DC Open Data Address] (https://opendata.dc.gov/datasets/DCGIS::homeless-shelter-locations/about)

- dataUrl: [https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/25/query?outFields=\*&where=1%3D1&f=geojson](https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/25/query?outFields=*&where=1%3D1&f=geojson)

```json
{
  "features": [
    {
      "geometry": {
        "coordinates": [-77.02830482074451, 38.963358873102905]
        "type": "Point",
      },
      "id": 1,
      "properties": {
        "ADDRESS": "6010 Georgia Ave., NW",
        "AGES_SERVED": "18+",
        "ALREADY_PUBLIC_INFORMATION": "Yes",
        "CITY": "Washington",
        "CREATED": null,
        "CREATOR": null,
        "DGS_CONFIRMED": null,
        "DHS_CONFIRMED": "Yes",
        "EDITED": null
        "EDITOR": null,
        "GIS_ID": "HomelessShelterPt_1",
        "GLOBALID": "{453EC7E8-81EB-4C02-B866-78996813ABD2}",
        "HOW_TO_ACCESS": "Show Up and/or Call Shelter Hotline (311)",
        "LAST_UPDATED_BY_DHS": 1510722000000,
        "LATITUDE": 38.96335141,
        "LGBTQ_FOCUSED": null,
        "LONGITUDE": -77.02830252,
        "MAR_ID": "308177",
        "NAME": "Nativity Shelter for Women",
        "NUMBER_OF_BEDS": 25,
        "OBJECTID": 1,
        "ON_SITE_MEDICAL_CLINIC": null,
        "OWNER_RENTER": "Catholic Charities",
        "PROVIDER": "Catholic Charities",
        "PUBLISH_TO_ODP": "Yes",
        "STATE": "DC",
        "STATUS": "Active",
        "SUBTYPE": "Women",
        "TYPE": "Low Barrier",
        "WARD": "Ward 4",
        "WEB_URL": "https://www.catholiccharitiesdc.org/nativity/",
        "XCOORD": "397547.11",
        "YCOORD": "143938.2",
        "ZIPCODE": "20011",
      },
      "type": "Feature",
    }
  ],

  "type": "FeatureCollection",
}
```

### Health

#### Dialysis Clinics

- [DC Open Data Address] (https://opendata.dc.gov/datasets/DCGIS::opioid-dependence-treatment-facilities/about)
- dataUrl [https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Health_WebMercator/MapServer/10/query?outFields=\*&where=1%3D1&f=geojson](https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Health_WebMercator/MapServer/10/query?outFields=*&where=1%3D1&f=geojson)

```json
{
  "features": [
    {
      "geometry": {
        "type": "Point",
        "coordinates": [-76.9904814993107, 38.94402385961079]
      },
      "id": 1,
      "properties": {
        "ADDRESS": "1150 Varnum St NE, St. Catherine Hall, Room 204",
        "CITY": "Washington",
        "CREATED": null,
        "CREATOR": null,
        "EDITED": null,
        "EDITOR": null,
        "GIS_ID": "temp_20",
        "GLOBALID": "{F278C5CF-A4D0-445B-BAFA-2AF166C432C3}",
        "HOURS": " Monday - Friday 8:30 am - 4:30 pm",
        "LATITUDE": 38.94401606,
        "LONGITUDE": -76.990479
        "MAR_ID": 289609,
        "OBJECTID": 1,
        "ORG": "Providence Hospital Outpatient Addiction Services",
        "PHONE": "(202) 854-7222",
        "PROGRAM": "Treatment Center",
        "STATE": "DC",
        "WARD": "Ward 5",
        "XCOORD": 400825.36,
        "YCOORD": 141791.5,
        "ZIPCODE": 20017,
      },
      "type": "Feature",
    }
  ],

  "type": "FeatureCollection",
}
```

#### Primary Care

- [DC Open Data Address](https://opendata.dc.gov/datasets/DCGIS::primary-care-facility/about)
- dataUrl [https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Health_WebMercator/MapServer/7/query?outFields=\*&where=1%3D1&f=geojson](https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Health_WebMercator/MapServer/7/query?outFields=*&where=1%3D1&f=geojson)

```json
{
  "type": "FeatureCollection",
  "features": []
}
```

#### Pharmacies

- [DC Open Data Address]()
- dataUrl [https://opendata.arcgis.com/datasets/2335ba275c3f4320a3113f13181eab56_9.geojson](https://opendata.arcgis.com/datasets/2335ba275c3f4320a3113f13181eab56_9.geojson)

```json
{
  "features": [
    {
      "geometry": {
        "coordinates": [-76.98064729191421, 38.84927536627622]
        "type": "Point",
      },
      "id": 338,
      "properties": {
        "DCGIS.PRIMARY_CARE_INFO.ABILITY_TO_PAY": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.ACCEPT_NEW_PT": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.AMHARIC": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.ANC": "8C",
        "DCGIS.PRIMARY_CARE_INFO.ASL": " ",
        "DCGIS.PRIMARY_CARE_INFO.CARDIOLOGY": " ",
        "DCGIS.PRIMARY_CARE_INFO.CHILDCARE": " ",
        "DCGIS.PRIMARY_CARE_INFO.CHILD_SPECIAL_NEEDS": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.CHINESE_TRADITIONAL": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.CREATED_DATE": 1663876951000,
        "DCGIS.PRIMARY_CARE_INFO.CREATED_USER": "JLAY",
        "DCGIS.PRIMARY_CARE_INFO.DENTISTRY": " ",
        "DCGIS.PRIMARY_CARE_INFO.DERMATOLOGY": " ",
        "DCGIS.PRIMARY_CARE_INFO.ELDERLY": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.ENDOCRINOLOGY": " ",
        "DCGIS.PRIMARY_CARE_INFO.ENGLISH": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.EVENING_HOURS": "No",
        "DCGIS.PRIMARY_CARE_INFO.EXCLUDED_PLANS": " ",
        "DCGIS.PRIMARY_CARE_INFO.FACILITY_AFFILIATION": " ",
        "DCGIS.PRIMARY_CARE_INFO.FACILITY_SETTING": "Community Health Center-FQHC",
        "DCGIS.PRIMARY_CARE_INFO.FACILITY_TYPE": "Private Non-Profit",
        "DCGIS.PRIMARY_CARE_INFO.FRENCH": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.GASTROENTEROLOGY": " ",
        "DCGIS.PRIMARY_CARE_INFO.GASTRO_ENT": " ",
        "DCGIS.PRIMARY_CARE_INFO.GENERAL_SURGERY": " ",
        "DCGIS.PRIMARY_CARE_INFO.GIS_ID": "PC_48",
        "DCGIS.PRIMARY_CARE_INFO.HEALTH_NUTR_ED": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.HIV": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.HIV_AIDS": " ",
        "DCGIS.PRIMARY_CARE_INFO.HOMELESS": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.HOSPITAL_AFFILIATION": " ",
        "DCGIS.PRIMARY_CARE_INFO.HOURS_FRIDAY": "8:00 AM - 8:00 PM",
        "DCGIS.PRIMARY_CARE_INFO.HOURS_MONDAY": "8:00 AM - 8:00 PM",
        "DCGIS.PRIMARY_CARE_INFO.HOURS_SATURDAY": null,
        "DCGIS.PRIMARY_CARE_INFO.HOURS_SUNDAY": null,
        "DCGIS.PRIMARY_CARE_INFO.HOURS_THURSDAY": "8:00 AM - 8:00 PM",
        "DCGIS.PRIMARY_CARE_INFO.HOURS_TUESDAY": "8:00 AM - 8:00 PM",
        "DCGIS.PRIMARY_CARE_INFO.HOURS_WEDNESDAY": "8:00 AM - 8:00 PM",
        "DCGIS.PRIMARY_CARE_INFO.HR_CONTACT": "Provider Specialist or Human Resources",
        "DCGIS.PRIMARY_CARE_INFO.HR_EMAIL": "AAlleyne@UnityHealthCare.org",
        "DCGIS.PRIMARY_CARE_INFO.HR_PHONE": "202-715-7900",
        "DCGIS.PRIMARY_CARE_INFO.INFECTIOUS_DISEASE": " ",
        "DCGIS.PRIMARY_CARE_INFO.INSURANCE_ALLIANCE": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.INSURANCE_OTHER": " ",
        "DCGIS.PRIMARY_CARE_INFO.INSURANCE_SCREEN": " ",
        "DCGIS.PRIMARY_CARE_INFO.INTEL_DISABLED": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.KOREAN": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.LANGUAGE_LIMITED": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.LAST_EDITED_DATE": 1663876951000,
        "DCGIS.PRIMARY_CARE_INFO.LAST_EDITED_USER": "JLAY",
        "DCGIS.PRIMARY_CARE_INFO.LBGT": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.LIMITED_ACCESS": " ",
        "DCGIS.PRIMARY_CARE_INFO.MAR_ID": 156534
        "DCGIS.PRIMARY_CARE_INFO.MEDICAID": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.MEDICAL_SERVICES_AVAILABLE": "Obstetrics, Primary Care, Reproductive Health, STI Test/Treatment",
        "DCGIS.PRIMARY_CARE_INFO.MEDICARE": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.MENTAL_HEALTH": " ",
        "DCGIS.PRIMARY_CARE_INFO.MENTAL_ILLNESS": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.NEPHROLOGY": " ",
        "DCGIS.PRIMARY_CARE_INFO.NEUROLOGY": " ",
        "DCGIS.PRIMARY_CARE_INFO.OBJECTID": 354,
        "DCGIS.PRIMARY_CARE_INFO.OBSTETRICS": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.ONCOLOGY": " ",
        "DCGIS.PRIMARY_CARE_INFO.OPEN_ACCESS_SCHEDULE": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.OPEN_ACCESS_TIME": "Limited in the AM",
        "DCGIS.PRIMARY_CARE_INFO.OPEN_TO_PUBLIC": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.OPTHALMOLOGY": " ",
        "DCGIS.PRIMARY_CARE_INFO.ORAL_SURGERY": " ",
        "DCGIS.PRIMARY_CARE_INFO.ORTHOPEDIC": " ",
        "DCGIS.PRIMARY_CARE_INFO.OTHER_LANGUAGE": "All languages through the language line",
        "DCGIS.PRIMARY_CARE_INFO.OTHER_SERVICES": "Health Ed/Nutrition",
        "DCGIS.PRIMARY_CARE_INFO.OTHER_SPECIALTY": " ",
        "DCGIS.PRIMARY_CARE_INFO.OTHER_SPECIAL_POP": " ",
        "DCGIS.PRIMARY_CARE_INFO.PEDIATRICS": " ",
        "DCGIS.PRIMARY_CARE_INFO.PHARMACY": " ",
        "DCGIS.PRIMARY_CARE_INFO.PHYSICALLY_DISABLED": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.PODIATRY": " ",
        "DCGIS.PRIMARY_CARE_INFO.POP_SERVED": "All",
        "DCGIS.PRIMARY_CARE_INFO.PRACTICE_SETTING": "Community Health Center - FQHC",
        "DCGIS.PRIMARY_CARE_INFO.PRACTICE_TYPE": " ",
        "DCGIS.PRIMARY_CARE_INFO.PRIMARY_CARE": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.PRIVATE_EMPLOYER_INSURANCE": "Yes, please call",
        "DCGIS.PRIMARY_CARE_INFO.PRIVATE_INSURANCE": "Yes, please call",
        "DCGIS.PRIMARY_CARE_INFO.PRIVATE_PLANS": "Blue Cross- All plans",
        "DCGIS.PRIMARY_CARE_INFO.PSYCHIATRY": " ",
        "DCGIS.PRIMARY_CARE_INFO.PUBLIC_INSURANCE": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.PUBLIC_SERVICES": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.PULMONARY_MEDICINE": " ",
        "DCGIS.PRIMARY_CARE_INFO.QUADRANT": "SE",
        "DCGIS.PRIMARY_CARE_INFO.REPRODUCTIVE_HEALTH": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.RHEUMATOLOGY": " ",
        "DCGIS.PRIMARY_CARE_INFO.SCHEDULE_APPT_EMAIL": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.SCHEDULE_APPT_PHONE": "Yes, by phone",
        "DCGIS.PRIMARY_CARE_INFO.SCHEDULE_APPT_WEB": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.SLIDING_SCALE": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.SOCIAL_SERVICES": " ",
        "DCGIS.PRIMARY_CARE_INFO.SPANISH": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.STI_TEST_TREAT": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.TREATMENT_FOR_ALL": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.UROLOGY": " ",
        "DCGIS.PRIMARY_CARE_INFO.VIETNAMESE": "Yes",
        "DCGIS.PRIMARY_CARE_INFO.WEEKEND_HOURS": null,
        "DCGIS.PRIMARY_CARE_INFO.WIC": " ",
        "DCGIS.PRIMARY_CARE_INFO.YESNO_": null,
        "DCGIS.PrimaryCarePt.ADDRESS": "3240 STANTON ROAD SE",
        "DCGIS.PrimaryCarePt.ADMINISTRA": " ",
        "DCGIS.PrimaryCarePt.CHARGENURS": " ",
        "DCGIS.PrimaryCarePt.CITY": "WASHINGTON",
        "DCGIS.PrimaryCarePt.CREATED": 1663876792000,
        "DCGIS.PrimaryCarePt.CREATOR": "JLAY",
        "DCGIS.PrimaryCarePt.CT_HPSA": " ",
        "DCGIS.PrimaryCarePt.EDITED": 1663876792000,
        "DCGIS.PrimaryCarePt.EDITOR": "JLAY",
        "DCGIS.PrimaryCarePt.FACILITY_SETTING": "Community Health Center-FQHC",
        "DCGIS.PrimaryCarePt.FACILITY_TYPE": "Private Non-Profit",
        "DCGIS.PrimaryCarePt.FAX": " ",
        "DCGIS.PrimaryCarePt.GIS_ID": "PC_48",
        "DCGIS.PrimaryCarePt.GLOBALID": "{C7CC0D52-1B70-409F-9A31-EE47C8B963BB}",
        "DCGIS.PrimaryCarePt.INSURANCE_ACCEPTED": " ",
        "DCGIS.PrimaryCarePt.LAST_MODIFIED_ACTION": null,
        "DCGIS.PrimaryCarePt.LAST_MODIFIED_DATE": null,
        "DCGIS.PrimaryCarePt.LAST_MODIFIED_USER": null,
        "DCGIS.PrimaryCarePt.LIMITED_ACCESS": "Homeless/Residential",
        "DCGIS.PrimaryCarePt.MAR_CENSUS": "007404",
        "DCGIS.PrimaryCarePt.MAR_ID": 156534,
        "DCGIS.PrimaryCarePt.MEDICAID": "Yes",
        "DCGIS.PrimaryCarePt.MEDICALDIR": " ",
        "DCGIS.PrimaryCarePt.MEDICARE": "Yes",
        "DCGIS.PrimaryCarePt.NAME": "Unity - Stanton Road Health Center",
        "DCGIS.PrimaryCarePt.OBJECTID": 338,
        "DCGIS.PrimaryCarePt.OPEN_TO_PUBLIC": "Yes",
        "DCGIS.PrimaryCarePt.PHONE": "202-469-4699",
        "DCGIS.PrimaryCarePt.POPULATION_SERVED": " ",
        "DCGIS.PrimaryCarePt.PRACTICE_TYPE": " ",
        "DCGIS.PrimaryCarePt.PRIVATE_EMPLOYER_INSURANCE": "Yes",
        "DCGIS.PrimaryCarePt.PRIVATE_INSURANCE": "Private insurance is also accepted",
        "DCGIS.PrimaryCarePt.PUBLIC_INSURANCE": "Yes",
        "DCGIS.PrimaryCarePt.SEE_PATIENTS_WHO_CANT_PAY": " ",
        "DCGIS.PrimaryCarePt.SE_ANNO_CAD_DATA": null,
        "DCGIS.PrimaryCarePt.SLIDING_SCALE": "Yes",
        "DCGIS.PrimaryCarePt.STATE": "DC",
        "DCGIS.PrimaryCarePt.TREATMENT_FOR_ALL": "Yes",
        "DCGIS.PrimaryCarePt.WALKIN_UNSCHEDULED": "Yes",
        "DCGIS.PrimaryCarePt.WARD": 8,
        "DCGIS.PrimaryCarePt.WEB_URL": "https://www.unityhealthcare.org/",
        "DCGIS.PrimaryCarePt.XCOORD": 401680.65,
        "DCGIS.PrimaryCarePt.YCOORD": 131271.97,
        "DCGIS.PrimaryCarePt.YESNO": null,
        "DCGIS.PrimaryCarePt.ZIPCODE": 20020,
        "DCGIS.PrimaryCarePt.ZIP_1": "20020",
      },
      "type": "Feature"
    }
  ],
  "type": "FeatureCollection"
}
```

#### HIV Clinics

- [DC Open Data Address](https://opendata.dc.gov/datasets/DCGIS::hiv-and-aids-clinic/about)

- dataUrl [https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Health_WebMercator/MapServer/3/query?outFields=\*&where=1%3D1&f=geojson](https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Health_WebMercator/MapServer/3/query?outFields=*&where=1%3D1&f=geojson)

```json
{
  "features": [
    {
      "geometry": {
        "coordinates": [-77.03584862260362, 38.95274164691884]
        "type": "Point",
      },
      "id": 2,
      "properties": {
        "ADDRESS": "1516 HAMILTON STREET NW",
        "CREATED": null,
        "CREATOR": null,
        "EDITED": null,
        "EDITOR": null,
        "GIS_ID": "HIV_AIDS_ClinicPt_2",
        "GLOBALID": "{64BD5DBC-38A6-4A32-B9C6-8B2EF0394D14}",
        "MAR_ID": "255812",
        "NAME": "Samaritan Ministries",
        "OBJECTID": 2
        "SERVICES": "Bereavement Counseling ",
        "WARD": "Ward 4",
        "XCOORD": 396892.85000000003,
        "YCOORD": 142759.82,
        "ZIPCODE": "20011",
      },
      "type": "Feature"
    }
  ],
  "type": "FeatureCollection"
}
```

#### Youth Rehab Facilities

- [DC Open Data Address](https://opendata.dc.gov/datasets/DCGIS::youth-rehabilitation-facilities/about)
- dataUrl [https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Safety_WebMercator/MapServer/0/query?outFields=\*&where=1%3D1&f=geojson](https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Safety_WebMercator/MapServer/0/query?outFields=*&where=1%3D1&f=geojson)

```json
{
  "features": [
    {
      "geometry": {
        "coordinates": [-76.99017937156253, 38.86542335112103]
        "type": "Point",
      },
      "id": 14,
      "properties": {
        "ADDRESS": "2101 MARTIN LUTHER KING JR AVENUE SE",
        "CREATED": null,
        "CREATOR": null,
        "EDITED": 1514942750000,
        "EDITOR": "DCGIS",
        "GIS_ID": "DYRSFacilityPt_14",
        "GLOBALID": "{BA15D20C-E813-40C7-A604-F87288B0E342}",
        "LATITUDE": 38.8654159,
        "LONGITUDE": -76.99017709
        "MAR_ID": 278064,
        "NAME": "DYRS Facility",
        "OBJECTID": 14,
        "TYPE": " ",
        "WEB_LINK": "http://dyrs.dc.gov/",
        "XCOORD": 400852.49,
        "YCOORD": 133066.21,
      },
      "type": "Feature",
    }
  ],
  "type": "FeatureCollection"
}
```

#### Opiod Treatment Facilities

- [DC Open Data Address](https://opendata.dc.gov/datasets/DCGIS::opioid-dependence-treatment-facilities/about)

- dataUrl: [https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Health_WebMercator/MapServer/10/query?outFields=\*&where=1%3D1&f=geojson](https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Health_WebMercator/MapServer/10/query?outFields=*&where=1%3D1&f=geojson)

```json
{
  "features": [
    {
      "geometry": {
        "coordinates": [-76.9904814993107, 38.94402385961079]
        "type": "Point",
      },
      "id": 1,
      "properties": {
        "ADDRESS": "1150 Varnum St NE, St. Catherine Hall, Room 204",
        "CITY": "Washington",
        "CREATED": null,
        "CREATOR": null,
        "EDITED": null,
        "EDITOR": null,
        "GIS_ID": "temp_20",
        "GLOBALID": "{F278C5CF-A4D0-445B-BAFA-2AF166C432C3}",
        "HOURS": " Monday - Friday 8:30 am - 4:30 pm",
        "LATITUDE": 38.94401606,
        "LONGITUDE": -76.990479
        "MAR_ID": 289609,
        "OBJECTID": 1,
        "ORG": "Providence Hospital Outpatient Addiction Services",
        "PHONE": "(202) 854-7222",
        "PROGRAM": "Treatment Center",
        "STATE": "DC",
        "WARD": "Ward 5",
        "XCOORD": 400825.36,
        "YCOORD": 141791.5,
        "ZIPCODE": 20017,
      }
      "type": "Feature",
    }
  ],
  "type": "FeatureCollection"
}
```

### Food

#### Health Corner stores

- [DC Open Data Address](https://opendata.dc.gov/datasets/DCGIS::healthy-corner-stores/about)

- dataUrl: [https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/57/query?outFields=\*&where=1%3D1&f=geojson](https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/57/query?outFields=*&where=1%3D1&f=geojson)

```json
{
  "features": [
    {
      "geometry": {
        "coordinates": [-77.01907904078034, 38.97504632449449]
        "type": "Point",
      },
      "id": 1,
      "properties": {
        "ADDRESS": "7000 Blair Rd NW",
        "CREATED": null,
        "CREATOR": null,
        "EDITED": null
        "EDITOR": null,
        "GIS_ID": "HealthyCornerStorePt_1",
        "GLOBALID": "{F6CD05AE-1648-404D-B7A3-603BE5E3361B}",
        "LATITUDE": 38.97503886,
        "LONGITUDE": -77.01907675,
        "MAR_ID": 249127,
        "MATCHTYPE": "Exact",
        "OBJECTID": 1,
        "STORE": "BP Blaire Gas Station",
        "XCOORD": 398346.95,
        "YCOORD": 145235.41,
      }
      "type": "Feature",
    }
  ],
  "type": "FeatureCollection",
}
```

#### WIC stores

- [DC Open Data Address] (https://opendata.dc.gov/datasets/DCGIS::wic-benefits/about)
- dataUrl: [https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/55/query?outFields=\*&where=1%3D1&f=geojson](https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/55/query?outFields=*&where=1%3D1&f=geojson)

```json
{
  "features": [
    {
      "geometry": {
        "coordinates": [-76.93849329898418, 38.89138327695716]
        "type": "Point",
      },
      "id": 342,
      "properties": {
        "OBJECTID": 342,
        "ORGANIZATION": "Unity East of the River Health Center",
        "ADDRESS": "4414 Benning Road NE",
        "TYPE": "WIC Clinic",
        "XCOORD": 405336.17,
        "YCOORD": 135949.71,
        "MAR_ID": 288206,
        "LATITUDE": 38.89137549,
        "LONGITUDE": -76.93849104,
        "GIS_ID": "WICPt_22",
        "GLOBALID": "{8D2930B7-CAA8-4E2D-8895-4F867483998C}",
        "CREATOR": "JLAY",
        "CREATED": 1653091970000,
        "EDITOR": "JLAY",
        "EDITED": 1653091970000,
        "PHONE": "(202) 938-3688",
        "DC_WIC_NUM": "0606",
        "PHARMACY_PHONE": "N/A"
      }
      "type": "Feature",
    }
  ],
  "type": "FeatureCollection"
}
```

# CSS library ?

# Compenent library?

# Progressive web app
