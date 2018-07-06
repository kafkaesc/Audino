import React from 'react';
import SunHandler from '../SunHandler/SunHandler';
import Timer from './Timer/Timer';

class Sun extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      phase: this.props.phase,
    };
  }

  // bamboolze, literally no code is written to move
  // to then next cycle of stellar existence yet
  printNextPhase() {
    return(
      <span>
        should become a yellow star in about 1,000,000 years.
      </span>
    );
  }

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <p>{this.state.name} has been around for </p>
        <Timer />
        <p>
          {this.state.name} is currently a {this.state.phase},
          and {this.printNextPhase()}
        </p>
        <SunHandler />
      </div>
    );
  }
}

export default Sun;
