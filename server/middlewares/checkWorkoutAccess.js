const { getWorkout } = require('../controllers/workout');

async function checkWorkoutAccess(req, res, next) {
    try {
        const userId = req.user._id || req.user.id;
        const workoutId = req.params.id;

        const workout = await getWorkout(workoutId);

        if (!workout) {
            return res.status(404).json({ message: 'Тренировка не найдена' });
        }

        if (workout.author_id.toString() !== userId.toString()) {
            return res.status(403).json({ message: 'Ошибка доступа' });
        }

        req.workout = workout;

        next();
    } catch (error) {
        sendError(res, error);
    }
};

module.exports = checkWorkoutAccess;
