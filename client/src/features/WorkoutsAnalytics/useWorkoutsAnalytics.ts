import { dayjs } from '../../utils';
import { useSelector } from 'react-redux';
import {
    workoutsSelector,
    type WorkoutBase,
    type WorkoutsPerMonth,
} from '../../entities';

export const useWorkoutsAnalytics = () => {
    const { workouts, monthlyAnalytics }: WorkoutsPerMonth =
        useSelector(workoutsSelector);

    const durationByDay = calculateDurationByDay(workouts);
    const durationByType = !monthlyAnalytics.durationByType
        ? null
        : calculateDurationByType(monthlyAnalytics.durationByType);

    return { monthlyAnalytics, durationByDay, durationByType };
};

function calculateDurationByDay(workouts: WorkoutBase[]): {
    days: string[];
    duration: number[];
} {
    const daysWithDuration: Record<string, number> = {};

    workouts.forEach((workout) => {
        const activityDay: string = dayjs(workout.startedAt).format('D');

        if (daysWithDuration[activityDay]) {
            daysWithDuration[activityDay] += workout.durationMinutes;
            return;
        }
        daysWithDuration[activityDay] = workout.durationMinutes;
    });

    const durationByDay: { days: string[]; duration: number[] } = {
        days: Object.keys(daysWithDuration),
        duration: Object.values(daysWithDuration),
    };

    return durationByDay;
}

function calculateDurationByType(duration: Record<string, number>): {
    types: string[];
    duration: number[];
} {
    return {
        types: Object.keys(duration),
        duration: Object.values(duration),
    };
}
