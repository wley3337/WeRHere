import React, {PureComponent} from 'react'
import { Route, withRouter } from 'react-router-dom'
//redux
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
//components

//helper function 
import { nameDeSlug } from '../../helperFunctions/HelperFunctions'

class WIC extends PureComponent { 
    render(){
        return(
            <div>WIC</div>
            // <Route exact path='/food/wic/:id' render={ ({match}) => { 
            //     return <ItemDetail 
            //         location={this.getClinicLocation(match.params.id)} 
            //     />
        // }}/> 
        )
        
    }
}

const mapStateToProps = state =>{
    return {
        wicMarkets: state.wicMarkets
    }
}
export default withRouter(connect(mapStateToProps, actions)(WIC))