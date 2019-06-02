## Health Route information and APIs
[back to main README](../README.md)
* Redux actions are under HealthActions.js


### Under Youth Mental Health Services:



#### Childrens Mental Health API


* URL:
- 'https://opendata.arcgis.com/datasets/04e62c8179404e3bb515d3b5bf4599e0_31.geojson'

`

    [
        {

            geometry:{
                coordinates: [
                    -77.0323972697698,
                    38.903202600512195
                ]
            }
            properties:{
                ADDRESS: "1012 14th St., NW"
                ADDRESS_ID: 240262
                CITY: "WASHINGTON"
                NAME: "First Home Care Corporation"
                OBJECTID: 2
                STATE: "DC"
                XCOORD: "397190.060500003"
                YCOORD: "137260.449999999"
                ZIP: "20005"
            }
        }
    ]
`



#### Adult Mental Health API

* URL:
- 'https://opendata.arcgis.com/datasets/da634bb38ffe4fa3b2e6e0391fbf1618_30.geojson'


* Data Structure:

 
 ```
[{

    geometry: {
        coordinates: 
            [-76.99208608719246, 
            38.93131975731531]
    }

    properties: {
        ADDRESS: "1001 LAWRENCE STREET NE"
        ADDRESS_ID: "289589"
        NAME: "Anchor Mental Health"
        OBJECTID: 1
        XCOORD: "400686.38"
        YCOORD: "140381.22"
    }

}]
```




### Under Clinics:

#### Dialysis Clinics API


* URL:
- 'https://opendata.arcgis.com/datasets/45452b5fbb4a41efa44ce7c8eb3fc194_2.geojson'


* Data Structure:
    
```
[{
geometry: {

coordinates: 
        [-77.01523765178548, 
        38.93097111263292]
}

properties:{

    ADDRESS: "106 Irving St NW"
    GIS_ID: "dia_1"
    NAME: "BMA of Columbia Heights"
    OBJECTID: 1
    PHONE: "(202) 829-0060"
    WEB_URL: null
}

}]

```


#### Primary Care Centers API


* URL:
- 'https://opendata.arcgis.com/datasets/018890d7399245759f05c7932261ef44_7.geojson'


