import React from 'react';
import { shallow, find, to, have, length } from 'enzyme';
import Search from '../components/Search';
import SearchInput from '../components/SearchInput';
import Button from '../components/Button';

describe('Search', () => {
  it('should render SearchInput and Button', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.containsAllMatchingElements([<SearchInput />, <Button />])).toBe(true);
  });

  it('should have an empty initial searchText state', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.state().searchText).toEqual('');
  });
});
