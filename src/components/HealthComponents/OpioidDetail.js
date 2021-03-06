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
                <div className="health-text h-detail-wrapper">
                    <h1 className="name">{location.properties.ORG}</h1>
                    <p >Facility number: <span className="space-left char-space">{location.properties.MAR_ID}</span></p>
                    <p className="address">Address: <span className="space-left char-space">{ `${location.properties.ADDRESS}` }</span></p>

                    {!location.properties.PHONE ? null :
                        <div className="phone-wrapper">
                            <p className="phone-1"> Phone: 
                                {phoneToDigits(opioidPhone1(location)).length === 10 ? 
                                        <a href={`tel: ${opioidPhone1(location)}`}>{opioidPhone1(location)}</a> 
                                    :
                                        opioidPhone1(location)
                                } 
                            </p> 
                            {!opioidPhone2(location) ? null :
                                <p className="phone-2"> 
                                    <a href={`tel: ${phoneToDigits(opioidPhone2(location))}`}>
                                        {opioidPhone2(location)}
                                    </a>
                                </p>
                            }
                        </div>
                    }
                    <p>
                        Hours: 
                        <span className="space-left char-space">
                            {location.properties.HOURS.replace("*", " ")}
                        </span>
                    </p>
                    <div className="health-menu">
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