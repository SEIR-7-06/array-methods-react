# Solutions

Do your best to work through each challenge. If you've been stuck on any particular challenge for more than 20 minutes take a peek at the solution. There is of course more than one way to solve each of these problems, so feel free to use thes solutions as inspiration or food for thought.

<details>
  <summary>Challenge #1</summary>

  Given the array of planet data render a list of each of the planet names.

  ```js
  renderPlanets() {
    const planetNames = planetData.map((planet) => {
      return <p>{planet.name}</p>;
    });

    return planetNames;
  };
  ```
</details>

<br>

<details>
  <summary>Challenge #2</summary>

  Given the array of planet data, map through the array to
  render a list displaying each of the plenet's name and their
  diameter.

  ```js
  renderPlanets() {
    const planetJSX = planetData.map((planet) => {
      return (
        <div>
          <h4>{planet.name}</h4>
          <p>Diameter: {planet.diameter}</p>
        </div>
      )
    });

    return planetJSX;
  }
  ```
</details>

<br>

<details>
  <summary>Challenge #3</summary>

  Given the array of planet data, map through the array to
  render a list display just the name and length of day of
  each planet.

  ```js
  renderPlanets() {
    const planetJSX = planetData.map((planet) => {
      return (
        <div>
          <h4>{planet.name}</h4>
          <p>Length of Day: {planet.lengthOfDay}</p>
        </div>
      );
    });

    return planetJSX;
  }
  ```
</details>

<br>

<details>
  <summary>Challenge #4</summary>

  Given the array of planet data, map through the array to
  render a list display the name and length of day of each
  planet. Prepend each planet name with it's index in the array.
  For example...
  ```html
  <div>
    <h4>1. Mercury</h4>
    <p>Length Of Day: 4222.6 hours</p>
  </div>
  ```

  ```js
  renderPlanets() {
    const planetJSX = planetData.map((planet, idx) => {
      return (
        <div>
          <h4>{idx + 1}. {planet.name}</h4>
          <p>Length of Day: {planet.lengthOfDay}</p>
        </div>
      );
    })

    return planetJSX;
  }
  ```
</details>

<br>

<details>
  <summary>Challenge #5</summary>

  Given the array of planet data 'find' the planet with the name
  of 'Earth' and render it's name, diameter, and length of day. Use
  one of the array iterator methods to find the planet.

  ```js
  renderPlanets() {
    const Earth = planetData.find((planet) => {
      return planet.name === 'Earth';
    });

    return (
      <div>
        <h4>{Earth.name}</h4>
        <p>Diameter: {Earth.diameter}</p>
        <p>Length of Day: {Earth.lengthOfDay} hours</p>
      </div>
    )
  };
  ```
</details>

<br>

<details>
  <summary>Challenge #6</summary>

  Given the array of planet data 'find' the planet with the length
  of day of 10.7 render it's name, diameter, and length of day. Use
  one of the array iterator methods to find the planet.

  ```js
  renderPlanets() {
    const foundPlanet = planetData.find((planet) => {
      return planet.lengthOfDay === 10.7;
    });

    return (
      <div>
        <h4>{foundPlanet.name}</h4>
        <p>Diameter: {foundPlanet.diameter}</p>
        <p>Length of Day: {foundPlanet.lengthOfDay} hours</p>
      </div>
    )
  }
  ```
</details>

<br>

<details>
  <summary>Challenge #7</summary>

  - Given the array of planet data filter for an array of all
  the planets with a ring system.
  - Map through the filtered array to render the list of planets
  displaying their name, diameter, and length of day.

  ```js
  renderPlanets() {
    const planetsWRings = planetData.filter((planet) => {
      return planet.ringSystem === true;
    });

    const planetJSX = planetsWRings.map((planet) => {
      return (
        <div>
          <h4>{planet.name}</h4>
          <p>Diameter: {planet.diameter}</p>
          <p>Length Of Day: {planet.lengthOfDay}</p>
        </div>
      )
    });

    return planetJSX;
  }
  ```
</details>

<br>

<details>
  <summary>Challenge #8</summary>

  - Given the array of planet data 'find' the planet with the name
  of 'Jupiter'.
  - Map through the moons array of the found planet, to display a
  list of all of the moons.
  
  ```js
  renderPlanets() {
    const jupiter = planetData.find((planet) => planet.name === 'Jupiter');

    const moonJSX = jupiter.moons.map((moon) => {
      return <li>{moon}</li>;
    });

    return moonJSX;
  }
  ```
</details>

<br>