import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
//redux
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
//components
import MentalHealth from './MentalHealth'
import PrimaryCareMenu from './PrimaryCareMenu'
import HealthMenu from './HealthMenu'
import{  NavBar } from '../components/NavBar'
import ItemDetail from '../components/ItemDetail'
import { MentalHealthItemDetail } from '../components/HealthComponents/MentalHealthItemDetail'
import PrimaryCareItemDetail  from '../components/HealthComponents/PrimaryCareItemDetail'
//helper function 
import { nameDeSlug } from '../helperFunctions/HelperFunctions'
import ClinicsMenu from './ClinicsMenu';

 class HealthMain extends Component {
    componentDidMount(){
        this.props.getChildMentalHealthProviders()
        this.props.getAdultMentalHealthProviders()
        this.props.getDialysisClinics()
        this.props.getPrimaryCareCenters()
        this.props.getHospitals()
        this.props.getPharmacies()
        this.props.getHIVClinics()
    }
    
    getMentalHealthLocation(paramsName){
        const locationName = nameDeSlug(paramsName)
        const allMentalHealLocations =[...this.props.childMentalHealthProviders, ...this.props.adultMentalHealthProviders]
        const locationObj = allMentalHealLocations.find((location) => location.properties.NAME === locationName)
        return locationObj
    }

    getPrimaryCareCenters(paramsName){
        const locationName = nameDeSlug(paramsName)
        const allClinicLocations =[...this.props.hospitals, ...this.props.primaryCareCenters, ...this.props.pharmacies]
        const locationObj = allClinicLocations.find((location) => location.properties.NAME === locationName)
        return locationObj
    }

    getClinicLocation(paramsName){
        const locationName = nameDeSlug(paramsName)
        const allClinicLocations =[...this.props.dialysisClinics, ...this.props.hivClinics]
        const locationObj = allClinicLocations.find((location) => location.properties.NAME === locationName)
        return locationObj
    }

    render(){
        return(
            <div className="health-2 bg-div">  
                <Route exact path='/health' render={() => <HealthMenu  />} />        
                <Route exact path='/health/mental-health' render={() => {
                    return < MentalHealth 
                            childMentalHealthProviders={this.props.childMentalHealthProviders}
                            adultMentalHealthProviders={this.props.adultMentalHealthProviders}
                        />
                }}/>  
                <Route exact path='/health/mental-health/:id' render={ ({match}) => { 
                    return <MentalHealthItemDetail 
                        location={this.getMentalHealthLocation(match.params.id)} />
                }}/>
                <Route exact path='/health/primary-care' render={() => {
                    return < PrimaryCareMenu 
                            primaryCareCenters={this.props.primaryCareCenters}
                            hospitals={this.props.hospitals}
                            pharmacies={this.props.pharmacies}
                        />
                }}/>
                <Route exact path='/health/primary-care/:id' render={ ({match}) => { 
                        return <PrimaryCareItemDetail 
                            location={this.getPrimaryCareCenters(match.params.id)} 
                        />
                }}/> 
                <Route exact path='/health/clinics' render={() => {
                    return < ClinicsMenu 
                            dialysisClinics={this.props.dialysisClinics}
                            hivClinics={this.props.hivClinics}
                    />
                }}/>
                <Route exact path='/health/clinics/:id' render={ ({match}) => { 
                    return <ItemDetail 
                        location={this.getClinicLocation(match.params.id)} 
                    />
                }}/>  
                <Route exact path='/health/treatment' render={() => {
                    return < ClinicsMenu 
// need to add Youth Rehab and Opoid Treatment reducers etc
                        dialysisClinics={this.props.dialysisClinics}
                        primaryCareCenters={this.props.primaryCareCenters}
                    />
                }}/>
                <Route exact path='/health/treatment/:id' render={ ({match}) => { 
                    return <PrimaryCareItemDetail 
                        location={this.getClinicLocation(match.params.id)} 
                    />
                }}/>           
                <NavBar section={"health"} />
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        childMentalHealthProviders: state.childMentalHealthProviders,
        adultMentalHealthProviders: state.adultMentalHealthProviders,
        dialysisClinics: state.dialysisClinics,
        primaryCareCenters: state.primaryCareCenters,
        hospitals: state.hospitals,
        pharmacies: state.pharmacies,
        hivClinics: state.hivClinics
    }
}
//need to wrap the componenent 'withRouter' because it won't rerender the children unless
// its state or props change, which are not changing when the route changes
export default withRouter(connect(mapStateToProps, actions )(HealthMain))