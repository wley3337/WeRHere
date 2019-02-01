import React, { Component } from 'react';
import { Route } from  'react-router-dom';

//components
import { HomePg } from './HomePg';
import HealthMain from './HealthMain';

//css files
import 'semantic-ui-css/semantic.min.css';
import '../css/index.css';

class App extends Component {
  // A[10; 0] B[0; 0] C[5; 8.66]
  //equilateral triangle coordinates for triangle with 10 unit sides: A[0; -100] B[-100; -100] C[-50; -14.44]
  render() {
    return (
      <div className="App">
       <Route exact path="/" render ={() => <HomePg />}/>
       <Route exact path="/health" render ={() => <HealthMain />}/>
      </div>
    );
  }
}

export default App;
