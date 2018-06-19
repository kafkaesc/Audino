import React from 'react';
import Timer from '../util/Timer';

/*
 * Debugger for the timer for SunSimulator 2018. Lets you
 * add to the timer to make sure everything is cascading well.
 *
 * Once you start adding years it gets pretty slow.
 */

class Debugger extends React.Component {
  constructor(props) {
    super(props);

    this.adSec = this.adSec.bind(this);
    this.adMin = this.adMin.bind(this);
    this.adHr  = this.adHr.bind(this);
    this.adDay = this.adDay.bind(this);
    this.adWk  = this.adWk.bind(this);
    this.adYr  = this.adYr.bind(this);
    this.adMil = this.adMil.bind(this);

    this.ad50Min = this.ad50Min.bind(this);
    this.ad20Hr  = this.ad20Hr.bind(this);
    this.ad6Day  = this.ad6Day.bind(this);
    this.ad50Wk  = this.ad50Wk.bind(this);
  }

  adSec(e) { this.props.addSec(); }

  adMin(e) {
    for(let i = 0; i < 60; i++) this.props.addSec();
  }

  adHr(e) {
    for(let i = 0; i < 60; i++) this.adMin();
  }

  adDay(e) {
    for(let i = 0; i < 24; i++) this.adHr();
  }

  adWk(e) {
    for(let i = 0; i < 7; i++) this.adDay();
    console.log('+1wk ');
  }

  adYr(e) {
    for(let i = 0; i < 52; i++) this.adWk();
    console.log('+1yr');
  }

  // this one will probably be killed by
  // the browser before actually adding
  // 1000 years
  adMil(e) {
    for(let i = 0; i < 1000; i++) this.adYr();
  }

  ad50Min() {
    for(let i = 0; i < 50; i++) this.adMin();
  }

  ad20Hr() {
    for(let i = 0; i < 20; i++) this.adHr();
  }

  ad6Day() {
    for(let i = 0; i < 6; i++) this.adDay();
  }

  ad50Wk() {
    for(let i = 0; i < 50; i++) this.adWk();
  }

  render() {
    return (
      <div>
        <p>[[ DEBUG MENU ]]</p>
        <p>
          <button type='button' onClick={this.adSec}>sec++</button>
          <button type='button' onClick={this.adMin}>min++</button>
          <button type='button' onClick={this.adHr }>hr ++</button>
          <button type='button' onClick={this.adDay}>day++</button>
          <button type='button' onClick={this.adWk }>wk ++</button>
          <button type='button' onClick={this.adYr }>yr ++</button>
          <button type='button' onClick={this.adMil}>mil++</button>
        </p>
        <p>
          <button type='button' onClick={this.ad50Min}>+50min</button>
          <button type='button' onClick={this.ad20Hr }>+20 hr</button>
          <button type='button' onClick={this.ad6Day }>+6 day</button>
          <button type='button' onClick={this.ad50Wk }>+50 wk</button>
        </p>
      </div>
    );
  }
}

export default Debugger;
