const Workout = require('../models/Workout');
const { default: chalk } = require('chalk');

async function getWorkouts(startTs, endTs, userId) {
    const start = Number(startTs);
    const end = Number(endTs);

    if (isNaN(start) || isNaN(end) || start >= end) {
        console.log(chalk.bgRed('Invalid timestamps for workouts'));
        const error = new Error('Неверный период времени');
        error.status = 400;
        throw error;
    }

    const workouts = await Workout
        .find({
            author_id: userId,
            started_at: { $gte: start, $lt: end },
        })
        .sort({ started_at: 1 });

    return workouts;
}

async function getWorkout(id) {
    const workout= await Workout.findById(id);

    if (!workout) {
        console.log(chalk.bgRed(`Workout not found: ${id}`));
        const error = new Error('Тренировка не найдена');
        error.status = 404;
        throw error;
    }

    return workout;
}

async function addWorkout(data) {
    if (!data || !data.started_at || !data.duration_minutes) {
        console.log(chalk.bgRed('Missing required fields for workout'));
        const error = new Error('Не заполнены обязательные поля');
        error.status = 400;
        throw error;
    }

    const newWorkout = await Workout.create(data);
    await newWorkout.populate('author_id');

    return newWorkout;
}

async function deleteWorkout(id) {
    const workout = await Workout.findById(id);

    if (!workout) {
        console.log(chalk.bgRed(`Workout not found for deletion: ${id}`));
        const error = new Error('Тренировка не найдена');
        error.status = 404;
        throw error;
    }

    const result = await Workout.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
        console.log(chalk.bgRed(`Failed to delete workout: ${id}`));
        const error = new Error('Не удалось удалить тренировку');
        error.status = 500;
        throw error;
    }

    console.log(chalk.bgGreen(`Workout deleted: ${id}`));
    return workout;
}

async function updateWorkout(id, data) {
    const workout = await Workout.findById(id);

    if (!workout) {
        console.log(chalk.bgRed(`Workout not found for update: ${id}`));
        const error = new Error('Тренировка не найдена');
        error.status = 404;
        throw error;
    }

    const updatedWorkout = await Workout.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    });

    if (!updatedWorkout) {
        console.log(chalk.bgRed(`Failed to update workout: ${id}`));
        const error = new Error('Не удалось обновить тренировку');
        error.status = 500;
        throw error;
    }

    await updatedWorkout.populate('author_id');

    console.log(chalk.bgGreen(`Workout updated: ${id}`));
    return updatedWorkout;
}

module.exports = {
    addWorkout,
    deleteWorkout,
    getWorkout,
    getWorkouts,
    updateWorkout,
};
