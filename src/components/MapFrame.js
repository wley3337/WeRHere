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

const mapBoxToken = "pk.eyJ1Ijoid2xleTMzMzciLCJhIjoiY2pzMGQ0N2R5MWkwcTQzbHZ6YnM5bjBwMCJ9.-RiMyhrgweV4aKVG3GfNbA"
const Map = ReactMapboxGl({
    accessToken: mapBoxToken
  });

const MapFrame =({ lat, long, sprite}) => {
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
                zoom={[14]}
            >
                <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": sprite }}>
                    <Feature coordinates={[lat, long]}/>
                </Layer>
            </Map>
        )
}

export default MapFrame