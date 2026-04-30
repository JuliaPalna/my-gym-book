import type { ACTION_TYPE } from '../../../app/constants';

interface Workout {
    id: string;
    startedAt: number;
    description?: string;
    durationMinutes: number;
    types: string[];
}

export interface monthlyAnalytics {
    totalWorkouts: number;
    averageDurationWorkout: number;
    durationByType?: Record<string, number>;
}

export interface WorkoutsPerMonth {
    workouts: Workout[];
    monthlyAnalytics: monthlyAnalytics;
}

export interface SetWorkoutsPerMonthAction {
    type: typeof ACTION_TYPE.SET_WORKOUTS;
    payload: WorkoutsPerMonth;
}
