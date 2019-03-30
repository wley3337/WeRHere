import React, {PureComponent} from 'react'
import { Route, withRouter } from 'react-router-dom'
//redux
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
//components
import { NavBar } from '../components/NavBar'
import { FoodMenu } from './FoodMenu'
import JoyfulFood from '../components/FoodComponents/JoyfulFood';
import CornerStores from '../components/FoodComponents/CornerStores';
import WIC from '../components/FoodComponents/WIC';

class FoodMain extends PureComponent {
    componentDidMount(){
        this.props.getJoyfulFoodMarkets()
        this.props.getHealthyCornerStores()
        this.props.getWICStores()
    }

    render(){
        return(
            <div className="food-2 bg-div">  
                <Route exact path='/food' component={FoodMenu} />  

            {/* ******* put in explanations for each menu about the program at the top before the map */}
                <Route exact path='/food/joyful-food' component={JoyfulFood} />  
               
                <Route exact path='/food/corner-stores' component={CornerStores} />
            
                <Route exact path='/food/wic' component={WIC} />
                
                <NavBar section={"food"} />
        </div>
    )
}
}

export default withRouter(connect(null, actions)(FoodMain))