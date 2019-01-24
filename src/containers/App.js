import React, { Component } from 'react';
import { Route } from  'react-router-dom';

//components
import MainMenu from '../components/mainMenu';

//css files
import '../css/App.css';

class App extends Component {
  // A[10; 0] B[0; 0] C[5; 8.66]
  //equilateral triangle coordinates for triangle with 10 unit sides: A[0; -100] B[-100; -100] C[-50; -14.44]
  render() {
    return (
      <div className="App">
       <Route exact path="/" render ={() => <MainMenu />}/>
      </div>
    );
  }
}

export default App;
