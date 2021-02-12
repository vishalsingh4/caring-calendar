import React from 'react';
import { shallow } from 'enzyme';

import { CalendarComponent } from './';

describe('Calendar Component', () => {
    let wrapper;
    let props;
    beforeEach(() => {
        wrapper = shallow(<CalendarComponent {...props} />);

        return { wrapper, props };
    });

    afterEach(() => jest.clearAllMocks());

    it('should render Calendar component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should render HeaderDetailComponent', () => {
        expect(wrapper.find('HeaderDetailComponent').exists()).toBe(true);
    });

    it('should render DaysComponent', () => {
        expect(wrapper.find('DaysComponent').exists()).toBe(true);
    });

    it('should render CellComponent', () => {
        expect(wrapper.find('CellComponent').exists()).toBe(true);
    });
});