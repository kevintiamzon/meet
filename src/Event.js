import React, { Component } from "react";
import { mockData } from "./mock-data";

export class Event extends Component {
  toggleEventDetails = () => {
    this.setState({ show: !this.state.show });
  };
  state = { show: false };
  render() {
    let event = mockData[0];
    return (
    <div className="event">
      <h1 className="event-title">{event.summary}</h1>
        <p className="event-info">
          {event.location}
          {event.start.dateTime}
          {event.start.timeZone}
        </p>
      {this.state.show && (
        <>
        <h2 className="about-event-title">More About This Event:</h2>
        <p className="event-description">{event.description}</p></>
      )}
      {!this.state.show ?  (
        <button 
        className="show-details"
        onClick={this.toggleEventDetails}>Details</button>
      ) : (
        <button
        className="hide-details"
        onClick={this.toggleEventDetails}>Hide Details</button>
      )}
    </div>
    );
  }
}
export default Event;