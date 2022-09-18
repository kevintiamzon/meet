import React, { Component } from 'react';

export class NumberOfEvents extends Component {
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ eventValue: value });
  };
  state = { eventValue: 32 };
  render() {
    return (
      <div className="numberOfEvents">
        <input
          type="number"
          className="number-input"
          value={this.state.eventValue}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;