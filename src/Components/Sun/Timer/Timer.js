import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: { 'day': 0, 'hour': 0, 'min': 0, 'sec': 0 },
      years: 0,
      seconds: 0
    };
    this.start = this.start.bind(this);
    this.incrementTime = this.incrementTime.bind(this);
    this.yearTest = this.yearTest.bind(this);
  }

  componentDidMount() {
    this.start();
  }

  start() {
    console.log(this.props.diff_speed);
    switch(this.props.diff_speed) {
      case '_normal': setInterval(this.incrementTime, 1000); break;
      case '_easy': setInterval(this.incrementTime, 500); break;
      case '_vEasy': setInterval(this.incrementTime, 250); break;
    }
  }

  secondsToTime(secs) {
    let d = Math.floor(secs / 86400);
    secs -= d * 86400;
    let h = Math.floor(secs / 3600);
    secs -= h * 3600;
    let m = Math.floor(secs / 60);
    secs -= m * 60;
    let s = secs;

    let timeObject = { 'day': d, 'hour': h, 'min': m, 'sec': s };
    return timeObject;
  }

 /*
  * Because of the unfortunate limitations of JavaScript we are unable
  * to have a simple timer that will count to 126,144,000,000,000,000.
  * The solution is to repeatedly count to 31,536,000 seconds and increment
  * a secondary timer that will count to 4,000,000,000 years. Perhaps
  * base-31536k will catch on in the near future.
  */
  incrementTime() {
    let y = this.state.years;
    let s = this.state.seconds + 1;

    // celebrate another birthday for our son
    if(s === 31536000) {
      y = y + 1;

      // check if this birthday indicates a new age
      this.phaseCheck(y);

      this.setState({
        time: {'day': 0, 'hour': 0, 'min': 0, 'sec': 0},
        years: y,
        seconds: 0
      });
    }
    else {
      this.setState({
        time: this.secondsToTime(s),
        years: y,
        seconds: s
      });
    }
  }

  phaseCheck(year) {
    switch(year) {
      case 4:
      case 5:
      case 6:
      case 7: this.props.nextPhase(); break;
      default: break;
    }
  }

  yearTest() {
    let s = this.state.seconds + 31535990;
    this.setState({seconds: s});
  }

  render() {
    return(
      <div>
        <p>{this.state.years} years, {this.state.time.day} days, {this.state.time.hour} hours, {this.state.time.min} minutes, {this.state.time.sec} seconds</p>
        <button onClick={this.yearTest}>+~yr</button>
      </div>
     );
  }
}

export default Timer;
