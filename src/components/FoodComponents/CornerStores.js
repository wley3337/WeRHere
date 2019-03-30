import React, {PureComponent} from 'react'
import { Route, withRouter } from 'react-router-dom'
//redux
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
//components

//helper function 
import { nameDeSlug } from '../../helperFunctions/HelperFunctions'

class CornerStores extends PureComponent {
    render(){
        return(
            <div>CornerStores</div>
            // <Route exact path='/food/corner-stores/:id' render={ ({match}) => { 
            //     return <PrimaryCareItemDetail 
            //         location={this.getPrimaryCareCenters(match.params.id)} 
            //     />
        )
    }
}

const mapStateToProps = state =>{
    return {
        healthyCornerStores: state.healthyCornerStores
    }
}
export default withRouter(connect(mapStateToProps, actions)(CornerStores))