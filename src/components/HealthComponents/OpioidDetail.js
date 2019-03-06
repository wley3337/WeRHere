import React, {PureComponent} from 'react'
//library components
import { Menu, Segment } from 'semantic-ui-react'
//components
import MapFrame from '../MapFrame';

// helper functions
import { opioidPhone1, opioidPhone2, phoneToDigits } from '../../helperFunctions/HelperFunctions'

class OpioidDetail extends PureComponent { 
    state={ activeMenuItem: 'Map'}

    setActiveMenuItem = (focus) =>{
        this.setState({
            activeMenuItem: focus
        })
    }
    
    slectedMenuItem = (location)=> {
        switch(this.state.activeMenuItem){
            case "Map":
            return (
                <div id="map-div">
                    {location.geometry.coordinates[0] < -75 && location.geometry.coordinates[0] > -80 ?  
                        <MapFrame 
                            lat={location.geometry.coordinates[0]} 
                            long={location.geometry.coordinates[1]}
                            sprite="doctor-15"
                        />
                        :
                        <h1>No Map information available</h1>
                    }
                </div> 
            )
            default:
            return null
        }

    }


   render(){
        const  {location} = this.props 
        return (!location ? null 
                :
                <div className="health-text">
                    <h1>{location.properties.ORG}</h1>
                    <p>Facility number: {location.properties.MAR_ID}</p> 

                    {!location.properties.PHONE ? null :
                        <div>
                            <p> Phone: 
                                {phoneToDigits(opioidPhone1(location)).length === 10 ? 
                                        <a href={`tel: ${opioidPhone1(location)}`}>{opioidPhone1(location)}</a> 
                                    :
                                        opioidPhone1(location)
                                } 
                            </p> 
                            {!opioidPhone2(location) ? null :
                                <p> 
                                    <a href={`tel: ${phoneToDigits(opioidPhone2(location))}`}>
                                        {opioidPhone2(location)}
                                    </a>
                                </p>
                            }
                        </div>
                    }

                    <h3>Address: { `${location.properties.ADDRESS}` }</h3>
                    <p>Hours: {location.properties.HOURS.replace("*", "")}</p>
                    
                    <div>
                        <Menu attached='top' tabular >
                            <Menu.Item 
                                name='Map' 
                                active={this.state.activeMenuItem === 'Map'} 
                                onClick={() => this.setActiveMenuItem('Map')} 

                            /> 
                        </Menu>
                        <Segment attached='bottom'>
                            {this.slectedMenuItem(location)}
                        </Segment>
                    </div>
                </div>
        )
   }
}

export default OpioidDetail
