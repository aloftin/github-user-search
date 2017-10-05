import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '../components/Avatar';

describe('Avatar', () => {
  it('should render the avatar image', () => {
    const url = 'http://jerryseinfeld.com/images/signature.svg';

    const wrapper = shallow(<Avatar url={url} />);
    const image = wrapper.find('.avatar');

    expect(image.prop('src')).toEqual(url);
  });
});
