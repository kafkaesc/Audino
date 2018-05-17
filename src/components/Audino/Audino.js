import React from 'react';
import ReactDOM from 'react-dom';
import PetHelper from '../PetHelper/PetHelper';
import Pet from '../Pet/Pet';

class Audino extends React.Component {
  constructor(props) {
    super(props);

    this.state = {name: 'default', species: 'Fox', happiness: 5, hunger: 5};

    this.setName = this.setName.bind(this);
    this.changeSpecies = this.changeSpecies.bind(this);
  }

  setName(newName) {
    this.setState({
      name: newName
    });
  }

  changeSpecies(newSpecies) {
    this.setState({
      species: newSpecies
    });
  }

  render() {
    return (
      <div>
          <PetHelper
            onNamed={this.setName}
            onSpeciation={this.changeSpecies} />
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
