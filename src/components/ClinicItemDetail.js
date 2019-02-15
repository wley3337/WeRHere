import React, {PureComponent} from 'react'

import MapFrame from './MapFrame';
import { Input, Menu, Segment } from 'semantic-ui-react'
import { ServiceDetails } from './ServiceDetails';

class ClinicItemDetail extends PureComponent { 
    state={ activeMenuItem: 'Map'}

    setActiveMenuItem= (focus) =>{
        this.setState({
            activeMenuItem: focus
        })
    }

    displayList = () =>{
        switch(this.state.activeMenuItem){
            case 'Map':
                return []

            case 'Services':
                return []

            default:
                return []
        }
    }
    
   render(){
     const  {location} = this.props
       return (!location ? null 
               :
   
               <div className="health-text">
                   <h1>{location.properties.NAME}</h1> 
                   <p> Phone: {`${location.properties.PHONE}`}</p>
   
                   <h2>Address: {`${location.properties.ADDRESS}`}</h2>
   
                   <div>

                    <Menu attached='top' tabular >
                        <Menu.Item 
                            name='Map' 
                            active={this.state.activeMenuItem === 'Map'} 
                            onClick={() => this.setActiveMenuItem('Map')} 

                        />
                        <Menu.Item 
                            name='Services' 
                            active={this.state.activeMenuItem === 'Services'} 
                            onClick={() => this.setActiveMenuItem('Services')}
                        
                            />
                    </Menu>
                        <Segment attached='bottom'>
                            {this.state.activeMenuItem === 'Map' ?
                                    <div>

                                        {/* <h1 style={{"color": "blue"}}>map</h1> */}
                                        <MapFrame 
                                            lat={location.geometry.coordinates[0]} 
                                            long={location.geometry.coordinates[1]}
                                            sprite="doctor-15"
                                        />
                                    </div> 
                                :
                                <ServiceDetails properties={location.properties}/> 
                        
                            }

                        </Segment>

                   </div>
   
               </div>
       )

   }
}

export default ClinicItemDetail