import {
    SET_HOMELESS_SHELTER_LOCATIONS
                                    } from './types'





export const getHomelessShelterLocations = () => (dispatch)=>{
    fetch(`https://opendata.arcgis.com/datasets/87c5e68942304363a4578b30853f385d_25.geojson`)
    .then(r => r.json())
    .then(data =>{
        debugger
    })

}