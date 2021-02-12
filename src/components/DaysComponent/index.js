import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    format,
    startOfWeek,
    addDays,
} from "date-fns";

const DayWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #999999;
    text-transform: uppercase;
    margin-bottom: 1rem;
    position: relative;
    left: -1rem;
`;

const DaysComponent = ({ currentMonth = new Date() }) => {
    const dateFormat = "iiii";
    let startDate = startOfWeek(currentMonth);

    const [days, setDays] = useState([]);

    useEffect(() => {
        let daysList = [];


        Array.from(Array(7), (_, index) => {
            daysList.push(
                <div key={index}>
                    {format(addDays(startDate, index + 1), dateFormat)}
                </div>
            )
        });

        setDays(daysList);

    }, [currentMonth]);

    return <DayWrapper className='fontSize-14'>{days}</DayWrapper>;
};

DaysComponent.propTypes = {
    currentMonth: PropTypes.any,
};

export {
    DaysComponent
};