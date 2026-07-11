import { Button, Modal } from '../../shared';
import { useCalendar } from './useCalendar';
import { NAME_DAYS_WEEK } from './constants';
import type { CalendarProps } from './type';
import { ListWorkoutsByDay } from './components/ListWorkoutsByDay';

export const Calendar = ({
    period,
    onGoForwardMonth,
    onGoBackMonth,
}: CalendarProps): React.JSX.Element => {
    const {
        workoutsByDay,
        displayMonthYear,
        calendarsWithActiveDays,
        stateModalListWorkouts,
        onOpenListWorkoutsByDay,
    } = useCalendar(period);

    return (
        <>
            <div className="pb-2 flex-between gap-list">
                <Button onClick={onGoBackMonth} variant="link">
                    <span className="text-2xl">&lt;</span>
                </Button>

                <span>{displayMonthYear}</span>

                <Button onClick={onGoForwardMonth} variant="link">
                    <span className="text-2xl">&gt;</span>
                </Button>
            </div>

            <ul
                className="grid grid-cols-7 py-1 text-center place-items-center
                uppercase"
            >
                {Object.entries(NAME_DAYS_WEEK).map((values) => {
                    return (
                        <li
                            className="flex-center h-12"
                            key={`header-${values[0]}`}
                        >
                            {values[1]}
                        </li>
                    );
                })}
            </ul>

            <ul
                className="grid grid-cols-7
                place-items-center text-center
                divide-x divide-y divide-brand-border border
                border-brand-border rounded-xl overflow-hidden"
                onClick={onOpenListWorkoutsByDay}
            >
                {calendarsWithActiveDays.map((cell, index) => {
                    return (
                        <li
                            key={`day-${index}`}
                            data-date={cell && cell.hasWorkout && cell.fullDate}
                            className={`h-12 aspect-square w-full flex-center
                            [&:nth-child(7n)]:border-l-0
                            [&:nth-last-child(-n+7)]:border-t-0
                                ${
                                    cell && cell.hasWorkout
                                        ? `before:content-[''] before:absolute before:-z-fixed
                                            before:size-9 sm:before:w-10 sm:before:h-10 before:rounded-3xl
                                            before:bg-brand-primary-active
                                            text-brand-text-light opacity-70 cursor-pointer`
                                        : ''
                                }
                            `}
                        >
                            {cell && (
                                <time
                                    dateTime={cell.fullDate}
                                    className="inline-blok w-full h-hull"
                                >
                                    {cell.day}
                                </time>
                            )}
                        </li>
                    );
                })}
            </ul>

            {stateModalListWorkouts.isOpen && (
                <Modal onClose={stateModalListWorkouts.onClose}>
                    <ListWorkoutsByDay workouts={workoutsByDay} />
                </Modal>
            )}
        </>
    );
};