* Data Structure:
   ```
[{

    geometry:{
        coordinates: 
            [-77.01329921978609, 
            38.89551157369499]

    },

    properties:{

    PRIMARY_CARE_INFOABILITY_TO_PAY: "Yes"
    PRIMARY_CARE_INFOACCEPT_NEW_PT: "Yes"
    PRIMARY_CARE_INFOADDRID: 299726
    PRIMARY_CARE_INFOAMHARIC: "Yes"
    PRIMARY_CARE_INFOANC: "6C"
    PRIMARY_CARE_INFOASL: "Yes"
    PRIMARY_CARE_INFOCARDIOLOGY: " "
    PRIMARY_CARE_INFOCHILDCARE: " "
    PRIMARY_CARE_INFOCHILD_SPECIAL_NEEDS: " "
    PRIMARY_CARE_INFOCHINESE_TRADITIONAL: "Yes"
    PRIMARY_CARE_INFODENTISTRY: "Yes"
    PRIMARY_CARE_INFODERMATOLOGY: " "
    PRIMARY_CARE_INFOELDERLY: "Yes"
    PRIMARY_CARE_INFOENDOCRINOLOGY: " "
    PRIMARY_CARE_INFOENGLISH: "Yes"
    PRIMARY_CARE_INFOEVENING_HOURS: "No"
    PRIMARY_CARE_INFOEXCLUDED_PLANS: " "
    PRIMARY_CARE_INFOFACILITY_AFFILIATION: " "
    PRIMARY_CARE_INFOFACILITY_SETTING: "Community Health Center-FQHC"
    PRIMARY_CARE_INFOFACILITY_TYPE: "Private Non-Profit"
    PRIMARY_CARE_INFOFRENCH: "Yes"
    PRIMARY_CARE_INFOGASTROENTEROLOGY: " "
    PRIMARY_CARE_INFOGASTRO_ENT: "Yes"
    PRIMARY_CARE_INFOGENERAL_SURGERY: " "
    PRIMARY_CARE_INFOGIS_ID: "PC_32"
    PRIMARY_CARE_INFOHEALTH_NUTR_ED: "Yes"
    PRIMARY_CARE_INFOHIV: "Yes"
    PRIMARY_CARE_INFOHIV_AIDS: " "
    PRIMARY_CARE_INFOHOMELESS: "Yes"
    PRIMARY_CARE_INFOHOSPITAL_AFFILIATION: " "
    PRIMARY_CARE_INFOHOURS_FRIDAY: "7:45 AM- 4:00 PM"
    PRIMARY_CARE_INFOHOURS_MONDAY: "7:45 AM- 4:00 PM"
    PRIMARY_CARE_INFOHOURS_SATURDAY: "7:45 - 12:00 Noon"
    PRIMARY_CARE_INFOHOURS_SUNDAY: " "
    PRIMARY_CARE_INFOHOURS_THURSDAY: "7:45 AM- 4:00 PM"
    PRIMARY_CARE_INFOHOURS_TUESDAY: "7:45 AM- 4:00 PM"
    PRIMARY_CARE_INFOHOURS_WEDNESDAY: "7:45 AM- 4:00 PM"
    PRIMARY_CARE_INFOHR_CONTACT: "Provider Specialist or Human Resources"
    PRIMARY_CARE_INFOHR_EMAIL: "Aalleyne@Unityhealthcare.org"
    PRIMARY_CARE_INFOHR_PHONE: "202-715-7900"
    PRIMARY_CARE_INFOINFECTIOUS_DISEASE: "Yes"
    PRIMARY_CARE_INFOINSURANCE_ALLIANCE: "Yes"
    PRIMARY_CARE_INFOINSURANCE_OTHER: " "
    PRIMARY_CARE_INFOINSURANCE_SCREEN: "Yes"
    PRIMARY_CARE_INFOINTEL_DISABLED: "Yes"
    PRIMARY_CARE_INFOKOREAN: "Yes"
    PRIMARY_CARE_INFOLANGUAGE_LIMITED: "Yes"
    PRIMARY_CARE_INFOLBGT: "Yes"
    PRIMARY_CARE_INFOLIMITED_ACCESS: " "
    PRIMARY_CARE_INFOMEDICAID: "Yes"
    PRIMARY_CARE_INFOMEDICAL_SERVICES_AVAILABLE: "Infectious Disease, Nephrology, Gastroenterology, Podiatry, Primary Care, Psychiatry, Reproductive Health, STI Test/Treatment, Urology"
    PRIMARY_CARE_INFOMEDICARE: "Yes"
    PRIMARY_CARE_INFOMENTAL_HEALTH: " "
    PRIMARY_CARE_INFOMENTAL_ILLNESS: "Yes"
    PRIMARY_CARE_INFONEPHROLOGY: "Yes"
    PRIMARY_CARE_INFONEUROLOGY: " "
    PRIMARY_CARE_INFOOBJECTID: null
    PRIMARY_CARE_INFOOBJECTID_1: 29
    PRIMARY_CARE_INFOOBSTETRICS: " "
    PRIMARY_CARE_INFOONCOLOGY: " "
    PRIMARY_CARE_INFOOPEN_ACCESS_SCHEDULE: "Yes"
    PRIMARY_CARE_INFOOPEN_ACCESS_TIME: "7:45AM-8:45AM; 12:45PM-1:45 PM or at provider's discretion"
    PRIMARY_CARE_INFOOPEN_TO_PUBLIC: "Yes"
    PRIMARY_CARE_INFOOPTHALMOLOGY: " "
    PRIMARY_CARE_INFOORAL_SURGERY: " "
    PRIMARY_CARE_INFOORTHOPEDIC: " "
    PRIMARY_CARE_INFOOTHER_LANGUAGE: " "
    PRIMARY_CARE_INFOOTHER_SERVICES: "Dental, Health Ed/Nutrition"
    PRIMARY_CARE_INFOOTHER_SPECIALTY: " "
    PRIMARY_CARE_INFOOTHER_SPECIAL_POP: " "
    PRIMARY_CARE_INFOPEDIATRICS: " "
    PRIMARY_CARE_INFOPHARMACY: " "
    PRIMARY_CARE_INFOPHYSICALLY_DISABLED: "Yes"
    PRIMARY_CARE_INFOPODIATRY: "Yes"
    PRIMARY_CARE_INFOPOP_SERVED: "All"
    PRIMARY_CARE_INFOPRACTICE_SETTING: "Community Health Center, FQHC"
    PRIMARY_CARE_INFOPRACTICE_TYPE: " "
    PRIMARY_CARE_INFOPRIMARY_CARE: "Yes"
    PRIMARY_CARE_INFOPRIVATE_EMPLOYER_INSURANCE: "Yes, please call"
    PRIMARY_CARE_INFOPRIVATE_INSURANCE: "Yes, please call"
    PRIMARY_CARE_INFOPRIVATE_PLANS: "Blue Cross"
    PRIMARY_CARE_INFOPSYCHIATRY: "Yes"
    PRIMARY_CARE_INFOPUBLIC_INSURANCE: "Yes"
    PRIMARY_CARE_INFOPUBLIC_SERVICES: "Yes"
    PRIMARY_CARE_INFOPULMONARY_MEDICINE: " "
    PRIMARY_CARE_INFOQUADRANT: "NW"
    PRIMARY_CARE_INFOREPRODUCTIVE_HEALTH: "Yes"
    PRIMARY_CARE_INFORHEUMATOLOGY: " "
    PRIMARY_CARE_INFOSCHEDULE_APPT_EMAIL: " "
    PRIMARY_CARE_INFOSCHEDULE_APPT_PHONE: "Yes, by phone"
    PRIMARY_CARE_INFOSCHEDULE_APPT_WEB: " "
    PRIMARY_CARE_INFOSLIDING_SCALE: "Yes"
    PRIMARY_CARE_INFOSOCIAL_SERVICES: "Yes"
    PRIMARY_CARE_INFOSPANISH: "Yes"
    PRIMARY_CARE_INFOSTI_TEST_TREAT: "Yes"
    PRIMARY_CARE_INFOTREATMENT_FOR_ALL: "Yes"
    PRIMARY_CARE_INFOUROLOGY: "Yes"
    PRIMARY_CARE_INFOVIETNAMESE: "Yes"
    PRIMARY_CARE_INFOWEEKEND_HOURS: null
    PRIMARY_CARE_INFOWIC: " "
    PRIMARY_CARE_INFOYESNO_: null
    PrimaryCarePtADDRESS: "425 2ND STREET NW"
    PrimaryCarePtADDRID: 299726
    PrimaryCarePtADMINISTRA: " "
    PrimaryCarePtCHARGENURS: " "
    PrimaryCarePtCITY: "WASHINGTON"
    PrimaryCarePtCT_HPSA: " "
    PrimaryCarePtFAX: " "
    PrimaryCarePtGIS_ID: "PC_32"
    PrimaryCarePtINSURANCE_ACCEPTED: " "
    PrimaryCarePtLAST_MODIFIED_ACTION: null
    PrimaryCarePtLAST_MODIFIED_DATE: null
    PrimaryCarePtLAST_MODIFIED_USER: null
    PrimaryCarePtMAR_CENSUS: "005900"
    PrimaryCarePtMEDICALDIR: " "
    PrimaryCarePtNAME: "Unity - Central Union Mission Health Center"
    PrimaryCarePtOBJECTID: 1
    PrimaryCarePtPHONE: "202-508-0500; 202-469-4699 (Appointment Scheduling Number)"
    PrimaryCarePtPOPULATION_SERVED: " "
    PrimaryCarePtSEE_PATIENTS_WHO_CANT_PAY: " "
    PrimaryCarePtSTATE: "DC"
    PrimaryCarePtWALKIN_UNSCHEDULED: "Yes"
    PrimaryCarePtWARD: 6
    PrimaryCarePtWEB_URL: "http://www.unityhealthcare.org/HealthCenters/ServiceCentralUnion.html"
    PrimaryCarePtXCOORD: 398846.5
    PrimaryCarePtYCOORD: 136406.27
    PrimaryCarePtZIP: 20001
    PrimaryCarePtZIP_1: "20001"
    }
    }]


#### Hospital API


* URL:
- 'https://opendata.arcgis.com/datasets/6c18bb76d8644bc1bf53cac2d2199564_4.geojson'


* Data Structure:
```
[
geometry:
    coordinates: (2) [-77.01024721169087, 38.929284418269624]
    type: "Point"

properties:
    ADDRESS: "50 IRVING STREET NW"
    ADULT_MAJOR_TRAUMA: null
    ADULT_MEDICAL: "Y"
    ADULT_MINOR_TRAUMA: "Y"
    AID: 243205
    BED_COUNT: null
    CRITICAL_BURNS: null
    GIS_ID: "Hosp_013"
    NAME: "Veterans Affairs Medical Center"
    OBJECTID: 1
    OBSTETRICS: null
    PEDIATRIC_MAJOR_TRAUMA: null
    PEDIATRIC_MEDICAL: null
    PEDIATRIC_MINOR_TRAUMA: null
    SSL: "Null"
    TYPE: "Specialty"
    WEB_URL: "http://www.washingtondc.va.gov/"

]

