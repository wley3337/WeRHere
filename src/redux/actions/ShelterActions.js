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