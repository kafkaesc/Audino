import React from 'react';

class Pet extends React.Component {
  render() {
    let name = this.props.name;
    let species = this.props.species;
    let happiness = this.props.happiness;
    let hunger = this.props.hunger;
    return (
      <div>
        <h2>Your pet {name} is a {species}!</h2>
        <p>Happiness: {happiness}/10</p>
        <p>Hunger: {hunger}/10</p>
      </div>
    );
  }
}

export default Pet;
