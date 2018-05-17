import React from 'react';

let traits = {
  name: 'Nonam',
  species: 'Fox'
};

class PetCreator extends React.Component {
  constructor(props) {
    super(props);

    this.handleName = this.handleName.bind(this);
    this.handleSpecies = this.handleSpecies.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    const newName = event.target.value;
    traits.name = newName;
  }

  handleSpecies(event) {
    const newSpecies = event.target.value;
    traits.species = newSpecies;
  }

  handleSubmit(event) {
    this.props.onSubmit(traits.name, traits.species);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Time to create a pet</h2>
        <form>
          <label>
            Name:
            <input
              onChange={this.handleName}
              placeholder='Name your pet'  />
          </label>
          <br /> <br />
          <label>
            Species:
            <select onChange={this.handleSpecies}>
              <option value="Fox">Fox</option>
              <option value="Penguin">Penguin</option>
              <option value="Rhino">Rhino</option>
            </select>
          </label>
          <br /><br />
          <input
            type='submit'
            value='Create'
            onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default PetCreator;
