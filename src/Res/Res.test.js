import React from 'react';
import ReactDOM from 'react-dom';
import Res from './Res';
import { shallow } from 'enzyme';

describe('Res', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<Res
      key={1}
      id={1}
      name="Quinne"
      date="12/29"
      time="7:00"
      number={4}
      />)

    expect(wrapper).toMatchSnapshot();
  })
})