```

#### Pharmacies API


* URL:
- 'https://opendata.arcgis.com/datasets/2335ba275c3f4320a3113f13181eab56_9.geojson'


* Data Structure:
```
[{
geometry:
coordinates: (2) [-76.98840744432697, 38.848273304936384]
type: "Point"
__proto__: Object
properties:
ADDRESS: "1100 ALABAMA AVENUE SE"
ADDRESSLINE2: "ROOM 113"
ADDRID: "307946"
CITY: "WASHINGTON"
FACTYPE: "Pharmacy"
H1N1: null
LICENSE_NUMBER: "RX1000422"
NAME: "ST ELIZABETH HOSPITAL PHARMACY"
OBJECTID: 1
PHONE: null
SEASONAL: null
SSL: "5868S   0805"
STATE: "DC"
WARD: "Ward 8"
X: 401006.51
Y: 131162.45
ZIPCODE: "20032"

}]
```


#### HIV Clinics API


* URL:
- 'https://opendata.arcgis.com/datasets/b24aa2b089e5431eb360458c44ca13b4_3.geojson'


* Data Structure:
```
geometry:
coordinates: (2) [-77.03239727553417, 38.90320260051059]
type: "Point"
__proto__: Object
properties:
ADDRESS: "1012 14TH STREET NW"
ADDRID: "240262"
NAME: "Carl Vogel Center"
OBJECTID: 1
SERVICES: "Case Management , HIV Testing Sites - Northwest, Information For Newly Diagnosed , Mental Health/Counseling Services, Nutritional Counseling & Support, Peer/Paraprofessional Counseling & Support Groups, Primary Care, Rehabilitation Care, Treatment Adherence"
WARD: "Ward 2"
X: 397190.06
Y: 137260.45
ZIP: "20005"

