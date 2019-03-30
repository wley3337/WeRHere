import React from 'react'
//library components
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl"

// refference for this: http://alex3165.github.io/react-mapbox-gl/documentation

// <bounding>
// <westbc>-77.039842</westbc>
// <eastbc>-76.749017</eastbc>
// <northbc>38.984893</northbc>
// <southbc>38.803348</southbc>
// </bounding>

/* <bounding>
<westbc>-77.109293</westbc>
<eastbc>-76.928198</eastbc>
<northbc>38.971504</northbc>
<southbc>38.824801</southbc>
</bounding> */ 

const mapBoxToken = process.env.REACT_APP_MAPBOX_API
const Map = ReactMapboxGl({
    accessToken: mapBoxToken
  });

const MultiPointMapFrame =({ lat, long, sprite, pointArray, zoom }) => {
    
    // debugger
    //     componentWillUnmount(){
    //         this.map.remove()
    //     }

      
        return(
            <Map
                //this is the style reference which is built on Map Box
                style="mapbox://styles/mapbox/streets-v9"
                // continaer properties
                containerStyle={{
                    height: "100%",
                    width: "100%"
                }}

                // Map starting center and zoom level( 0- is global, 20-is inside of a building)
                center={[lat, long]}
                zoom={[zoom]}
            >

                
                <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": sprite }}>
                    {pointArray.map(location => <Feature coordinates={[location.geometry.coordinates[0], location.geometry.coordinates[1]]}/>)}
                </Layer>
            </Map>
        )
    
}


export default MultiPointMapFrame