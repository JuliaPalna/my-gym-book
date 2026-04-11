interface Workout {
    id: string;
    startedAt: number;
    durationMinutes: number;
    types: string[];
}

export type Workouts = Workout[];

export interface monthlyAnalytics {
    totalWorkouts: number;
    averageDurationWorkout: number;
    durationByType?: Record<string, number>;
}

export interface WorkoutsPerMonth {
    workouts: Workouts;
    monthlyAnalytics: monthlyAnalytics;
}

export interface AxiosResponseWorkout {
    id: string;
    started_at: Date;
    description: string;
    duration_minutes: number;
    types: string[];
}

// export interface AxiosResponseMonthlyAnalytics {
//     total_workouts: number;
//     average_duration_workout: number;
//     type_duration?: Record<string, number>;
// }
