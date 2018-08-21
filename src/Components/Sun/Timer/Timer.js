import React from 'react';
import Rand from './Rand.js';

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
    this.incrementWarp10 = this.incrementWarp10.bind(this);
    this.yearTest = this.yearTest.bind(this);
  }

  componentDidMount() {
    this.start();
  }

  // start the timer and set its speed according
  // to the difficulty selected by the user
  start() {
    switch(this.props.diff_speed) {
      case '_normal': setInterval(this.incrementTime, 1000); break;
      case '_easy': setInterval(this.incrementTime, 500); break;
      case '_vEasy': setInterval(this.incrementTime, 250); break;
      case '_warp10': setInterval(this.incrementWarp10, 250); break;
      default: break;
    }
  }

  // convert secs to
  // X days, X2 hours, X3 minutes, X4 secs
  // format
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

  // this switch statement will place breakpaints
  // at the times where the sun will transition into
  // its next phase
  phaseCheck(year) {
    /* the current breakpoints are set for debugging
     * and certainly do not reflect the actual timescale
     * of the lifetime of a star
     */
    switch(year) {
      case 4:
      case 5:
      case 6:
      case 7: this.props.nextPhase(); break;
      default: break;
    }
  }

  // test if the sec counter has reached a year
  yearTest() {
    let s = this.state.seconds + 31535990;
    this.setState({seconds: s});
  }

  /*
   * Child Mode a.k.a Warp10 is a game mode designed for users
   * too impatient for the intended playstyle of SunSimulator 2018.
   * In this mode the game will add several years to the counter
   * every 250 ms, resulting in a gaming experience that is rougly
   * 1Tx normal speed.
   */
  incrementWarp10() {
    let s = Rand.sec();
    let m = Rand.min();
    let h = Rand.hr();
    let d = Rand.day();
    let y = this.state.years + this.randomYearIncrement();

    this.setState({
      time: {'day': d, 'hour': h, 'min': m, 'sec': s},
      years: y
    });

    // TO-DO, since Warp10 will be skipping years if-logic will
    // be necessary instead of the switch statement utilized for
    // the traditional SunSimulator 2018 experience.
  }

  // warp10 will add 8-12 years roughly every 250 ms
  randomYearIncrement() {
    return Math.floor(Math.random() * 8) + 4;
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
