import type { monthlyAnalytics, Workout } from '../entities';

export function calculateMonthlyAnalytics(
    workouts: Workout[],
): monthlyAnalytics {
    const totalWorkouts: number = workouts.length;

    const totalDuration: number = workouts.reduce(
        (accumulator: number, workout) => accumulator + workout.durationMinutes,
        0,
    );

    const averageDurationWorkout: number = calculateAverageValue(
        totalWorkouts,
        totalDuration,
    );

    const durationByType: Record<string, number> =
        calculateDurationByType(workouts);

    return {
        totalWorkouts,
        averageDurationWorkout,
        durationByType,
    };
}

function calculateAverageValue(whole: number, part: number): number {
    return whole === 0 ? 0 : Math.round((part / whole) * 100) / 100;
}

function calculateDurationByType(
    workouts: Workout[],
    //TODO: typeMinutes - изменить ключ  typeMinutes на types
): Record<string, number> {
    const workoutTypes: Record<string, number> = {};

    workouts.forEach((workout) => {
        const { types, durationMinutes } = workout;

        types.forEach((type) => {
            const durationType =
                Math.round((durationMinutes / types.length) * 10) / 10;

            workoutTypes[type] = (workoutTypes[type] || 0) + durationType;
        });
    });

    return workoutTypes;
}
