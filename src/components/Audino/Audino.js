import React from 'react';
import PetCreator from '../PetCreator/PetCreator';
import Pet from '../Pet/Pet';

class Audino extends React.Component {
  constructor(props) {
    super(props);

    this.state = {name: 'Nonam', species: 'Ditto', happiness: 0, hunger: 0};
    this.state = {petCreated: false};

    this.createPet = this.createPet.bind(this);
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

  render() {
    const petDisplay = this.state.petCreated;
    const appContent = petDisplay
      ? (<Pet
          name={this.state.name}
          species={this.state.species}
          happiness={this.state.happiness}
          hunger={this.state.hunger} />)
      : (<PetCreator
        onSubmit={this.createPet} />);
    return (
      <div>
        {appContent}
      </div>
    );
  }
}

export default Audino;
