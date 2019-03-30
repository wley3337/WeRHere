import React, {PureComponent} from 'react'
import { Route, withRouter } from 'react-router-dom'
//redux
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
//components

//helper function 
import { nameDeSlug } from '../../helperFunctions/HelperFunctions'

class JoyfulFood extends PureComponent { 
    render(){
        return(
            <div>JoyfulFood</div>
            // <Route exact path='/food/joyful-food/:id' render={ ({match}) => { 
            //     return <MentalHealthItemDetail 
            //         location={this.getMentalHealthLocation(match.params.id)} />
            // }}/>
        )
    }
}

const mapStateToProps = state =>{
    return {
        joyfulFoodMarkets: state.joyfulFoodMarkets
    }
}
export default withRouter(connect(mapStateToProps, actions)(JoyfulFood))