/* global it, expect, describe */

import { mount } from 'enzyme';
import App from './index';


describe('Welcome Page', () => {

  it('renders correctly', () => {
    const component = mount(<App />);
    const tree = toJson(component);
  });
});
