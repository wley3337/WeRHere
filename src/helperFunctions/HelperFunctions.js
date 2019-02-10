
//sluging and deslugging
export const nameSlug = (name) => { return name.replace(/\s/gm, "_").replace(/(\/)/gm, "*") }
export const nameDeSlug = (name) => { return name.replace(/(_)/gm, " ").replace(/(\*)/gm, "/") }


export const removeFromKey= (arry, stringToRemove) => {
    arry.map( (ele) => { 
                // a note here: attributes is the first nest this might 
                // need to be added as another argument 
                for( let key in ele.attributes){
                    if(key.includes(stringToRemove)) {
                            ele.attributes[key.replace(stringToRemove, "")] = ele.attributes[key]
                            delete ele.attributes[key]
                    }       
                }          
    })
    return arry
}