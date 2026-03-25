interface ActivityDaysProps {
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
    typeDurationMinutes: Record<string, number>;
}

export const activityDays: ActivityDaysProps[] = [
    {
        createdAt: Date.now(),
        workouts: [
            {
                types: ['running'],
                durationMinutes: 30,
            },
        ],
        summary: {
            workoutCount: 1,
            totalDurationMinutes: 30,
        },
    },
    {
        createdAt: Date.now(),
        workouts: [
            {
                types: ['running', 'legs'],
                durationMinutes: 30,
            },
            {
                types: ['arms'],
                durationMinutes: 15,
            },
        ],
        summary: {
            workoutCount: 2,
            totalDurationMinutes: 45,
        },
    },
];

export function calculateMonthStats(days: ActivityDaysProps[]): MonthStats {
    const totalWorkout: number = days.reduce(
        (accumulator: number, day) => accumulator + day.summary.workoutCount,
        0,
    );

    const totalDurationMinutes: number = days.reduce(
        (accumulator: number, day) =>
            accumulator + day.summary.totalDurationMinutes,
        0,
    );

    const averageDurationWorkout: number = calculateAverageValue(
        totalWorkout,
        totalDurationMinutes,
    );

    const typeDurationMinutes = calculateTypeDurationMinutes(days);

    return {
        totalWorkout,
        averageDurationWorkout,
        typeDurationMinutes,
    };
}

function calculateAverageValue(whole: number, part: number): number {
    return whole === 0 ? 0 : Math.round((part / whole) * 100) / 100;
}

function calculateTypeDurationMinutes(
    days: ActivityDaysProps[],
): Record<string, number> {
    const typeMinutes: Record<string, number> = {};

    days.forEach((day) => {
        day.workouts.forEach(({ types, durationMinutes }) => {
            types.forEach((type) => {
                const duration =
                    Math.round((durationMinutes / types.length) * 10) / 10;

                typeMinutes[type] = (typeMinutes[type] || 0) + duration;
            });
        });
    });

    return typeMinutes;
}

export const monthStats: MonthStats = calculateMonthStats(activityDays);
