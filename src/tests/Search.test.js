import React from 'react';
import { shallow, find, to, have, length } from 'enzyme';
import Search from '../components/Search';

describe('Search', () => {
  it('should have an empty initial searchText state', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.state().searchText).toEqual('');
  });
});
