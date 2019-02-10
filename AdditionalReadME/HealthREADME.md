## Health Route information and APIs

* Redux actions are under HealthActions.js


### Under Youth Mental Health Services:



#### Childrens Mental Health API


* URL:
- 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/31/query?where=1%3D1&outFields=*&outSR=4326&f=json'


* Data Structure:
    (all X and x are integers and keys must be accessed in all caps 'NAME' not 'name')
    - { 

        OBJECTID(pin): 1

        ADDRESS_ID(pin): XXXXXX

        CITY(pin): "WASHINGTON"

        STATE(pin): "DC"

        NAME(pin): "Name of Institution"

        ADDRESS(pin): "XXXX Pennsylvania Ave., SE"

        XCOORD(pin): "XXXXXX.xxxxxxxxx"

        YCOORD(pin): "XXXXXX.xxxxxxxxx"

        ZIP(pin): "20020"
        
        }



#### Adult Mental Health API

* URL:
- 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/30/query?where=1%3D1&outFields=*&outSR=4326&f=json'


* Data Structure:
    (all X and x are integers and keys must be accessed in all caps 'NAME' not 'name')
    - { 

        OBJECTID(pin): 1

        NAME(pin): "Name of Provider"

        XCOORD(pin): "XXXXXX.xx"
        
        YCOORD(pin): "XXXXXX.xx"
        
        ADDRESS_ID(pin): "XXXXXX"

        ADDRESS(pin): "XXX StreetName STREET NE"
        
        }



### Under Clinics:

#### Dialysis Clinics API


* URL:
- 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Health_WebMercator/MapServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json'


* Data Structure:
    (all X and x are integers and keys must be accessed in all caps 'NAME' not 'name')
    - { 

        attributes: {

            GIS_ID: 1

            NAME(pin): "Name of Institution"

            ADDRESS(pin): "XXXX Pennsylvania Ave., SE"

            PHONE: "(XXX) XXX-XXXX"

            WEB_URL: null (note: most seam to be null)
            
        }

        geometry: {

            X: "XXXXXX.xxxxxxxxx"

            Y: "XXXXXX.xxxxxxxxx"

        }


        
        }


#### Primary Care Centers API


* URL:
- 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Health_WebMercator/MapServer/7/query?where=1%3D1&outFields=*&outSR=4326&f=json'


