import React from "react";
import { shallow } from 'enzyme';
import Event from "../Event";
import { mockData } from "../mock-data";

describe('<Event /> component', () => {
  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];

    EventWrapper = shallow(<Event event={event} />);
  });

  test('render event title', () => {
    expect(EventWrapper.find('.event-title')).toHaveLength(1);
  });

  test('render event info', () => {
    expect(EventWrapper.find('.event-info')).toHaveLength(1);
  });

  test('renders event title correctly', () => {
    expect(EventWrapper.find('.event-title').text()).toBe(event.summary);
  });

  test('renders event info correctly', () => {
    expect(EventWrapper.find('.event-info').text()).toContain(event.location);
    expect(EventWrapper.find('.event-info').text()).toContain(event.start.dateTime);
    expect(EventWrapper.find('.event-info').text()).toContain(event.start.timeZone);
  });

  test('renders a detail button', () => {
    expect(EventWrapper.find('.show-details')).toHaveLength(1);
  });

  test('render when event is collapsed after click expand event details', () => {
    EventWrapper.setState({ show: true });
    expect(EventWrapper.find('.event-description').text()).toContain(event.description);
    expect(EventWrapper.find('.hide-details')).toHaveLength(1);
  });

  test('render click to collapse event details', () => {
    EventWrapper.setState({ show: true });
    EventWrapper.find('.hide-details').simulate('click');
    expect(EventWrapper.state('show')).toBe(false);
  });

  test('render when event is expanded after click collapse event details', () => {
    EventWrapper.setState({ show: false });
    expect(EventWrapper.find('.event-description')).toHaveLength(0);
  });
})