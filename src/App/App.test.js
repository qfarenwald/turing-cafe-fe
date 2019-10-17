import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  })

  it('should update state when addRes is called', () => {
    global.Date.now = jest.fn().mockImplementation(() => 12345)

    let wrapper = shallow(<App />);

    const mockNewRes = {
      id: 12345,
      name: "Quinne",
      date: "12/29",
      time: "7:00",
      number: 3
    }

    const defaultState = [];
    const expected = [mockNewRes];

    wrapper.instance().setState(defaultState)

    wrapper.instance().addRes(mockNewRes);

    expect(wrapper.state('reservations')).toEqual(expected);
  })

})
