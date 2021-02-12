import React from 'react';
import { shallow } from 'enzyme';

import { HeaderDetailComponent } from './';

describe('HeaderDetail Component', () => {
    let wrapper;
    let props = {
        currentMonth: new Date(),
        setCurrentMonth: jest.fn()
    };
    beforeEach(() => {
        wrapper = shallow(<HeaderDetailComponent {...props} />);

        return { wrapper, props };
    });

    afterEach(() => jest.clearAllMocks());

    it('should render HeaderDetailComponent component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should render Image container with text Today', () => {
        expect(wrapper.find('.img-container').childAt(0).prop('src')).toEqual('./icon-next-date.png');
        expect(wrapper.find('.img-container').childAt(0).prop('srcSet')).toEqual('./icon-next-date@2x.png 2x, ./icon-next-date@3x.png 3x');
    });

    it('should call onClick on prev btn click', () => {
        wrapper.find('.month-container').childAt(0).simulate('click', new Date());
        expect(props.setCurrentMonth).toHaveBeenCalled();
    });

    it('should call onClick on next btn click', () => {
        expect(wrapper.find('.month-container').childAt(1).children().props().children).toEqual('February 2021');
    });

    it('should call onClick on next btn click', () => {
        wrapper.find('.month-container').childAt(2).simulate('click', new Date());
        expect(props.setCurrentMonth).toHaveBeenCalled();
    });
});