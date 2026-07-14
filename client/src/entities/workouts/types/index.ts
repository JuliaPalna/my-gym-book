import type { ACTION_TYPE } from '../../../app/constants';
import type { Workout } from '../../workout/types';

export type WorkoutItem = Omit<Workout, 'description'>;

export interface MonthlyAnalytics {
    totalWorkouts: number;
    averageDurationWorkout: number;
    durationByType?: Record<string, number>;
}

export interface WorkoutsPerMonth {
    workouts: WorkoutItem[];
    monthlyAnalytics: MonthlyAnalytics;
}

export interface SetWorkoutsPerMonthAction {
    type: typeof ACTION_TYPE.SET_WORKOUTS;
    payload: WorkoutsPerMonth;
}
