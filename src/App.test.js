import { shallow } from 'enzyme';
import App from './App';

test('renders App Component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBeDefined();
});
