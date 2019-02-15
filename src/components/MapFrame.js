import React, { PureComponent } from 'react'
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

class MapFrame extends PureComponent{
    
     

    // componentDidMount(){
       
    //     this.map = new mapboxgl.Map({
    //         container: 'map',
    //         style: 'mapbox://styles/mapbox/streets-v11'
    //         });

    //     }

    //     componentWillUnmount(){
    //         this.map.remove()
    //     }




    render(){
       
       
        return(
            <Map
                //this is the style reference which is built on Map Box
                style="mapbox://styles/mapbox/streets-v9"
                // continaer properties
                containerStyle={{
                    height: "100vh",
                    width: "100vw"
                }}

                // Map starting center and zoom level( 0- is global, 20-is inside of a building)
                center={[-77.0369, 38.9072]}
                zoom={[16]}
            >
                <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "marker-15" }}>
                    <Feature coordinates={[-77.0369, 38.90]}/>
                </Layer>
            </Map>
        )
    }
}


export default MapFrame