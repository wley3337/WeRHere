import React, {PureComponent} from 'react'
import { Route, withRouter } from 'react-router-dom'
//redux
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
//components
import { FoodMenu } from './FoodMenu'
import MultimapContainer from './MultiMapContainer';

class FoodMain extends PureComponent {
    componentDidMount(){
        this.props.getJoyfulFoodMarkets()
        this.props.getHealthyCornerStores()
        this.props.getWICStores()
    }

    healthyCornerStoresProgramDescription(){
        return <p>Represents corner stores currently participating in DC Central Kitchen's (DCCK) Healthy Corners program. These corner stores sell fresh, healthy produce options.</p>
    }

    wicProgramDescription(){
        return <p>Represents stores in the District of Columbia which accept DC WIC benefits, including both grocery stores and pharmacies (special formula only). Note that stores which can accept DC WIC benefits but are not located within the District, such as those in Prince George's County, MD, are not included.</p>
    }

    joyfulFoodMarketProgramDescription(){
        return <p>Represents schools at which Martha's Table and Capital Area Food Bank run the Joyful Food Markets program. These are elementary schools in Wards 7 and 8.Compiled by the Office of Planning based on Martha's Table's public list of schools. Since Martha's Table is in the process of expanding the program, visit <a href="http://marthastable.org/programs/foodaccessprograms/">their sight</a> for the most up-to-date list.</p>
    }

    render(){
       
        return(
            <div className="food-2 bg-div">  
                <Route exact path='/food' component={FoodMenu} />  
                
                <Route exact path='/food/joyful-food' render={() =>{
                    return <MultimapContainer locations={this.props.joyfulFoodMarkets} prgDescription={this.joyfulFoodMarketProgramDescription()} sprite="restaurant-15"/> } }  
                />  
               
                <Route exact path='/food/corner-stores' render={() =>{return <MultimapContainer locations={this.props.healthyCornerStores} prgDescription={this.healthyCornerStoresProgramDescription()} sprite="restaurant-15" />}} />
            
                <Route exact path='/food/wic' render={() =>{return <MultimapContainer locations={this.props.wicMarkets} prgDescription={this.wicProgramDescription()} sprite="restaurant-15"/>}} />
            </div>
        )
    }
}

const mSTP= (state) =>{
    return{
        healthyCornerStores: state.healthyCornerStores,
        joyfulFoodMarkets: state.joyfulFoodMarkets,
        wicMarkets: state.wicMarkets
    }
}

export default withRouter(connect(mSTP, actions)(FoodMain))


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