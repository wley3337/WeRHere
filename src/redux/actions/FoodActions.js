import { 
        SET_JOYFUL_FOOD_MARKETS,
        SET_HEALTHY_CORNER_STORES,
        SET_WIC_MARKETS
                                } from './types'


//** fetch child mental health providers  */

export const getJoyfulFoodMarkets = () => dispatch => {
  
    // geojson:
      fetch('https://opendata.arcgis.com/datasets/693e023ace4f46818edbf0aa7d6a60d3_56.geojson')
    
     .then(r => r.json())
     .then(data => { 
        debugger
        //  const childProviderArray = data.features
        //  dispatch({type: SET_CHILD_MENTAL_HEALTH_PROVIDERS, payload: childProviderArray})
     })
 }