import React from 'react';
import PetCreator from '../PetCreator/PetCreator';
import PetHandler from '../PetHandler/PetHandler';
import Pet from '../Pet/Pet';

const limits = { happiness: 10, hunger: 10 };

class Audino extends React.Component {

  constructor(props) {
    super(props);

    this.state = {name: 'Nonam', species: 'Ditto', happiness: 0, hunger: 0};
    this.state = {petCreated: false};

    this.createPet = this.createPet.bind(this);
    this.adjustHappiness = this.adjustHappiness.bind(this);
    this.adjustHunger = this.adjustHunger.bind(this);
  }

  createPet(givenName, givenSpecies) {
    this.setState({
      name: givenName,
      species: givenSpecies,
      happiness: 5,
      hunger: 5,
      petCreated: true
    });
  }

  adjustHappiness(n) {
    const newHappiness = this.state.happiness + n;
    if(newHappiness > 0 && newHappiness <= limits.happiness) {
      this.setState({
        happiness: newHappiness
      });
    }
  }

  adjustHunger(n) {
    const newHunger = this.state.hunger + n;
    if(newHunger > 0 && newHunger <= limits.hunger) {
      this.setState({
        hunger: newHunger
      });
    }
  }

  render() {
    const petDisplay = this.state.petCreated;
    const appContent = petDisplay
      ? (
        <div>
          <Pet
            name={this.state.name}
            species={this.state.species}
            happiness={this.state.happiness}
            hunger={this.state.hunger} />
          <PetHandler
            handleHappiness={this.adjustHappiness}
            handleHunger={this.adjustHunger} />
        </div>)
      : (
        <PetCreator
          onSubmit={this.createPet} />);

    return (
      <div>
        {appContent}
      </div>
    );
  }
}

export default Audino;
