import {
    SET_HOMELESS_SHELTER_LOCATIONS
                                    } from './types'



export const getHomelessShelterLocations = () => (dispatch)=>{
    // geo json
    fetch(`https://opendata.arcgis.com/datasets/87c5e68942304363a4578b30853f385d_25.geojson`)
    .then(r => r.json())
    .then(data =>{
        const homelessShelterArray = data.features
        dispatch({type: SET_HOMELESS_SHELTER_LOCATIONS, payload: homelessShelterArray})
    })

}