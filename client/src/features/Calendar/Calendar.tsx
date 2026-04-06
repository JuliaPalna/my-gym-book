import { type JSX } from 'react';
import { Button } from '../../shared';
import { useCalendar } from './useCalendar';
import { NAME_DAYS_WEEK } from './constants';
import type { CalendarProps } from './type';

export const Calendar = ({ period, onChange }: CalendarProps): JSX.Element => {
    const {
        displayMonthYear,
        calendarCells,
        onGoBack,
        onGoForward,
        onDayClick,
    } = useCalendar({
        period,
        onChange,
    });

    return (
        <>
            <div className="pb-2 flex flex-row justify-between items-center gap-2 text-base">
                <div>
                    <Button onClick={onGoBack} isLink={true}>
                        <span className="text-2xl">&lt;</span>
                    </Button>
                </div>
                <span>{displayMonthYear}</span>
                <div>
                    <Button onClick={onGoForward} isLink={true}>
                        <span className="text-2xl">&gt;</span>
                    </Button>
                </div>
            </div>

            <ul
                className="grid grid-cols-7 py-1 text-center place-items-center
                text-base uppercase"
            >
                {Object.entries(NAME_DAYS_WEEK).map((keys, dayWeek) => {
                    return (
                        <li
                            className="flex justify-center items-center h-12"
                            key={`header-${keys}`}
                        >
                            {dayWeek}
                        </li>
                    );
                })}
            </ul>

            <ul
                className="grid grid-cols-7
                place-items-center text-center
                divide-x divide-y divide-neutral-300 border
                border-neutral-300 rounded-xl overflow-hidden text-base"
                onClick={onDayClick}
            >
                {calendarCells.map(({ data, id }) => {
                    return (
                        <li
                            key={`day-${id}`}
                            data-active={
                                data && data?.hasWorkout ? 'true' : undefined
                            }
                            className={`h-12 aspect-square w-full
                            flex items-center justify-center
                            nth-[7n]:border-r-0
                            nth-last-[-n+7]:border-b-0
                            ${
                                data && data.hasWorkout
                                    ? `before:content-[''] before:absolute before:-z-10
                                        before:w-7 before:h-7 sm:before:w-10 sm:before:h-10 before:rounded-3xl
                                        before:bg-teal-700
                                        text-white opacity-70 cursor-pointer`
                                    : ''
                            }

                            `}
                        >
                            {data && (
                                <time dateTime={data.fullDate}>
                                    {data?.day}
                                </time>
                            )}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
