import React, { Component } from "react";
import Event from './Event';
import { mockData } from "./mock-data";

class EventList extends Component {
  render() {
    //const { events } = this.props;
    return (
      <ul className="EventList">
        {mockData.map(events =>
          <li key={events.id}>
            <Event events={mockData} />
          </li>
        )}
      </ul>
    );
  }
}

export default EventList;