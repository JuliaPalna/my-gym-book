export interface Workout {
    id: string;
    startedAt: number;
    description: string;
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

export interface AxiosResponseWorkout {
    id: string;
    started_at: number;
    description: string;
    duration_minutes: number;
    types: string[];
}

// export interface AxiosResponsemonthlyAnalytics {
//     total_workouts: number;
//     average_duration_workout: number;
//     type_duration?: Record<string, number>;
// }