```



#### Youth Rehabilitation Facilities API


* URL:
- 'https://opendata.arcgis.com/datasets/1d28aa7269dc40f9905912aa2e531f82_0.geojson'


* Data Structure:
```
[{
geometry:
coordinates: (2) [-76.98858811908718, 38.91214705091434]
type: "Point"

properties:
ADDRESS: "1000 MOUNT OLIVET ROAD NE"
ADDRESSID: 290013
GIS_ID: "DYRS_1"
NAME: "Youth Services Center"
OBJECTID: 1
TYPE: " "
WEB_LINK: "http://dyrs.dc.gov/"
XCOORD: 400989.94
YCOORD: 138252.92

}]

```

#### Opioid Treatment Facilities API


* URL:
- 'https://opendata.arcgis.com/datasets/9e32b6bea7af491cb65796144e061d51_10.geojson'


* Data Structure:
```
[{
geometry:
coordinates: (2) [-76.99338563692496, 38.9004206209805]
type: "Point"

properties:
ADDRESS: "906 H Street NE"
CITY: "Washington"
HOURS: "Thursday & Friday 7 am - 10 am"
LATITUDE: 38.90041317
LONGITUDE: -76.99338336
MAR_ID: 151203
OBJECTID: 1
ORG: "HIPS/Bread for the City"
PHONE: "(800) 676-HIPS or (202) 232-8150"
PROGRAM: "Treatment Center"
STATE: "DC"
WARD: "Ward 6"
XCOORD: 400573.95
YCOORD: 136951.15
ZIPCODE: 20002

}]

```