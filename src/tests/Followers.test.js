import React from 'react';
import { shallow } from 'enzyme';
import Followers from '../components/Followers';
import FollowerPanel from '../components/FollowerPanel';

describe('Followers', () => {
  it('should render a list of FollowerPanels', () => {
    const followers = [{ login: 'jseinfeld' }, { login: 'gcostanza' }];
    const wrapper = shallow(<Followers followers={followers} />);

    expect(wrapper.find(FollowerPanel)).toHaveLength(2);
  });
});
