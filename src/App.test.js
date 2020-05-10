import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
const enzymeWrapper = shallow(<App />);
describe('<App />', () => {
    test('should render successfully', () => {
        expect(enzymeWrapper).toHaveLength(1);
    });
    test('should have b tag with value as Sample tag', () => {
        expect(enzymeWrapper.find('b').text()).toBe('Sample tag');
    });
});
