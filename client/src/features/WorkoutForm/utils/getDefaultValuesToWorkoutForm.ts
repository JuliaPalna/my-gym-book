import type { Workout } from '../../../entities';
import { timestampToInputValue } from '../../../utils';
import type { InitialValueForm } from '../constants';

export const getDefaultValuesToWorkoutForm = (
    workout: Workout,
    initialValue: InitialValueForm,
) => ({
    date: timestampToInputValue(workout.startedAt) || initialValue.date,
    description: workout.description || initialValue.description,
    durationMinutes: workout.durationMinutes || initialValue.durationMinutes,
    types: workout?.types?.length === 0 ? initialValue.types : workout.types,
});
