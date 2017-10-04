import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../components/App';
import Search from '../components/Search';
import Followers from '../components/Followers';

it('renders without crashing', () => {
  mount(<App />);
});

describe('App', () => {
  it('should render Search and Followers', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsAllMatchingElements([<Search />, <Followers />])).toEqual(true);
  });

  it('should render a load more button if there are additional pages of followers', () => {
    const app = shallow(<App />);
    app.setState({ hasMoreFollowers: true });

    expect(app.find('button')).toHaveLength(1);
  });

  it('passes resetFollowers to Search', () => {
    const wrapper = shallow(<App />);
    const search = wrapper.find(Search);
    const resetFollowers = wrapper.instance().resetFollowers;
    expect(search.prop('resetFollowers')).toEqual(resetFollowers);
  });

  it('should clear the followers state when the search input value changes', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      followers: [
        { login: 'jseinfeld', avatar: 'http://seinfeld.com/avatar' },
        { login: 'gcostanza', avatar: 'http://vandelayindustries.com/avatar' },
      ],
    });

    wrapper.find(Search).simulate('change');
    expect(wrapper.state('followers')).toEqual([]);
  });
});
