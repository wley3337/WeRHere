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
    state={ activeMenuItem: 'All DC'}

    setActiveMenuItem = (focus) =>{
        this.setState({
            activeMenuItem: focus
        })
    }
    
    slectedMenuItem = ()=> {
        switch(this.state.activeMenuItem){
            case "All DC":
                return (
                    <MultiPointMapFrame 
                        lat={-77.039003}
                        long={38.889931}
                        zoom={10}
                        sprite="restaurant-15"
                        pointArray={this.props.healthyCornerStores}
                    /> )
            case "NW":
                return <p>This program is only available in NE, SW, SE</p>
            case "NE":
                return (
                    <MultiPointMapFrame 
                        lat={-76.970003}
                        long={38.93}
                        zoom={11}
                        sprite="restaurant-15"
                        pointArray={this.props.healthyCornerStores.filter(location => location.properties.ADDRESS.includes("NE"))}
                    /> )
            case "SW":
                return (
                    <MultiPointMapFrame 
                        lat={-77.0}
                        long={38.85}
                        zoom={11.5}
                        sprite="restaurant-15"
                        pointArray={this.props.healthyCornerStores.filter(location => location.properties.ADDRESS.includes("SW"))}
                    /> )
            case "SE":
            return (
                <MultiPointMapFrame 
                    lat={-76.970003}
                    long={38.87}
                    zoom={11}
                    sprite="restaurant-15"
                    pointArray={this.props.healthyCornerStores.filter(location => location.properties.ADDRESS.includes("SE"))}
                /> )
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
                    {/* need to add the pop for details on click of pin */}
                    <p>Represents corner stores currently participating in DC Central Kitchen's (DCCK) Healthy Corners program. These corner stores sell fresh, healthy produce options</p>
                </div>
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
                        <div id="map-div">
                            {this.slectedMenuItem()} 
                        </div>
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