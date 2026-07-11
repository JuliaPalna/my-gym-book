import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    formatDateForDisplay,
    markActiveDays,
    getActiveDays,
    getCalendar,
} from './utils';
import { workoutsSelector, type WorkoutItem } from '../../entities';
import { formatDateYYYYMMDD } from '../../shared';
import { useOpen } from '../../app/hooks';
import type { DaysData, PeriodProps } from './type';

export const useCalendar = (period: PeriodProps) => {
    const { workouts } = useSelector(workoutsSelector);
    const [workoutsByDay, setWorkoutsByDay] = useState<WorkoutItem[]>([]);
    const stateModalListWorkouts = useOpen();

    const displayMonthYear: string = formatDateForDisplay(period);
    const calendarCells: (DaysData | null)[] = getCalendar(period);
    const activeDays = getActiveDays(workouts);
    const calendarsWithActiveDays: (DaysData | null)[] = markActiveDays({
        activeDays,
        cells: calendarCells,
    });

    const onOpenListWorkoutsByDay = ({ target }: { target: EventTarget }) => {
        if (target instanceof Element) {
            const element: HTMLLIElement | null = target.closest('li');

            if (element === null) {
                return;
            }

            const dateTime = element.dataset.date;

            if (dateTime === 'false') {
                return;
            }

            const filteredWorkouts = workouts.filter(
                (workout) => formatDateYYYYMMDD(workout.startedAt) === dateTime,
            );

            setWorkoutsByDay(filteredWorkouts);
            stateModalListWorkouts.onOpen();
        }

        return;
    };

    return {
        workoutsByDay,
        displayMonthYear,
        calendarsWithActiveDays,
        stateModalListWorkouts,
        onOpenListWorkoutsByDay,
    };
};
