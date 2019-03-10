import React, {PureComponent} from 'react'
import { Route, withRouter } from 'react-router-dom'
//redux
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
//components
import { NavBar } from '../components/NavBar'
import { FoodMenu } from './FoodMenu'
import ItemDetail from '../components/ItemDetail'
//helper function 
import { nameDeSlug } from '../helperFunctions/HelperFunctions'

class FoodMain extends PureComponent {
    componentDidMount(){
        this.props.getJoyfulFoodMarkets()
        this.props.getHealthyCornerStores()
        this.props.getWICStores()
    }

    render(){
        return(
            <div className="food-2 bg-div">  
                <Route exact path='/food' render={() => <FoodMenu  />} />        
                {/* <Route exact path='/food/joyful-food' render={() => {
                    // return < MentalHealth 
                    //         childMentalHealthProviders={this.props.childMentalHealthProviders}
                    //         adultMentalHealthProviders={this.props.adultMentalHealthProviders}
                    //     />
                }}/>  
                <Route exact path='/food/joyful-food/:id' render={ ({match}) => { 
                    return <MentalHealthItemDetail 
                        location={this.getMentalHealthLocation(match.params.id)} />
                }}/>
                <Route exact path='/food/corner-stores' render={() => {
                    return < PrimaryCareMenu 
                            primaryCareCenters={this.props.primaryCareCenters}
                            hospitals={this.props.hospitals}
                            pharmacies={this.props.pharmacies}
                        />
                }}/>
                <Route exact path='/food/corner-stores/:id' render={ ({match}) => { 
                        return <PrimaryCareItemDetail 
                            location={this.getPrimaryCareCenters(match.params.id)} 
                        />
                }}/> 
                <Route exact path='/food/wic' render={() => {
                    return < ClinicsMenu 
                            dialysisClinics={this.props.dialysisClinics}
                            hivClinics={this.props.hivClinics}
                    />
                }}/>
                <Route exact path='/food/wic/:id' render={ ({match}) => { 
                    return <ItemDetail 
                        location={this.getClinicLocation(match.params.id)} 
                    />
                }}/>   */}
                
                <NavBar section={"food"} />
        </div>
    )
}
}

const mapStateToProps = (state) =>{
return {
   
}
}
//need to wrap the componenent 'withRouter' because it won't rerender the children unless
// its state or props change, which are not changing when the route changes
export default withRouter(connect(mapStateToProps, actions )(FoodMain))