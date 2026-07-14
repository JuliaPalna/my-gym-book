const express = require('express');
const { default: chalk } = require('chalk');
const authenticated = require('../middlewares/authenticated');
const checkWorkoutAccess = require('../middlewares/checkWorkoutAccess');
const sendError = require('../helpers/sendError');
const mapType = require('../helpers/mapType');
const mapWorkout = require('../helpers/mapWorkout');
const mapWorkouts = require('../helpers/mapWorkouts');
const {
    calculateMonthlyAnalytics,
} = require('../helpers/calculateMonthlyAnalytics');
const {
    addWorkout,
    deleteWorkout,
    getWorkouts,
    updateWorkout,
} = require('../controllers/workout');
const { getWorkoutTypes } = require('../controllers/workoutType');

const router = express.Router({ mergeParams: true });

router.get('/types', authenticated, async (req, res) => {
    try {
        const loadedTypes = await getWorkoutTypes();

        const types = loadedTypes.map((type) => mapType(type));

        res.status(200).json(types);
    } catch (error) {
        res.status(error.status || 400)
            .json({ message: error.message || 'Ошибка запроса' });
    }
});

router.get('/:id', authenticated, checkWorkoutAccess, async (req, res) => {
    try {
        console.log(chalk.bgGreen(`Workout: ${req.params.id}`));

        res.status(200).json(mapWorkout(req.workout));
    } catch (error) {
        res.status(error.status || 400)
            .json({ message: error.message || 'Ошибка запроса' });
    }
});

router.get('/', authenticated, async (req, res) => {
    try {
        const userId = req.user._id || req.user.id;

        const loadedWorkouts = await getWorkouts(
            req.query.startTs,
            req.query.endTs,
            userId
        );

        const monthlyAnalytics = calculateMonthlyAnalytics(loadedWorkouts);
        const workouts = loadedWorkouts.map((workout) => mapWorkouts(workout));

        res.status(200).json({ workouts, monthlyAnalytics });
    } catch (error) {
        res.status(error.status || 400)
            .json({ message: error.message || 'Ошибка запроса' });
    }
});

router.post('/', authenticated, async (req, res) => {
    try {
        const newWorkout = await addWorkout({
            description: req.body.description,
            duration_minutes: req.body.durationMinutes,
            started_at: req.body.startedAt,
            types: req.body.types,
            author_id: req.user._id || req.user.id,
        });

        console.log(chalk.bgGreen(`Workout has been added ${newWorkout}`));

        res.status(200).json(mapWorkout(newWorkout));
    } catch (error) {
        res.status(error.status || 400)
            .json({ message: error.message || 'Ошибка запроса' });
    }
});

router.patch('/:id', authenticated, checkWorkoutAccess, async (req, res) => {
    try {
        const workoutId = req.params.id;

        const updatedWorkout = await updateWorkout(workoutId, {
            description: req.body.description,
            duration_minutes: req.body.durationMinutes,
            started_at: req.body.startedAt,
            types: req.body.types,
            author_id: req.user._id || req.user.id,
        });

        console.log(
            chalk.bgGreen(`Workout has been updated: ${workoutId}`),
        );

        res.status(200)
            .json(mapWorkout(updatedWorkout));
    } catch (error) {
        res.status(error.status || 400)
            .json({ message: error.message || 'Ошибка запроса' });
    }
});

router.delete('/:id', authenticated, checkWorkoutAccess, async (req, res) => {
    try {
        const workoutId = req.params.id;

        await deleteWorkout(workoutId);

        console.log(
            chalk.bgGreen(`Workout has been removed: ${workoutId}`),
        );

        res.status(200).json(null);
    } catch (error) {
        res.status(error.status || 400)
            .json({ message: error.message || 'Ошибка запроса' });
    }
});

module.exports = router;
