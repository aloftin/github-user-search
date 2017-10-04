import React from 'react';
import { shallow } from 'enzyme';
import FollowerPanel from '../components/FollowerPanel';

describe('FollowerPanel', () => {
  it("should render the follower's avatar and name", () => {
    const username = 'jseinfeld';
    const url = 'http://jerryseinfeld.com/images/signature.svg';

    const wrapper = shallow(<FollowerPanel username={username} avatarUrl={url} />);

    expect(
      wrapper.containsAllMatchingElements([
        <img src={url} alt="avatar" />,
        <span>{username}</span>,
      ]),
    ).toBe(true);
  });
});
