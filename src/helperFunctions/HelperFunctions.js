
//sluging and deslugging
export const nameSlug = (name) => { return name.replace(/\s/gm, "_").replace(/(\/)/gm, "*") }
export const nameDeSlug = (name) => { return name.replace(/(_)/gm, " ").replace(/(\*)/gm, "/") }


export const removeFromKey= (arry, stringToRemove) => {
    arry.map( (ele) => { 
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