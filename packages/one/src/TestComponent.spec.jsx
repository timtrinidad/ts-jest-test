import React from 'react'
import TestComponent from 'src/TestComponent';
import { shallow } from 'enzyme';

it('does something', () => {
  const wrapper = shallow(<TestComponent>child</TestComponent>);
  expect(wrapper).not.toBeNull();
})