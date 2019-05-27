import React, { Component } from 'react';
//library components
import { Route } from  'react-router-dom';
//components
import { HomePg } from './HomePg';
import HealthMain from './HealthMain';
import FoodMain from './FoodMain';
import ShelterMain from './ShelterMain';
//css files
import 'semantic-ui-css/semantic.min.css';
import '../css/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Route exact path="/" render ={() => <HomePg />}/>
       <Route path="/health" render ={() => <HealthMain />}/>
       <Route path="/food" render ={() => <FoodMain />}/>
       <Route path="/shelter" render ={() => <ShelterMain />}/>
      </div>
    );
  }
}

export default App;
