import React from 'react';

let traits = {
  name: 'Nonam',
  age: 0,
  phase: 'Molecular Cloud'
};

class SunCreator extends React.Component {
  constructor(props) {
    super(props);

    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // update the name
  handleName(event) {
    const newName = event.target.value;
    traits.name = newName;
  }

  // create the sun
  handleSubmit(event) {
    this.props.onSubmit(traits.name, traits.phase);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>You have a sun!</h2>
        <form>
          <label>
            Name:
            <input
              onChange={this.handleName}
              placeholder='Name your sun'  />
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

export default SunCreator;
