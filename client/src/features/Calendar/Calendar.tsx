import { type JSX } from 'react';
import { Button } from '../../shared';
import { useCalendar } from './useCalendar';
import { NAME_MONTH, NAME_DAYS_WEEK } from './constants';
import './styles/index.css';

export const Calendar = (): JSX.Element => {
    const {
        currentDate: { month, year },
        dataCalendar: { calendarDays },
        onGoBack,
        onGoForward,
    } = useCalendar();

    return (
        <>
            <div>
                <Button onClick={onGoBack}>Назад</Button>
                <span>
                    {NAME_MONTH[month]} {year}
                </span>
                <Button onClick={onGoForward}>Вперед</Button>
            </div>

            <ul className="list calendar-header">
                {Object.values(NAME_DAYS_WEEK).map((dayWeek) => {
                    return (
                        <li className="list__item" key={`header-${dayWeek}`}>
                            {dayWeek}
                        </li>
                    );
                })}
            </ul>

            <ul className="list calendar-body">
                {calendarDays.map((day, index) => {
                    return (
                        <li className="list__item" key={`day-${index}`}>
                            {day}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
