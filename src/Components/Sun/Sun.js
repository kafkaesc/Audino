import React from 'react';
import SunHandler from '../SunHandler/SunHandler';

let timer;

class Sun extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      phase: this.props.phase,
      // the array for age represents these timeframes
      // [sec, min, hrs, days, wks, years, millennia]
      age: [0, 0, 0, 0, 0, 0, 0, 0]
    };

    this.addSec = this.addSec.bind(this);

    // start the 4 billion year timer
    this.timer();
  }

  // calls addSec every second
  timer() {
    timer = setInterval(this.addSec, 1000);
  }

  // to be used by the timer, adds a second and
  // cascades it along min->hr->day->wk->y->millennia
  // when necessary
  addSec() {
    const newAge = this.state.age;
    newAge[0]++;
    // if 60 sec, min++, sec=0
    if(newAge[0] === 60) {
      newAge[0] = 0;
      newAge[1]++;
    }
    // if 60 min, hr++, min=0
    if(newAge[1] === 60) {
      newAge[1] = 0;
      newAge[2]++;
    }
    // if 24 hr, day++, hr=0
    if(newAge[2] === 24) {
      newAge[2] = 0;
      newAge[3]++;
    }
    // if day 7, week++, day=0
    if(newAge[3] === 7) {
      newAge[3] = 0;
      newAge[4]++;
    }
    // if 52 weeks, year++, weeks=0
    if(newAge[4] === 52) {
      newAge[4] = 0;
      newAge[5]++;
    }
    // if 1000 years, millennia++, years = 0
    if(newAge[5] === 1000) {
      newAge[5] = 0;
      newAge[6]++;
    }
    this.setState({age: newAge});
  }

  // formats the age of the user's stare for display
  printAge() {
    let ageString = '';
    // millennia
    if(this.state.age[6] === 1)
      ageString += '1 millennia, '
    else
      ageString += `${this.state.age[6]} millennium, `;
    // years
    if(this.state.age[5] === 1)
      ageString += '1 year, '
    else
      ageString += `${this.state.age[5]} years, `;
    // weeks
    if(this.state.age[4] === 1)
      ageString += '1 week, ';
    else
      ageString += `${this.state.age[4]} weeks, `;
    // days
    if(this.state.age[3] === 1)
      ageString += '1 day, ';
    else
      ageString += `${this.state.age[3]} days, `;
    // hours
    if(this.state.age[2] === 1)
      ageString += '1 hour, ';
    else
      ageString += `${this.state.age[2]} hours, `;
    // minutes
    if(this.state.age[1] === 1)
      ageString += '1 minute, ';
    else
      ageString += `${this.state.age[1]} minutes, `;
    // seconds
    if(this.state.age[0] === 1)
      ageString += '1 second';
    else
      ageString += `${this.state.age[0]} seconds`;

    console.log(ageString);
    return ageString;
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
        <p>{this.printAge()}</p>
        <p>
          {this.state.name} is currently a {this.state.phase},
          and {this.printNextPhase()}
        </p>
        <SunHandler
          addSec={this.addSec}/>
      </div>
    );
  }
}

export default Sun;
