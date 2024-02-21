import { GenericFeatureCollectionReturn } from "src/Data/apis/genericTypes/genericFeatureApiReturn"

export interface ServicesFeatureCamelCase {
  geometry: {
    type: string
    coordinates: [number, number]
  }
  id: number
  properties: {
    accessibilityServices: "Yes" | null
    address: string
    adultLiteracy: "Yes" | null
    artTherapy: "Yes" | null
    assessment: "Yes" | null
    borrowMaterials: "Yes" | null
    caseManagement: "Yes" | null
    childCare: "Yes" | null
    city: string
    clientsServedPerDay: "Yes" | null
    clothing: "Yes" | null
    computers: "Yes" | null
    created: string | null
    creator: string | null
    dentalServices: "Yes" | null
    description: string | null
    documentationAssistance: "Yes" | null
    domesticViolenceServices: "Yes" | null
    edited: string | null
    editor: string | null
    foodGroceries: "Yes" | null
    gisId: string
    globalid: string
    groups: "Yes" | null
    haircuts: "Yes" | null
    harmReduction: "Yes" | null
    hivTesting: "Yes" | null
    hoursOfOperation: "Yes" | null
    housing: "Yes" | null
    housingNavigation: "Yes" | null
    incomeTaxHelp: "Yes" | null
    latitude: number
    laundry: "Yes" | null
    legalServices: "Yes" | null
    lgbtqFocused: "Yes" | null
    libraryCard: "Yes" | null
    longitude: number
    mail: "Yes" | null
    marId: string
    meals: "Yes" | null
    medicalBenefits: "Yes" | null
    medicalServices: "Yes" | null
    mentalHealth: "Yes" | null
    ministry: "Yes" | null
    name: string
    objectid: number
    openToPublic: "Yes" | null
    phone: "Yes" | null
    phoneNumber: string | null // '(202)-123-4567'
    programName: string
    publicRestrooms: "Yes" | null
    recordLastUpdated: number
    refreshments: "Yes" | null
    showers: "Yes" | null
    snapFoodStamps: "Yes" | null
    state: string
    storage: "Yes" | null
    substanceAbuseTreatment: "Yes" | null
    supportedEmployment: "Yes" | null
    tanfFinancialAssistance: "Yes" | null
    target: "men & women"
    transportation: "Yes" | null
    vocationalTraining: "Yes" | null
    ward: string
    websiteUrl: string
    xcoord: number
    ycoord: number
    zipcode: string
  }
  type: "Feature"
}

export interface ServicesFeatureReturn {
  geometry: {
    coordinates: [number, number]
    type: string
  }
  id: number
  properties: {
    ADDRESS: string
    ADULT_LITERACY: "Yes" | null
    ART_THERAPY: "Yes" | null
    ASSESSMENT: "Yes" | null
    BORROW_MATERIALS: "Yes" | null
    CASE_MANAGEMENT: "Yes" | null
    CHILD_CARE: "Yes" | null
    CITY: string
    CLIENTS_SERVED_PER_DAY: "Yes" | null
    CLOTHING: "Yes" | null
    COMPUTERS: "Yes" | null
    CREATED: string | null
    CREATOR: string | null
    DENTAL_SERVICES: "Yes" | null
    DESCRIPTION: string | null
    DOCUMENTATION_ASSISTANCE: "Yes" | null
    DOMESTIC_VIOLENCE_SERVICES: "Yes" | null
    EDITED: string | null
    EDITOR: string | null
    FOOD_GROCERIES: "Yes" | null
    GIS_ID: string
    GLOBALID: string
    GROUPS: "Yes" | null
    HAIRCUTS: "Yes" | null
    HARM_REDUCTION: "Yes" | null
    HIV_TESTING: "Yes" | null
    HOURS_OF_OPERATION: "Yes" | null
    HOUSING: "Yes" | null
    HOUSING_NAVIGATION: "Yes" | null
    INCOME_TAX_HELP: "Yes" | null
    LATITUDE: number
    LAUNDRY: "Yes" | null
    LEGAL_SERVICES: "Yes" | null
    LGBTQ_FOCUSED: "Yes" | null
    LIBRARY_CARD: "Yes" | null
    LONGITUDE: number
    MAIL: "Yes" | null
    MAR_ID: string
    MEALS: "Yes" | null
    MEDICAL_BENEFITS: "Yes" | null
    MEDICAL_SERVICES: "Yes" | null
    MENTAL_HEALTH: "Yes" | null
    MINISTRY: "Yes" | null
    NAME: string
    OBJECTID: number
    OPEN_TO_PUBLIC: "Yes" | null
    PHONE: "Yes" | null
    PHONE_NUMBER: "Yes" | null
    PROGRAM_NAME: string
    PUBLIC_RESTROOMS: "Yes" | null
    RECORD_LAST_UPDATED: number
    REFRESHMENTS: "Yes" | null
    SHOWERS: "Yes" | null
    SNAP_FOOD_STAMPS: "Yes" | null
    STATE: string
    STORAGE: "Yes" | null
    SUBSTANCE_ABUSE_TREATMENT: "Yes" | null
    SUPPORTED_EMPLOYMENT: "Yes" | null
    TANF_FINANCIAL_ASSISTANCE: "Yes" | null
    TARGET: "Men & Women"
    TRANSPORTATION: "Yes" | null
    VOCATIONAL_TRAINING: "Yes" | null
    WARD: string
    WEBSITE_URL: string
    XCOORD: number
    YCOORD: number
    ZIPCODE: string
  }
  type: "Feature"
}

export type ServicesAPIReturn =
  GenericFeatureCollectionReturn<ServicesFeatureReturn>
