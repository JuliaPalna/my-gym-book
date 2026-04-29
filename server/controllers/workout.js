const Workout = require('../models/Workout');

function getWorkouts() {
    return Workout.find();
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
