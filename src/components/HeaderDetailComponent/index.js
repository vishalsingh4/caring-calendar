import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    format,
    addMonths,
    subMonths,
} from "date-fns";

const HeaderWrapper = styled.div`
    background-color: rgba(255, 255, 255, 0.06);
    border-radius: 40px;
    margin-bottom: 1.5rem;
    color: #ffffff;
    color: #e6e6e6;
    display: flex;
    align-items: center;
`;

const TodayRectangle = styled.div`
    min-width: 5.5%;
    padding: 12px 20px;
    border-radius: 20px 0 0 20px;
    background-color: #0f6ebe;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #e6e6e6;
`;

const MonthDetailWrapper = styled.div`
    display: flex;
    align-items: center;
    border-right: 1px solid #121212;
    padding: 12px 20px;
    color: #999999;
`;
const HeaderDetailComponent = ({ currentMonth = new Date(), setCurrentMonth = () => { } }) => {
    const dateFormat = "MMMM yyyy";
    return (
        <HeaderWrapper className='fontSize-12'>
            <TodayRectangle className='img-container'>
                <img src="./icon-next-date.png"
                    srcSet="./icon-next-date@2x.png 2x,
                            ./icon-next-date@3x.png 3x"
                /> Today
            </TodayRectangle>
            <MonthDetailWrapper className='month-container'>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingRight: '4px',
                    cursor: 'pointer'
                }} onClick={useCallback(() => setCurrentMonth(subMonths(currentMonth, 1)), [currentMonth])}>
                    <img src="./icon-dropdown-left.png"
                        srcSet="./icon-dropdown-left@2x.png 2x,
                                ./icon-dropdown-left@3x.png 3x"
                    />
                </div>
                <div>
                    <span>{format(currentMonth, dateFormat)}</span>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '4px',
                    cursor: 'pointer'
                }} onClick={useCallback(() => setCurrentMonth(addMonths(currentMonth, 1)), [currentMonth])}>
                    <img src="./icon-dropdown-right.png"
                        srcSet="./icon-dropdown-right@2x.png 2x,
                                ./icon-dropdown-right@3x.png 3x"
                    />
                </div>
            </MonthDetailWrapper>
        </HeaderWrapper>
    )
};

HeaderDetailComponent.propTypes = {
    currentMonth: PropTypes.any,
    setCurrentMonth: PropTypes.func,
};

export {
    HeaderDetailComponent
};