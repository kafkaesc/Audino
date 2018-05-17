import React from 'react';

class PetHandler extends React.Component {
  constructor(props) {
    super(props);

    this.increaseHappiness = this.increaseHappiness.bind(this);
    this.decreaseHappiness = this.decreaseHappiness.bind(this);
    this.increaseHunger = this.increaseHunger.bind(this);
    this.decreaseHunger = this.decreaseHunger.bind(this);
  }

  increaseHappiness(event) {
    this.props.handleHappiness(1);
  }

  decreaseHappiness(event) {
    this.props.handleHappiness(-1);
  }

  increaseHunger() {
    this.props.handleHunger(1);
  }

  decreaseHunger() {
    this.props.handleHunger(-1);
  }

  render() {
    return (
      <div>
        <p>
          Happiness:
          <button type='button'
            onClick={this.increaseHappiness}>+</button>
          <button type='button'
            onClick={this.decreaseHappiness}>-</button>
          , Hunger:
          <button type='button'
            onClick={this.increaseHunger}>+</button>
          <button type='button'
            onClick={this.decreaseHunger}>-</button>
        </p>
      </div>
    );
  }
}

export default PetHandler;
