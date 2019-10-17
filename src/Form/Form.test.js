import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { shallow } from 'enzyme';

describe('Form', () => {

  it('should clear state when clearInputs is called', () => {
    global.Date.now = jest.fn().mockImplementation(() => 12345)

    const mockAddRes = jest.fn()

    const mockEvent = {
      preventDefault: jest.fn()
    }

    const mockState = [{
      id: 12345,
      name: "Quinne",
      date: "12/29",
      time: "7:00",
      number: 3
    }]

    const mockNewRes = {
      id: 12345,
      name: "Quinne",
      date: "12/29",
      time: "7:00",
      number: 3
    }

    let wrapper = shallow(<Form
      addRes={mockAddRes}
      />);

    const nameExpected = "";

    wrapper.instance().setState(mockState);

    wrapper.instance().submitRes(mockEvent);

    wrapper.instance().clearInputs();

    expect(wrapper.state('name')).toEqual(nameExpected);
  })
})
