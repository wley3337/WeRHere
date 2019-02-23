import React from 'react'

export const Languages = ({properties}) =>{
    return(
        <div className="menu-text">
            <p>English: {properties.PRIMARY_CARE_INFOENGLISH}</p>
            <p>Spanish: {properties.PRIMARY_CARE_INFOSPANISH}</p>
            <p>Vietnamese: {properties.PRIMARY_CARE_INFOVIETNAMESE}</p>
            <p>Korean: {properties.PRIMARY_CARE_INFOKOREAN}</p>
            <p>Amharic: {properties.PRIMARY_CARE_INFOAMHARIC}</p>
            <p>Chinese Traditional: {properties.PRIMARY_CARE_INFOCHINESE_TRADITIONAL}</p>
            <p>French: {properties.PRIMARY_CARE_INFOFRENCH}</p>
            <p>ASL: {properties.PRIMARY_CARE_INFOASL}</p>
            <p>Other Languages: {properties.PRIMARY_CARE_INFOOTHER_LANGUAGE}</p>
        </div>
    )
}


// PRIMARY_CARE_INFOENGLISH(pin): "Yes"
// PRIMARY_CARE_INFOSPANISH(pin): "Yes"
// PRIMARY_CARE_INFOVIETNAMESE(pin): "Yes"
// PRIMARY_CARE_INFOKOREAN(pin): "Yes"
// PRIMARY_CARE_INFOAMHARIC(pin): "Yes"
// PRIMARY_CARE_INFOCHINESE_TRADITIONAL(pin): "Yes"
// PRIMARY_CARE_INFOFRENCH(pin): "Yes"
// PRIMARY_CARE_INFOASL(pin): "Yes"
// PRIMARY_CARE_INFOOTHER_LANGUAGE(pin): " "

// PRIMARY_CARE_INFOENGLISH(pin): "Yes"
// PRIMARY_CARE_INFOSPANISH(pin): "Yes"
// PRIMARY_CARE_INFOVIETNAMESE(pin): "Via Language Line"
// PRIMARY_CARE_INFOKOREAN(pin): "Via Language Line"
// PRIMARY_CARE_INFOAMHARIC(pin): "Via Language Line"
// PRIMARY_CARE_INFOCHINESE_TRADITIONAL(pin): "Via Language Line"
// PRIMARY_CARE_INFOFRENCH(pin): "Via Language Line"
// PRIMARY_CARE_INFOASL(pin): " "
// PRIMARY_CARE_INFOOTHER_LANGUAGE(pin): "Interpreter available for any languages"