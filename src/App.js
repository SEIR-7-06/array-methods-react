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


  // 2. Given the array of planet data, map through the array to
  // render a list displaying each of the plenet's name and their
  // diameter.
  // renderPlanets() {
  //   // Place code here
  // }


  // 3. Given the array of planet data, map through the array to
  // render a list display just the name and length of day of
  // each planet.
  // renderPlanets() {
  //   // Place code here
  // }


  // 4. Given the array of planet data, map through the array to
  // render a list display the name and length of day of each
  // planet. Prepend each planet name with it's index in the array.
  // For example..
  // <div>
  //   <h4>1. Mercury</h4>
  //   <p>Length Of Day: 4222.6 hours</p>
  // </div>

  // renderPlanets() {
  //   // Place code here
  // }


  // 5. Given the array of planet data 'find' the planet with the name
  // of 'Earth' and render it's name, diameter, and length of day. Use
  // one of the array iterator methods to find the planet.
  // renderPlanets() {
  //   // Place code here
  // }


  // 6. Given the array of planet data 'find' the planet with the length
  // of day of 10.7 render it's name, diameter, and length of day. Use
  // one of the array iterator methods to find the planet.
  // renderPlanets() {
  //   // Place code here
  // }

  // 7.
  // - Given the array of planet data filter for an array of all
  // the planets with a ring system.
  // - Map through the filtered array to render the list of planets
  // displaying their name, diameter, and length of day.
  // renderPlanets() {
  //   // Place code here
  // }

  // Hungry for More:

  // 8.
  // - Given the array of planet data 'find' the planet with the name
  // of 'Jupiter'.
  // - Map through the moons array of the found planet, to display a
  // list of all of the moons.
  // renderPlanets() {
  //   // Place code here
  // }

  // 9.
  // - Given the array of planet data create an array of all the planets with more than 2 moons.
  // - Combine the moons of those planets into a new moons array.
  // - Loop through the moons array to display a list of all of the moons.
  // renderPlanets() {

  // }


  // 10.
  // - Given the array of planet data create an array of all the planets with a ring system.
  // - Loop through the array to calculate the total sum of the diameter of these planets.
  // - Display this sum to the page.
  // renderPlanets() {

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
