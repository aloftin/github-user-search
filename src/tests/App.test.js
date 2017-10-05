import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../components/App';
import Search from '../components/Search';
import AlertMessage from '../components/AlertMessage';
import Followers from '../components/Followers';

describe('App', () => {
  it('renders without crashing', () => {
    mount(<App />);
  });

  it('should render Search and Followers', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsAllMatchingElements([<Search />, <Followers />])).toEqual(true);
  });

  it('passes resetFollowers to Search', () => {
    const wrapper = shallow(<App />);
    const search = wrapper.find(Search);
    const resetFollowers = wrapper.instance().resetFollowers;
    expect(search.prop('resetFollowers')).toEqual(resetFollowers);
  });

  it('should render a load more button when hasMoreFollowers state is true', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ hasMoreFollowers: true });

    const button = wrapper.find('#load-more');
    expect(button.prop('content')).toEqual('Load more');
  });

  it('should not render a load more button when hasMoreFollowers state is false', () => {
    const wrapper = shallow(<App />);

    const loadMorebutton = wrapper.find('#load-more');
    expect(loadMorebutton).toHaveLength(0);
  });

  it('should render an info alert when userFound state is false', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ userFound: false });

    const errorMessage = wrapper.find(AlertMessage);

    expect(errorMessage.prop('status')).toEqual('info');
    expect(errorMessage.prop('message')).toEqual('User not found. Try a different username.');
  });

  it('should not render an error alert when userFound state is true', () => {
    const wrapper = mount(<App />);

    const errorMessage = wrapper.find(AlertMessage);
    expect(errorMessage).toHaveLength(0);
  });
});
