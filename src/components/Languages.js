import React from 'react'

export const Languages = ({properties}) =>{
        // note: length > 1 because some fields have " " not ""
    return(
        <div className="menu-text char-space">
            { properties.PRIMARY_CARE_INFOENGLISH.length > 1? <p>English : Yes</p> : null}
            { properties.PRIMARY_CARE_INFOSPANISH.length > 1 ? <p>Español : Sí</p> : null}
            { properties.PRIMARY_CARE_INFOVIETNAMESE.length > 1 ? <p>Tiếng Việt : 
Vâng</p> : null}
            { properties.PRIMARY_CARE_INFOKOREAN.length > 1 ? <p>
한국어 : 네</p> : null}
            {properties.PRIMARY_CARE_INFOAMHARIC.length > 1 ? <p>
አማርኛ : አዎ</p> : null}
            {properties.PRIMARY_CARE_INFOCHINESE_TRADITIONAL.length > 1 ? <p>中文 : 可以 </p> : null}
            {properties.PRIMARY_CARE_INFOFRENCH.length > 1 ? <p>Français : Oui</p> : null}
            {properties.PRIMARY_CARE_INFOASL.length > 1 ? <p>ASL: Yes</p> : null}
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


//This file is part of WeRHere.

// WeRHere is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// WeRHere is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with WeRHere.  If not, see <https://www.gnu.org/licenses/>