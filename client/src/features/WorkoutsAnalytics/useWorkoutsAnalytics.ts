import { useSelector } from 'react-redux';
import {
    workoutsSelector,
    type Workouts,
    type WorkoutsPerMonth,
} from '../../entities';

export const useWorkoutsAnalytics = () => {
    const workoutsPerMonth: WorkoutsPerMonth = useSelector(workoutsSelector);

    const { workouts, monthlyAnalytics } = workoutsPerMonth;

    const durationByDay = calculateDurationByDay(workouts);
    const durationByType = !monthlyAnalytics.durationByType
        ? null
        : calculateDurationByType(monthlyAnalytics.durationByType);

    return { monthlyAnalytics, durationByDay, durationByType };
};

function calculateDurationByDay(workouts: Workouts): {
    days: string[];
    duration: number[];
} {
    //!TODO: activityDays - ключ числа от 1 до 31
    const daysWithDuration: Record<string, number> = {};

    workouts.forEach((workout) => {
        const activityDay: string = new Date(workout.startedAt)
            .getDate()
            .toString();

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
