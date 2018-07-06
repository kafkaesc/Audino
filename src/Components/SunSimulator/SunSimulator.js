import React from 'react';
import SunCreator from '../SunCreator/SunCreator';
import Sun from '../Sun/Sun';

class SunSimulator extends React.Component {

  constructor(props) {
    super(props);

    this.state = {name: 'Nonam', phase: 'Molecular Cloud', age: 0};
    this.state = {sunCreated: false};

    this.createSun = this.createSun.bind(this);
  }

  createSun(n, p) {
    this.setState({
      name: n, phase: p, sunCreated: true
    });
  }

  render() {
    const sunDisplay = this.state.sunCreated;
    const appContent =
      sunDisplay
      ? (
        <div>
          <Sun
            name={this.state.name}
            age={this.state.age}
            phase={this.state.phase}
            birthTime={this.state.birthTime} />
        </div>)
      : (
        <SunCreator
          onSubmit={this.createSun} />);

    return (
      <div>
        {appContent}
      </div>
    );
  }
}

export default SunSimulator;
