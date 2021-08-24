const planetData = [
  {
    name: "Mercury",
    ringSystem: false,
    moons: [],
    diameter: 4879,
    lengthOfDay: 4222.6
  },
  {
    name: "Venus",
    ringSystem: false,
    moons: [],
    diameter: 12104,
    lengthOfDay: 2802.0
  },
  {
    name: "Earth",
    ringSystem: false,
    moons: ["The Moon"],
    diameter: 12756,
    lengthOfDay: 24.0
  },
  {
    name: "Mars",
    ringSystem: false,
    moons: ["Phobos", "Deimos"],
    diameter: 6792,
    lengthOfDay: 24.7	
  },
  {
    name: "Jupiter",
    ringSystem: true,
    moons: ["Europa", "Ganymede", "Io", "Callisto"],
    diameter: 142984,
    lengthOfDay: 9.9
  },
  {
    name: "Saturn",
    ringSystem: true,
    moons: ["Titan", "Enceladus", "Rhea", "Mimas"],
    diameter: 120536,
    lengthOfDay: 10.7
  },
  {
    name: "Uranus",
    ringSystem: true,
    moons: ["Miranda", "Titania", "Ariel", "Umbriel"],
    diameter: 51118,
    lengthOfDay: 17.2
  },
  {
    name: "Neptune",
    ringSystem: true,
    moons: ["Triton", "Nereid"],
    diameter: 49528,
    lengthOfDay: 16.1	
  }
];

export default planetData;
