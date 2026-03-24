import { type JSX } from 'react';
import { Button } from '../../shared';
import { useCalendar } from './useCalendar';
import { NAME_DAYS_WEEK } from './constants';
import type { CalendarProps } from './type';
import './styles/index.css';

export const Calendar = ({ period, onChange }: CalendarProps): JSX.Element => {
    const { displayMonthYear, calendarCells, onGoBack, onGoForward } =
        useCalendar({
            period,
            onChange,
        });

    return (
        <>
            <div>
                <Button onClick={onGoBack}>Назад</Button>
                <span>{displayMonthYear}</span>
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
                {calendarCells.map((day, index) => {
                    return (
                        <li
                            className="list__item"
                            key={`day-${index}`}
                            data-active={day && day.hasWorkout}
                        >
                            {day ? day?.day : ''}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
