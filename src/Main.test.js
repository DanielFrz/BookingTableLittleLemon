import React from './lib/react';
import { shallow } from 'enzyme';
import Main from './components/BookingPage';

describe('Main component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Main />);
  });

  it('should render the form with the correct initial state', () => {
    const dateInput = wrapper.find('#res-date');
    const timeSelect = wrapper.find('#res-time');
    const guestsInput = wrapper.find('#guests');
    const occasionSelect = wrapper.find('#occasion');

    expect(dateInput.props().value).toBe('');
    expect(timeSelect.props().children).toHaveLength(0);
    expect(guestsInput.props().value).toBe('');
    expect(occasionSelect.props().children).toHaveLength(2);
  });

  it('should update the available times when the date is changed', () => {
    const dateInput = wrapper.find('#res-date');
    dateInput.simulate('change', { target: { value: '2022-01-01' } });
    wrapper.update();
    const timeSelect = wrapper.find('#res-time');
    expect(timeSelect.props().children).toHaveLength(6);
    expect(timeSelect.props().children[0].props.children).toBe('17:00');
    expect(timeSelect.props().children[1].props.children).toBe('18:00');
    expect(timeSelect.props().children[2].props.children).toBe('19:00');
    expect(timeSelect.props().children[3].props.children).toBe('20:00');
    expect(timeSelect.props().children[4].props.children).toBe('21:00');
    expect(timeSelect.props().children[5].props.children).toBe('22:00');
  });
});
