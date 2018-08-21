import React from 'react';
import './SunCreator.css';

let traits = {
  name: 'Nonam',
  age: 0,
  phase: 'Molecular Cloud',
  difficulty: '_normal'
};

class SunCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = { diffSet: false };

    this.handleName = this.handleName.bind(this);
    this.handleDiff = this.handleDiff.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // update the name
  handleName(event) {
    const newName = event.target.value;
    traits.name = newName;
  }

  // set the Difficulty
  handleDiff(event) {
    const newDiff = event.target.value;
    traits.difficulty = newDiff;
    this.setState({ diffSet: true });
  }

  // create the sun
  handleSubmit(event) {
    this.props.onSubmit(traits.name, traits.phase, traits.difficulty);
    event.preventDefault();
  }

  render() {
    const diffState = this.state.diffSet;
    const creatorContent =
      diffState
      ? (
        <div>
          <h2>You have a sun!</h2>
          <form>
            <label> Name:
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
        </div>)
      : (
        <div>
          <h2>Choose a difficulty</h2>
          <div className='diff-container'>
            <button className='difficulty'
              value='_normal'
              onClick={this.handleDiff}>Normal</button>
            <button className='difficulty'
              value='_easy'
              onClick={this.handleDiff}>Easy (2/x faster)</button>
            <button className='difficulty'
              value='_vEasy'
              onClick={this.handleDiff}>Very Easy (4/x faster)</button>
            <button className='difficulty'
              value='_warp10'
              onClick={this.handleDiff}>Child Mode (Warp 10)</button>
          </div>
        </div>);
    return (<div>{creatorContent}</div>);
  }
}

export default SunCreator;
