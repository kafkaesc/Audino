import React from 'react';
import PetHelper from '../PetHelper/PetHelper';
import Pet from '../Pet/Pet';

class Audino extends React.Component {
  constructor(props) {
    super(props);

    this.state = {name: 'Nonam', species: 'Ditto', happiness: 5, hunger: 5};

    this.createPet = this.createPet.bind(this);
  }

  createPet(givenName, givenSpecies) {
    this.setState({
      name: givenName,
      species: givenSpecies
    });
  }

  render() {
    return (
      <div>
          <PetHelper
            onSubmit={this.createPet} />
          <Pet
            name={this.state.name}
            species={this.state.species}
            happiness={this.state.happiness}
            hunger={this.state.hunger} />
      </div>
    );
  }
}

export default Audino;
