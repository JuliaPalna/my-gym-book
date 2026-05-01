const express = require('express');
const { default: chalk } = require('chalk');
const authenticated = require('../middlewares/authenticated');
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
    getWorkout,
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
        sendError(res, error);
    }
});

router.get('/:id', authenticated, async (req, res) => {
    try {
        const newWorkout = await getWorkout(req.params.id);

        console.log(chalk.bgGreen(`Workout: ${req.params.id}`));
        res.status(200).json(mapWorkout(newWorkout));
    } catch (error) {
        sendError(res, error);
    }
});

router.get('/', authenticated, async (req, res) => {
    try {
        const loadedWorkouts = await getWorkouts(
            req.query.startTs,
            req.query.endTs,
        );

        const monthlyAnalytics = calculateMonthlyAnalytics(loadedWorkouts);
        const workouts = loadedWorkouts.map((workout) => mapWorkouts(workout));

        res.status(200).json({ workouts, monthlyAnalytics });
    } catch (error) {
        sendError(res, error);
    }
});

router.post('/', authenticated, async (req, res) => {
    try {
        const newWorkout = await addWorkout({
            description: req.body.description,
            duration_minutes: req.body.durationMinutes,
            started_at: req.body.startedAt,
            types: req.body.types,
        });

        console.log(chalk.bgGreen(`Workout has been added ${newWorkout}`));
        res.status(200).json(mapWorkout(newWorkout));
    } catch (error) {
        sendError(res, error);
    }
});

router.patch('/:id', authenticated, async (req, res) => {
    try {
        const updatedWorkout = await updateWorkout(req.params.id, {
            description: req.body.description,
            duration_minutes: req.body.durationMinutes,
            started_at: req.body.startedAt,
            types: req.body.types,
        });

        console.log(
            chalk.bgGreen(`Workout has been updated: ${req.params.id}`),
        );
        res.status(200).json(mapWorkout(updatedWorkout));
    } catch (error) {
        sendError(res, error);
    }
});

router.delete('/:id', authenticated, async (req, res) => {
    try {
        await deleteWorkout(req.params.id);

        console.log(
            chalk.bgGreen(`Workout has been removed: ${req.params.id}`),
        );
        res.status(200).json(null);
    } catch (error) {
        sendError(res, error);
    }
});

module.exports = router;
