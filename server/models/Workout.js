const mongoose = require('mongoose');
const { timeStamp } = require('console');
const WORKOUT_TYPES = require('../constants/workoutTypes');

const WorkoutSchema = mongoose.Schema(
    {
        author_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        description: {
            type: String,
            required: false,
        },
        duration_minutes: {
            type: Number,
            required: true,
            min: 1,
        },
        started_at: {
            type: Number,
            required: true,
        },
        types: {
            type: [String],
            required: true,
        },
    },
    { timestamps: true },
);

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
