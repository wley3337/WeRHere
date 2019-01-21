import React, { Component } from 'react';
import './App.css';

//icons:
// import PWAsafety from '/icons/PWAsafety.svg'
// import PWAfood from '/icons/PWAfood.svg'
// import PWAhealth from '/icons/PWAhealth.svg'
// import PWAshelter from '/icons/PWAshelter.svg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={'/icons/PWAsafety.svg'} className="triangle-logo" alt="safety"  />
        <img src={'/icons/PWAfood.svg'} className="triangle-logo" alt="food"  />
        <img src={'/icons/PWAhealth.svg'} className="triangle-logo" alt="health"  />
        <img src={'/icons/PWAshelter.svg'} className="triangle-logo" alt="shelter"  />
      </div>
    );
  }
}

export default App;
