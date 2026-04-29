const WORKOUT_TYPES = require('../constants/workoutTypes');

function getWorkoutTypes() {
    return [
        { id: WORKOUT_TYPES.ARMS, name_ru: 'Руки' },
        { id: WORKOUT_TYPES.BACK, name_ru: 'Спина' },
        { id: WORKOUT_TYPES.BOXING, name_ru: 'Бокс' },
        { id: WORKOUT_TYPES.CARDIO, name_ru: 'Кардио' },
        { id: WORKOUT_TYPES.CHEST, name_ru: 'Грудь' },
        { id: WORKOUT_TYPES.CORE, name_ru: 'Кор' },
        { id: WORKOUT_TYPES.CYCLING, name_ru: 'Велосипед' },
        { id: WORKOUT_TYPES.LEGS, name_ru: 'Ноги' },
        { id: WORKOUT_TYPES.RUN, name_ru: 'Бег' },
        { id: WORKOUT_TYPES.SHOULDERS, name_ru: 'Плечи' },
        { id: WORKOUT_TYPES.STRETCHING, name_ru: 'Растяжка' },
        { id: WORKOUT_TYPES.SWIMMING, name_ru: 'Плавание' },
        { id: WORKOUT_TYPES.YOGA, name_ru: 'Йога' },
    ];
}

module.exports = {
    getWorkoutTypes,
};
