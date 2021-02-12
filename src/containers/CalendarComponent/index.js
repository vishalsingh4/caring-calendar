import React, { useState } from "react";
import styled from "styled-components";

import { HeaderDetailComponent } from '../../components/HeaderDetailComponent';
import { DaysComponent } from '../../components/DaysComponent';
import { CellComponent } from '../../components/CellComponent';

const CalendarWrapper = styled.div`
    background-color: #121212;
    padding: 1rem;
`;

const CalendarComponent = () => {

    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(new Date());

    return (
        <CalendarWrapper>
            <HeaderDetailComponent currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
            <DaysComponent currentMonth={currentMonth} />
            <CellComponent currentDate={currentDate} currentMonth={currentMonth} setCurrentDate={setCurrentDate} />
        </ CalendarWrapper>
    )
};

export {
    CalendarComponent
};
