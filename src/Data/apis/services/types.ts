import { GenericFeatureCollectionReturn } from "src/Data/apis/genericTypes/genericFeatureApiReturn"

export interface ServicesFeatureCamelCase {
  type: "Feature"
  id: number
  geometry: {
    type: string
    coordinates: [number, number]
  }
  properties: {
    objectid: number
    programName: string
    description: string | null
    websiteUrl: string
    city: string
    state: string
    accessibilityServices: "Yes" | null
    adultLiteracy: "Yes" | null
    artTherapy: "Yes" | null
    assessment: "Yes" | null
    borrowMaterials: "Yes" | null
    caseManagement: "Yes" | null
    childCare: "Yes" | null
    clothing: "Yes" | null
    computers: "Yes" | null
    dentalServices: "Yes" | null
    documentationAssistance: "Yes" | null
    domesticViolenceServices: "Yes" | null
    foodGroceries: "Yes" | null
    groups: "Yes" | null
    haircuts: "Yes" | null
    harmReduction: "Yes" | null
    hivTesting: "Yes" | null
    housing: "Yes" | null
    housingNavigation: "Yes" | null
    incomeTaxHelp: "Yes" | null
    laundry: "Yes" | null
    libraryCard: "Yes" | null
    legalServices: "Yes" | null
    medicalBenefits: "Yes" | null
    medicalServices: "Yes" | null
    mail: "Yes" | null
    meals: "Yes" | null
    mentalHealth: "Yes" | null
    ministry: "Yes" | null
    phone: "Yes" | null
    publicRestrooms: "Yes" | null
    refreshments: "Yes" | null
    showers: "Yes" | null
    snapFoodStamps: "Yes" | null
    storage: "Yes" | null
    substanceAbuseTreatment: "Yes" | null
    supportedEmployment: "Yes" | null
    tanfFinancialAssistance: "Yes" | null
    transportation: "Yes" | null
    vocationalTraining: "Yes" | null
    clientsServedPerDay: "Yes" | null
    target: "men & women"
    openToPublic: "Yes" | null
    hoursOfOperation: "Yes" | null
    recordLastUpdated: number
    latitude: number
    longitude: number
    lgbtqFocused: "Yes" | null
    phoneNumber: string | null // '(202)-123-4567'
    xcoord: number
    ycoord: number
    ward: string
    name: string
    address: string
    zipcode: string
    marId: string
    gisId: string
    globalid: string
    creator: string | null
    created: string | null
    editor: string | null
    edited: string | null
  }
}
export interface ServicesFeatureReturn {
  type: "Feature"
  id: number
  geometry: {
    type: string
    coordinates: [number, number]
  }
  properties: {
    OBJECTID: number
    PROGRAM_NAME: string
    DESCRIPTION: string | null
    WEBSITE_URL: string
    CITY: string
    STATE: string
    ACCESSIBILITY_SERVICES: "Yes" | null
    ADULT_LITERACY: "Yes" | null
    ART_THERAPY: "Yes" | null
    ASSESSMENT: "Yes" | null
    BORROW_MATERIALS: "Yes" | null
    CASE_MANAGEMENT: "Yes" | null
    CHILD_CARE: "Yes" | null
    CLOTHING: "Yes" | null
    COMPUTERS: "Yes" | null
    DENTAL_SERVICES: "Yes" | null
    DOCUMENTATION_ASSISTANCE: "Yes" | null
    DOMESTIC_VIOLENCE_SERVICES: "Yes" | null
    FOOD_GROCERIES: "Yes" | null
    GROUPS: "Yes" | null
    HAIRCUTS: "Yes" | null
    HARM_REDUCTION: "Yes" | null
    HIV_TESTING: "Yes" | null
    HOUSING: "Yes" | null
    HOUSING_NAVIGATION: "Yes" | null
    INCOME_TAX_HELP: "Yes" | null
    LAUNDRY: "Yes" | null
    LIBRARY_CARD: "Yes" | null
    LEGAL_SERVICES: "Yes" | null
    MEDICAL_BENEFITS: "Yes" | null
    MEDICAL_SERVICES: "Yes" | null
    MAIL: "Yes" | null
    MEALS: "Yes" | null
    MENTAL_HEALTH: "Yes" | null
    MINISTRY: "Yes" | null
    PHONE: "Yes" | null
    PUBLIC_RESTROOMS: "Yes" | null
    REFRESHMENTS: "Yes" | null
    SHOWERS: "Yes" | null
    SNAP_FOOD_STAMPS: "Yes" | null
    STORAGE: "Yes" | null
    SUBSTANCE_ABUSE_TREATMENT: "Yes" | null
    SUPPORTED_EMPLOYMENT: "Yes" | null
    TANF_FINANCIAL_ASSISTANCE: "Yes" | null
    TRANSPORTATION: "Yes" | null
    VOCATIONAL_TRAINING: "Yes" | null
    CLIENTS_SERVED_PER_DAY: "Yes" | null
    TARGET: "Men & Women"
    OPEN_TO_PUBLIC: "Yes" | null
    HOURS_OF_OPERATION: "Yes" | null
    RECORD_LAST_UPDATED: number
    LATITUDE: number
    LONGITUDE: number
    LGBTQ_FOCUSED: "Yes" | null
    PHONE_NUMBER: "Yes" | null
    XCOORD: number
    YCOORD: number
    WARD: string
    NAME: string
    ADDRESS: string
    ZIPCODE: string
    MAR_ID: string
    GIS_ID: string
    GLOBALID: string
    CREATOR: string | null
    CREATED: string | null
    EDITOR: string | null
    EDITED: string | null
  }
}

export type ServicesAPIReturn =
  GenericFeatureCollectionReturn<ServicesFeatureReturn>
