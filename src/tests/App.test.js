import React from 'react';
import { mount, shallow } from 'enzyme';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import nock from 'nock';
import App from '../components/App';
import Search from '../components/Search';
import Followers from '../components/Followers';

// make axios play nice with nock :)
axios.defaults.adapter = httpAdapter;

it('renders without crashing', () => {
  mount(<App />);
});

describe('App', () => {
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

  it('should render a load more button if there are additional pages of followers', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ hasMoreFollowers: true });

    expect(wrapper.find('button')).toHaveLength(1);
  });

  describe('searchForUser', () => {
    describe('when username is invalid', () => {
      it('should set userFound state to false', () => {
        const badUsername = 'badusername';

        nock('https://api.github.com')
          .get(`/users/${badUsername}`)
          .reply(404, { message: 'Not Found' });

        const wrapper = shallow(<App />);
        wrapper.instance().searchForUser(badUsername);

        // need setTimeout to process next tick
        setTimeout(() => {
          expect(wrapper.state('userFound')).toEqual(false);
        }, 0);
      });
    });

    describe('when username is valid', () => {
      const goodUsername = 'goodusername';

      beforeEach(() => {
        nock('https://api.github.com')
          .get(`/users/${goodUsername}`)
          .reply(200, { id: 123 });

        nock('https://api.github.com')
          .get(`/user/123/followers?page=1`)
          .reply(200, [{ login: 'jseinfeld', id: 1 }, { login: 'gcostanza', id: 2 }]);

        const wrapper = shallow(<App />);
        wrapper.instance().searchForUser(goodUsername);
      });

      it('should set userFound state to true', () => {
        // need setTimeout to process next tick
        setTimeout(() => {
          expect(wrapper.state('userFound')).toEqual(true);
        }, 0);
      });

      it('should set followers state to response value', () => {
        // need setTimeout to process next tick
        setTimeout(() => {
          expect(wrapper.state('followers')).toHaveLength(2);
        }, 0);
      });
    });
  });
});
