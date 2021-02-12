import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    format,
    startOfWeek,
    endOfWeek,
    addDays,
    startOfMonth,
    endOfMonth,
    isSameDay,
    isSameMonth,
    toDate,
} from "date-fns";

const RowWrapper = styled.div`
    display: flex;
`;

const CellWrapper = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    width: 15%;
    border: 1px solid #121212;
    color: ${props => props.isDisabled ? '#999999' : '#fff'};
    pointer-events: ${props => props.isDisabled ? 'none' : 'auto'};
    cursor: ${props => !props.isDisabled && 'pointer'};
    &:nth-child(n) {
        background-color: rgba(255, 255, 255, 0.02);
    };
    &:nth-child(2n) {
        background-color: rgba(255, 255, 255, 0.06);
        opacity: 0.8;
    };
`;

const ActiveDate = styled.div`
    width: 3px;
    height: 100%;
    background-color: #0f6ebe;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`;

const CellComponent = ({ currentDate = new Date(), currentMonth = new Date(), setCurrentDate = () => { } }) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd);

    const [rows, setRows] = useState([]);

    useLayoutEffect(() => {
        let day = startDate;
        const dateFormat = "dd";
        const monthFormat = "MMMM";
        const weekDayFormat = 'EEEEE';

        let formattedDate = "";
        let days = [];
        const rowList = [];
        while (day <= endDate) {
            let i = 0;
            while (i < 7) {
                formattedDate = format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <CellWrapper
                        key={day}
                        isDisabled={!isSameMonth(day, monthStart)}
                        onClick={() => setCurrentDate(toDate(cloneDay))}
                    >
                        {isSameDay(day, currentDate) && <ActiveDate className='active'></ActiveDate>}
                        <TextWrapper>
                            <div className='fontSize-24'>{formattedDate == 1 ? <div>{format(day, dateFormat)}{' '}<span className='fontSize-14'>{format(day, monthFormat)}</span></div> : formattedDate}</div>
                            {
                                format(day, weekDayFormat) == 'S' && <div className='fontSize-10 align-top'>Weekly off</div>
                            }
                            {
                                format(day, weekDayFormat) != 'S' && format(day, weekDayFormat) == 'T' && <div className='fontSize-10 align-top'>No appointments</div>
                            }
                        </TextWrapper>
                    </CellWrapper>
                );
                day = addDays(day, 1);
                i++;
            }
            rowList.push(
                <RowWrapper key={day}>
                    {days}
                </RowWrapper>
            );
            days = [];
        }

        setRows(rowList);
    }, [currentMonth, currentDate]);

    return <div>{rows}</div>;
};

CellComponent.propTypes = {
    currentDate: PropTypes.any,
    currentMonth: PropTypes.any,
    setCurrentDate: PropTypes.func,
};

export {
    CellComponent
};