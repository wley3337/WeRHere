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