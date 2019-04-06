import React, {PureComponent} from 'react'
import { Route, withRouter } from 'react-router-dom'
//redux
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
//components
import { NavBar } from '../components/NavBar'
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
                    return <MultimapContainer locations={this.props.joyfulFoodMarkets} prgDescription={this.joyfulFoodMarketProgramDescription()}/>}}  
                />  
               
                <Route exact path='/food/corner-stores' render={() =>{return <MultimapContainer locations={this.props.healthyCornerStores} prgDescription={this.healthyCornerStoresProgramDescription()} />}} />
            
                <Route exact path='/food/wic' render={() =>{return <MultimapContainer locations={this.props.wicMarkets} prgDescription={this.wicProgramDescription()} />}} />
                
                <NavBar section={"food"} />
            </div>
        )
    }
}

const mapStateToProps= (state) =>{
    return{
        healthyCornerStores: state.healthyCornerStores,
        joyfulFoodMarkets: state.joyfulFoodMarkets,
        wicMarkets: state.wicMarkets
    }
}

export default withRouter(connect(mapStateToProps, actions)(FoodMain))