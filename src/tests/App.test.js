import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../components/App';

it('renders without crashing', () => {
  mount(<App />);
});

describe('render', () => {
  it('should render the app', () => {
    const app = shallow(<App />);
    const heading = <h1>Github User Search</h1>;

    expect(app.contains(heading)).toEqual(true);
  });
});
