import React from 'react'

export const Languages = ({properties}) =>{
        // note: length > 1 because some fields have " " not ""
    return(
        <div className="menu-text char-space">
            { properties.PRIMARY_CARE_INFOENGLISH.length > 1? <p>English: {properties.PRIMARY_CARE_INFOENGLISH}</p> : null}
            { properties.PRIMARY_CARE_INFOSPANISH.length > 1 ? <p>Spanish: {properties.PRIMARY_CARE_INFOSPANISH}</p> : null}
            { properties.PRIMARY_CARE_INFOVIETNAMESE.length > 1 ? <p>Vietnamese: {properties.PRIMARY_CARE_INFOVIETNAMESE}</p> : null}
            { properties.PRIMARY_CARE_INFOKOREAN.length > 1 ? <p>Korean: {properties.PRIMARY_CARE_INFOKOREAN}</p> : null}
            {properties.PRIMARY_CARE_INFOAMHARIC.length > 1 ? <p>Amharic: {properties.PRIMARY_CARE_INFOAMHARIC}</p> : null}
            {properties.PRIMARY_CARE_INFOCHINESE_TRADITIONAL.length > 1 ? <p>Chinese Traditional: {properties.PRIMARY_CARE_INFOCHINESE_TRADITIONAL}</p> : null}
            {properties.PRIMARY_CARE_INFOFRENCH.length > 1 ? <p>French: {properties.PRIMARY_CARE_INFOFRENCH}</p> : null}
            {properties.PRIMARY_CARE_INFOASL.length > 1 ? <p>ASL: {properties.PRIMARY_CARE_INFOASL}</p> : null}
            {properties.PRIMARY_CARE_INFOOTHER_LANGUAGE.length > 1 ? <p>Other Languages: {properties.PRIMARY_CARE_INFOOTHER_LANGUAGE}</p> : null}
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