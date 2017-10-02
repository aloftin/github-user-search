import React from 'react';
import { shallow } from 'enzyme';
import Followers from '../components/Followers';

describe('render', () => {
  it('should render a list of followers', () => {
    const followers = ['jseinfeld'];
    const component = shallow(<Followers followers={followers} />);
    const listItem = <li>jseinfeld</li>;

    expect(component.contains(listItem));
  });
});
