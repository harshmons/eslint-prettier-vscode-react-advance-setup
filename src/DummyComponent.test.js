import React from 'react';
import DummyComponent from './DummyComponent';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
const enzymeWrapper = shallow(<DummyComponent />);
describe('<App />', () => {
    test('should render successfully', () => {
        expect(enzymeWrapper).toBeDefined();
    });
});
