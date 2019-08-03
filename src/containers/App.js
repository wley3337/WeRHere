import React, { Component } from 'react';
//library components
import { Route } from  'react-router-dom';
//components
import { HomePg } from './HomePg';
import HealthMain from './HealthMain';
import FoodMain from './FoodMain';
import ShelterMain from './ShelterMain';
import ServiceMain from './ServiceMain'
//css files
import 'semantic-ui-css/semantic.min.css';
import '../css/index.css';
import { NavBar } from '../components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="container">
       <Route exact path="/" render ={() => <HomePg />}/>
       <Route path="/health" render ={() => {
         return(
            <React.Fragment>
              <HealthMain/>
              <NavBar section={"health"}/>
            </React.Fragment>
          )
        }
       }/>
       <Route path="/food" render ={() => {
        return(
          <React.Fragment>
            <FoodMain/>
            <NavBar section={"food"}/>
          </React.Fragment>
        )
        }}/>
       <Route path="/shelter" render ={() => {
         return(
          <React.Fragment>
            <ShelterMain/>
            <NavBar section={"shelter"}/>
          </React.Fragment>
       )}}/>
       <Route path ="/services" render={() =>{
        return(
          <React.Fragment>
            <ServiceMain />
            <NavBar section={"services"}/>
          </React.Fragment>
       )}} />
      </div>
    );
  }
}

export default App;