* Data Structure:
    (all X and x are integers and keys must be accessed in all caps 'NAME' not 'name')
    - { 

        attributes: {

                PRIMARY_CARE_INFO.ABILITY_TO_PAY: "Yes"
                PRIMARY_CARE_INFO.ACCEPT_NEW_PT: "Yes"
                PRIMARY_CARE_INFO.ADDRID: 299726
                PRIMARY_CARE_INFO.AMHARIC: "Yes"
                PRIMARY_CARE_INFO.ANC: "6C"
                PRIMARY_CARE_INFO.ASL: "Yes"
                PRIMARY_CARE_INFO.CARDIOLOGY: " "
                PRIMARY_CARE_INFO.CHILDCARE: " "
                PRIMARY_CARE_INFO.CHILD_SPECIAL_NEEDS: " "
                PRIMARY_CARE_INFO.CHINESE_TRADITIONAL: "Yes"
                PRIMARY_CARE_INFO.DENTISTRY: "Yes"
                PRIMARY_CARE_INFO.DERMATOLOGY: " "
                PRIMARY_CARE_INFO.ELDERLY: "Yes"
                PRIMARY_CARE_INFO.ENDOCRINOLOGY: " "
                PRIMARY_CARE_INFO.ENGLISH: "Yes"
                PRIMARY_CARE_INFO.EVENING_HOURS: "No"
                PRIMARY_CARE_INFO.EXCLUDED_PLANS: " "
                PRIMARY_CARE_INFO.FACILITY_AFFILIATION: " "
                PRIMARY_CARE_INFO.FACILITY_SETTING: "Community Health Center-FQHC"
                PRIMARY_CARE_INFO.FACILITY_TYPE: "Private Non-Profit"
                PRIMARY_CARE_INFO.FRENCH: "Yes"
                PRIMARY_CARE_INFO.GASTROENTEROLOGY: " "
                PRIMARY_CARE_INFO.GASTRO_ENT: "Yes"
                PRIMARY_CARE_INFO.GENERAL_SURGERY: " "
                PRIMARY_CARE_INFO.GIS_ID: "PC_32"
                PRIMARY_CARE_INFO.HEALTH_NUTR_ED: "Yes"
                PRIMARY_CARE_INFO.HIV: "Yes"
                PRIMARY_CARE_INFO.HIV_AIDS: " "
                PRIMARY_CARE_INFO.HOMELESS: "Yes"
                PRIMARY_CARE_INFO.HOSPITAL_AFFILIATION: " "
                PRIMARY_CARE_INFO.HOURS_FRIDAY: "7:45 AM- 4:00 PM"
                PRIMARY_CARE_INFO.HOURS_MONDAY: "7:45 AM- 4:00 PM"
                PRIMARY_CARE_INFO.HOURS_SATURDAY: "7:45 - 12:00 Noon"
                PRIMARY_CARE_INFO.HOURS_SUNDAY: " "
                PRIMARY_CARE_INFO.HOURS_THURSDAY: "7:45 AM- 4:00 PM"
                PRIMARY_CARE_INFO.HOURS_TUESDAY: "7:45 AM- 4:00 PM"
                PRIMARY_CARE_INFO.HOURS_WEDNESDAY: "7:45 AM- 4:00 PM"
                PRIMARY_CARE_INFO.HR_CONTACT: "Provider Specialist or Human Resources"
                PRIMARY_CARE_INFO.HR_EMAIL: "FirstName@Location.org"
                PRIMARY_CARE_INFO.HR_PHONE: "202-715-7900"
                PRIMARY_CARE_INFO.INFECTIOUS_DISEASE: "Yes"
                PRIMARY_CARE_INFO.INSURANCE_ALLIANCE: "Yes"
                PRIMARY_CARE_INFO.INSURANCE_OTHER: " "
                PRIMARY_CARE_INFO.INSURANCE_SCREEN: "Yes"
                PRIMARY_CARE_INFO.INTEL_DISABLED: "Yes"
                PRIMARY_CARE_INFO.KOREAN: "Yes"
                PRIMARY_CARE_INFO.LANGUAGE_LIMITED: "Yes"
                PRIMARY_CARE_INFO.LBGT: "Yes"
                PRIMARY_CARE_INFO.LIMITED_ACCESS: " "
                PRIMARY_CARE_INFO.MEDICAID: "Yes"
                PRIMARY_CARE_INFO.MEDICAL_SERVICES_AVAILABLE: "Infectious Disease, Nephrology, Gastroenterology, Podiatry, Primary Care, Psychiatry, Reproductive Health, STI Test/Treatment, Urology"
                PRIMARY_CARE_INFO.MEDICARE: "Yes"
                PRIMARY_CARE_INFO.MENTAL_HEALTH: " "
                PRIMARY_CARE_INFO.MENTAL_ILLNESS: "Yes"
                PRIMARY_CARE_INFO.NEPHROLOGY: "Yes"
                PRIMARY_CARE_INFO.NEUROLOGY: " "
                PRIMARY_CARE_INFO.OBJECTID: null
                PRIMARY_CARE_INFO.OBJECTID_1: 29
                PRIMARY_CARE_INFO.OBSTETRICS: " "
                PRIMARY_CARE_INFO.ONCOLOGY: " "
                PRIMARY_CARE_INFO.OPEN_ACCESS_SCHEDULE: "Yes"
                PRIMARY_CARE_INFO.OPEN_ACCESS_TIME: "7:45AM-8:45AM; 12:45PM-1:45 PM or at provider's discretion"
                PRIMARY_CARE_INFO.OPEN_TO_PUBLIC: "Yes"
                PRIMARY_CARE_INFO.OPTHALMOLOGY: " "
                PRIMARY_CARE_INFO.ORAL_SURGERY: " "
                PRIMARY_CARE_INFO.ORTHOPEDIC: " "
                PRIMARY_CARE_INFO.OTHER_LANGUAGE: " "
                PRIMARY_CARE_INFO.OTHER_SERVICES: "Dental, Health Ed/Nutrition"
                PRIMARY_CARE_INFO.OTHER_SPECIALTY: " "
                PRIMARY_CARE_INFO.OTHER_SPECIAL_POP: " "
                PRIMARY_CARE_INFO.PEDIATRICS: " "
                PRIMARY_CARE_INFO.PHARMACY: " "
                PRIMARY_CARE_INFO.PHYSICALLY_DISABLED: "Yes"
                PRIMARY_CARE_INFO.PODIATRY: "Yes"
                PRIMARY_CARE_INFO.POP_SERVED: "All"
                PRIMARY_CARE_INFO.PRACTICE_SETTING: "Community Health Center, FQHC"
                PRIMARY_CARE_INFO.PRACTICE_TYPE: " "
                PRIMARY_CARE_INFO.PRIMARY_CARE: "Yes"
                PRIMARY_CARE_INFO.PRIVATE_EMPLOYER_INSURANCE: "Yes, please call"
                PRIMARY_CARE_INFO.PRIVATE_INSURANCE: "Yes, please call"
                PRIMARY_CARE_INFO.PRIVATE_PLANS: "Blue Cross"
                PRIMARY_CARE_INFO.PSYCHIATRY: "Yes"
                PRIMARY_CARE_INFO.PUBLIC_INSURANCE: "Yes"
                PRIMARY_CARE_INFO.PUBLIC_SERVICES: "Yes"
                PRIMARY_CARE_INFO.PULMONARY_MEDICINE: " "
                PRIMARY_CARE_INFO.QUADRANT: "NW"
                PRIMARY_CARE_INFO.REPRODUCTIVE_HEALTH: "Yes"
                PRIMARY_CARE_INFO.RHEUMATOLOGY: " "
                PRIMARY_CARE_INFO.SCHEDULE_APPT_EMAIL: " "
                PRIMARY_CARE_INFO.SCHEDULE_APPT_PHONE: "Yes, by phone"
                PRIMARY_CARE_INFO.SCHEDULE_APPT_WEB: " "
                PRIMARY_CARE_INFO.SLIDING_SCALE: "Yes"
                PRIMARY_CARE_INFO.SOCIAL_SERVICES: "Yes"
                PRIMARY_CARE_INFO.SPANISH: "Yes"
                PRIMARY_CARE_INFO.STI_TEST_TREAT: "Yes"
                PRIMARY_CARE_INFO.TREATMENT_FOR_ALL: "Yes"
                PRIMARY_CARE_INFO.UROLOGY: "Yes"
                PRIMARY_CARE_INFO.VIETNAMESE: "Yes"
                PRIMARY_CARE_INFO.WEEKEND_HOURS: null
                PRIMARY_CARE_INFO.WIC: " "
                PRIMARY_CARE_INFO.YESNO_: null
                PrimaryCarePt.ADDRESS: "425 2ND STREET NW"
                PrimaryCarePt.ADDRID: 299726
                PrimaryCarePt.ADMINISTRA: " "
                PrimaryCarePt.CHARGENURS: " "
                PrimaryCarePt.CITY: "WASHINGTON"
                PrimaryCarePt.CT_HPSA: " "
                PrimaryCarePt.FAX: " "
                PrimaryCarePt.GIS_ID: "PC_32"
                PrimaryCarePt.INSURANCE_ACCEPTED: " "
                PrimaryCarePt.LAST_MODIFIED_ACTION: null
                PrimaryCarePt.LAST_MODIFIED_DATE: null
                PrimaryCarePt.LAST_MODIFIED_USER: null
                PrimaryCarePt.MAR_CENSUS: "005900"
                PrimaryCarePt.MEDICALDIR: " "
                PrimaryCarePt.NAME: "Unity - Central Union Mission Health Center"
                PrimaryCarePt.OBJECTID: 1
                PrimaryCarePt.PHONE: "202-508-0500; 202-469-4699 (Appointment Scheduling Number)"
                PrimaryCarePt.POPULATION_SERVED: " "
                PrimaryCarePt.SEE_PATIENTS_WHO_CANT_PAY: " "
                PrimaryCarePt.STATE: "DC"
                PrimaryCarePt.WALKIN_UNSCHEDULED: "Yes"
                PrimaryCarePt.WARD: 6
                PrimaryCarePt.WEB_URL: "http://www.unityhealthcare.org/HealthCenters/ServiceCentralUnion.html"
                PrimaryCarePt.XCOORD: 398846.5
                PrimaryCarePt.YCOORD: 136406.27
                PrimaryCarePt.ZIP: 20001
                PrimaryCarePt.ZIP_1: "20001"
            
        }

        geometry: {

            X: "XXXXXX.xxxxxxxxx"

            Y: "XXXXXX.xxxxxxxxx"

        }


        
        }