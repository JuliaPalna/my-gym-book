import { useSelector } from 'react-redux';
import {
    formatDateForDisplay,
    markActiveDays,
    getActiveDays,
    getCalendar,
} from './utils';
import { workoutsSelector, type WorkoutBase } from '../../entities';
import type { DaysData, PeriodProps } from './type';
import { useState } from 'react';
import { formatDateYYYYMMDD } from '../../utils';
import { useOpen } from '../../app/hooks';

export const useCalendar = (period: PeriodProps) => {
    const { workouts } = useSelector(workoutsSelector);
    const [workoutsByDay, setWorkoutsByDay] = useState<WorkoutBase[]>([]);
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
            const element = target.closest('time');
            const dateTime = element && element.dataset.date;

            if (!dateTime) {
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
