import React, {PureComponent} from 'react'
import { Route, withRouter } from 'react-router-dom'
//redux
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
//library components
import { Menu, Segment } from 'semantic-ui-react'
//components

//helper function 
import { nameDeSlug } from '../../helperFunctions/HelperFunctions'
import MultiPointMapFrame from '../MultiPointMapFrame';

class CornerStores extends PureComponent {
    state={ activeMenuItem: 'Map'}

    setActiveMenuItem = (focus) =>{
        this.setState({
            activeMenuItem: focus
        })
    }
    
    slectedMenuItem = ()=> {
        switch(this.state.activeMenuItem){
            case "All DC":
                return <div id="map-div">
                        <MultiPointMapFrame 
                            lat={-77.039003}
                            long={38.889931}
                            zoom={10}
                            sprite="restaurant-15"
                            pointArray={this.props.healthyCornerStores}
                        />
                       </div>
                    // <div id="map-div">
                    //     {location.geometry.coordinates[0] < -75 && location.geometry.coordinates[0] > -80 ?  
                    //         <MapFrame 
                    //             lat={location.geometry.coordinates[0]} 
                    //             long={location.geometry.coordinates[1]}
                    //             sprite="doctor-15"
                    //         />
                    //         :
                    //         <h1>No Map information available</h1>
                    //     }
                    // </div> 
                
            case "NW":
                return 
            case "NE":
                return 
            case "SW":
                return 
            case "SE":
                return 
            default:
                return null
        }
    }

// <Route exact path='/food/corner-stores/:id' render={ ({match}) => {  */}
//     return <PrimaryCareItemDetail 
//       location={this.getPrimaryCareCenters(match.params.id)} 
//   />
    render(){
       return(
            <div className="food-text">
                <div>
                    <Menu attached='top' tabular >
                        <Menu.Item 
                            name='All DC' 
                            active={this.state.activeMenuItem === 'All DC'} 
                            onClick={() => this.setActiveMenuItem('All DC')} 
                        />
                        
                        <Menu.Item 
                            name='NW' 
                            active={this.state.activeMenuItem === 'NW'} 
                            onClick={() => this.setActiveMenuItem('NW')}
                        />
                        <Menu.Item 
                            name='NE'
                            active={this.state.activeMenuItem === 'NE'}
                            onClick={() => this.setActiveMenuItem('NE')}
                        />
                        <Menu.Item 
                            name='SW'
                            active={this.state.activeMenuItem === 'SW'}
                            onClick={() => this.setActiveMenuItem('SW')}
                        />
                        <Menu.Item 
                            name='SE'
                            active={this.state.activeMenuItem === 'SE'}
                            onClick={() => this.setActiveMenuItem('SE')}
                        />
                    </Menu>
                    <Segment attached='bottom'>
                        {/* render map with array of map points based on a filter of state object (ex: nw only addresses w/ NW) */} 
                        {this.slectedMenuItem()} 
                    </Segment>
                </div>
            </div>
       )
    }
}

const mapStateToProps = state =>{
    return {
        healthyCornerStores: state.healthyCornerStores
    }
}
export default withRouter(connect(mapStateToProps, actions)(CornerStores))