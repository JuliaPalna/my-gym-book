function calculateMonthlyAnalytics(workouts) {
    const totalWorkouts = workouts.length;

    const totalDuration = workouts.reduce(
        (accumulator, workout) => accumulator + workout.duration_minutes,
        0,
    );

    const averageDurationWorkout = calculateAverageValue(
        totalWorkouts,
        totalDuration,
    );

    const durationByType = calculateDurationByType(workouts);

    return {
        totalWorkouts,
        averageDurationWorkout,
        durationByType,
    };
}

function calculateAverageValue(whole, part) {
    return whole === 0 ? 0 : Math.round((part / whole) * 100) / 100;
}

function calculateDurationByType(workouts) {
    const workoutTypes = {};

    workouts.forEach((workout) => {
        const { types, duration_minutes } = workout;

        types.forEach((type) => {
            const duration =
                Math.round((duration_minutes / types.length) * 10) / 10;

            workoutTypes[type] = (workoutTypes[type] || 0) + duration;
        });
    });

    return workoutTypes;
}

module.exports = { calculateMonthlyAnalytics };
