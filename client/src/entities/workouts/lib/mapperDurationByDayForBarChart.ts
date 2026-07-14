import { dayjs } from '../../../shared';
import type { WorkoutItem } from '../types';

export function mapperDurationByDayForBarChart(workouts: WorkoutItem[]): {
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
