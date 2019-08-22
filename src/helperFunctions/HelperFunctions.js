
//sluging and deslugging
export const nameSlug = (name) => { return name.replace(/\s/gm, "_").replace(/(\/)/gm, "*") }
export const nameDeSlug = (name) => { return name.replace(/(_)/gm, " ").replace(/(\*)/gm, "/") }

//api data formating
export const removeFromKey= (arry, stringToRemove) => {
    arry.forEach( (ele) => { 
                // a note here: properties is a sub key this might 
                // need to be added as another argument 
                for( let key in ele.properties){
                    if(key.includes(stringToRemove)) {
                            ele.properties[key.replace(stringToRemove, "")] = ele.properties[key]
                            delete ele.properties[key]
                    }       
                }          
    })
    return arry
}

export const aptPhoneNumberFormating = (phoneAndText) =>{
    return {phoneNumber2: phoneAndText.replace(/[a-zA-z ()]/g, ""), phoneType: phoneAndText.split("(")[1].replace(/[)]/, "") }
}

export const phone1 = (location) =>{
    return  location.properties.PHONE.split(";")[0]
  }

export const phone2 = (location) =>{
    return  location.properties.PHONE.split(";")[1] ? 
           aptPhoneNumberFormating(location.properties.PHONE.split(";")[1])
           : null
  }


export const opioidPhone1 = (location) =>{
    return location.properties.PHONE.split("or")[0].replace(/\s/g,"")
}
export const opioidPhone2 = (location) =>{
    return location.properties.PHONE.split("or")[1] ? 
        location.properties.PHONE.split("or")[1].replace(/\s/g,"") 
        : null
}

export const phoneToDigits = (phoneNumber) =>{
    return phoneNumber.replace(/\D+/g, "")
}



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
// along with WeRHere.  If not, see <https://www.gnu.org/licenses/