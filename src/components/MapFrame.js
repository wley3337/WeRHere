import React from 'react'
//library components
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl"

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