import type { WorkoutsPerMonth } from '../../../../entities';

export const workoutsPerMonthInitialState: WorkoutsPerMonth = {
    workouts: [],
    monthlyAnalytics: {
        totalWorkouts: 0,
        averageDurationWorkout: 0,
    },
};
