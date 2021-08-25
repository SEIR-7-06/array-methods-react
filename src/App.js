import React from 'react';
import planetData from './planetData';
import './App.css';

class App extends React.Component {
  // 1. Given the array of planet data render a list of each of the
  // planet names.
  renderPlanets() {
    return planetData.map((planet, idx) => {
      return (
        <p key={idx}>{planet.name}</p>
      );
    });
  };


  // 2. Show the name and diameter of each planet.
  // renderPlanets() {
  //   // Place code here
  // }


  // 3. Show the name and length of day for each planet.
  // renderPlanets() {
  //   // Place code here
  // }


  // 4. Show the name and length of day for each planet. Prepend each planet name with its position in the list in the array starting with the number 1.
  // For example...
  // <div>
  //   <h4>1. Mercury</h4>
  //   <p>Length Of Day: 4222.6 hours</p>
  // </div>

  // renderPlanets() {
  //   // Place code here
  // }


  // 5. Show the name, diameter and length of day of planet Earth.
  // renderPlanets() {
  //   // Place code here
  // }


  // 6. Show the name, diameter, and length of day for the planet that has a length of day of 10.7.
  // renderPlanets() {
  //   // Place code here
  // }

  // 7.
  // Show the name, diameter, and length of day for all planets with a ring system.
  // renderPlanets() {
  //   // Place code here
  // }

  // Hungry for More:

  // 8.
  // Show a list of Jupiter's moons.
  // renderPlanets() {
  //   // Place code here
  // }

  // 9.
  // Find all of the planet's with more than 2 moons. Show a combined list of all of the moons for those planets.
  // renderPlanets() {
  //   // Place code here
  // }


  // 10.
  // Calculate the total sum of the diameters of all planets that have a ring system. Display that sum on the page.
  // renderPlanets() {
  //   // Place code here
  // }

  render() {
    return (
      <div className="App">
        <h1>Planets Data</h1>
        {this.renderPlanets()}  
      </div>
    );
  }
}

export default App;
