import React from 'react';

class PetHelper extends React.Component {
  constructor(props) {
    super(props);

    this.handleName = this.handleName.bind(this);
    this.handleSpecies = this.handleSpecies.bind(this);
  }

  handleName(e) {
    const newName = e.target.value;
    this.props.onNamed(newName);
  }

  handleSpecies(e) {
    const newSpecies = e.target.value;
    this.props.onSpeciation(newSpecies);
  }

  render() {
    return (
      <div>
        <h2>Time to create a pet</h2>
        <p>(they seem quite mutable for the time being)</p>
        <input
          placeHolder='Name your pet'
          onChange={this.handleName} />
        <br /><br />
        <select onChange={this.handleSpecies}>
          <option value="Fox">Fox</option>
          <option value="Penguin">Penguin</option>
          <option value="Rhino">Rhino</option>
        </select>
      </div>
    );
  }
}

export default PetHelper;
