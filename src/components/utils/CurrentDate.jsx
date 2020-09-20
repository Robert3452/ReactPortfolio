import React from 'react';

import putToday from '../../hooks/timeMethods/todayDate';

const CurrentDate = () => {
    let currentDate = putToday()
    return (
        <div className="sidebar-content-date">
            <span>{currentDate.weekDay}</span> · {`${currentDate.date} ${currentDate.time}`}
        </div>
    )
}

export default CurrentDate;