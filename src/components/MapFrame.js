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
// along with WeRHere.  If not, see <https://www.gnu.org/licenses/>