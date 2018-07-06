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

    this.evolve = this.evolve.bind(this);
  }

  evolve() {
    switch(this.state.phase) {
      case 'Molecular Cloud': this.setState({ phase: 'Yellow Star' }); break;
      case 'Yellow Star': this.setState({ phase: 'Red Giant' }); break;
      case 'Red Giant': this.setState({ phase: 'Planetary Nebula' }); break;
      case 'Planetary Nebula': this.setState({ phase: 'White Dwarf' }); break;
      default: break;
    }
  }

  printNextPhase() {
    switch(this.state.phase) {
      case 'Molecular Cloud':
        return <span>should become a yellow star in about 1,000,000 years.</span>;
      case 'Yellow Star':
        return <span>should become a red giant once it runs out of Hydrogen.</span>;
      case 'Red Giant':
        return <span>should become a planetary nebula after it burns through its remaining gas</span>;
      case 'Planetary Nebula':
        return <span>will soon become a white dwarf after expelling a layer of ionized gas</span>;
      case 'White Dwarf':
        return <span>will lives out its remaining years happily</span>;
      default: break;
    }
    return '';
  }

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <p>{this.state.name} has been around for </p>
        <Timer nextPhase={this.evolve} />
        <p>
          {this.state.name} is currently a {this.state.phase}, and {this.printNextPhase()}
        </p>
        <SunHandler />
      </div>
    );
  }
}

export default Sun;
