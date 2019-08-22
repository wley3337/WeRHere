import { 
        SET_JOYFUL_FOOD_MARKETS,
        SET_HEALTHY_CORNER_STORES,
        SET_WIC_MARKETS
                                } from './types'


//** fetch Joyful Food Markets  */

export const getJoyfulFoodMarkets = () => dispatch => {
  
    // geojson:
      fetch('https://opendata.arcgis.com/datasets/693e023ace4f46818edbf0aa7d6a60d3_56.geojson')
    
     .then(r => r.json())
     .then(data => { 
         const joyfulFoodMarketsArray = data.features
         dispatch({type: SET_JOYFUL_FOOD_MARKETS, payload: joyfulFoodMarketsArray})
     })
 }

 //** fetch Healthy Corner Stores  */

export const getHealthyCornerStores = () => dispatch => {
  
    // geojson:
      fetch('https://opendata.arcgis.com/datasets/9a2df4a51ce646819d0dedfecb7f466a_57.geojson')
    
     .then(r => r.json())
     .then(data => { 
         const healthyCornerStoresArray = data.features
         dispatch({type: SET_HEALTHY_CORNER_STORES, payload: healthyCornerStoresArray})
     })
 }

 //** fetch WIC (Women, Infants, and Children) Stores  */

export const getWICStores = () => dispatch => {
  
    // geojson:
      fetch('https://opendata.arcgis.com/datasets/cd60551c99f0421da412f79d2c7fe52b_55.geojson')
    
     .then(r => r.json())
     .then(data => { 
         const wicStoresArray = data.features
         dispatch({type: SET_WIC_MARKETS, payload: wicStoresArray})
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