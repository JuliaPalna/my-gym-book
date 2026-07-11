const Workout = require('../models/Workout');

async function getWorkouts(startTs, endTs, userId) {
    const start = Number(startTs);
    const end = Number(endTs);

    if (isNaN(start) || isNaN(end) || start >= end) {
        throw new Error('Invalid timestamps');
    }

    const workouts = await Workout
        .find({
            author_id: userId,
            started_at: { $gte: start, $lt: end },
        })
        .sort({ started_at: 1 });

    return workouts;
}

function getWorkout(id) {
    return Workout.findById(id);
}

async function addWorkout(data) {
    const newWorkout = await Workout.create(data);

    await newWorkout.populate('author_id');

    return newWorkout;
}

function deleteWorkout(id) {
    return Workout.deleteOne({ _id: id });
}

async function updateWorkout(id, data) {
    const updatedWorkout = await Workout.findByIdAndUpdate(id, data, {
        returnDocument: 'after',
    });

    await updatedWorkout.populate('author_id');

    return updatedWorkout;
}

module.exports = {
    addWorkout,
    deleteWorkout,
    getWorkout,
    getWorkouts,
    updateWorkout,
};
