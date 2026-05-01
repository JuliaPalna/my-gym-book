import type { ACTION_TYPE } from '../../../app/constants';

export interface WorkoutBase {
    id: string;
    startedAt: number;
    durationMinutes: number;
    types: string[];
}

export interface Workout extends WorkoutBase {
    description: string;
}

export interface MonthlyAnalytics {
    totalWorkouts: number;
    averageDurationWorkout: number;
    durationByType?: Record<string, number>;
}

export interface WorkoutsPerMonth {
    workouts: WorkoutBase[];
    monthlyAnalytics: MonthlyAnalytics;
}

export interface SetWorkoutsPerMonthAction {
    type: typeof ACTION_TYPE.SET_WORKOUTS;
    payload: WorkoutsPerMonth;
}
