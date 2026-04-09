interface ActivityDays {
    createdAt: number;
    workouts: {
        types: string[];
        durationMinutes: number;
    }[];
    summary: {
        workoutCount: number;
        totalDurationMinutes: number;
    };
}

interface MonthStats {
    totalWorkout: number;
    averageDurationWorkout: number;
    typeDurationMinutes?: Record<string, number>;
}

export interface WorkoutsStateProps {
    activityDays: ActivityDays[];
    monthStats: MonthStats;
}
