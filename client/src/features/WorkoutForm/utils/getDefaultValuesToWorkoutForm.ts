import type { Workout } from '../../../entities';
import { formatDateYYYYMMDDTHHmm } from '../../../utils';
import type { InitialValueForm } from '../constants';

export const getDefaultValuesToWorkoutForm = (
    workout: Workout,
    initialValue: InitialValueForm,
) => ({
    date: formatDateYYYYMMDDTHHmm(workout.startedAt) || initialValue.date,
    description: workout.description || initialValue.description,
    durationMinutes: workout.durationMinutes || initialValue.durationMinutes,
    types: workout?.types?.length === 0 ? initialValue.types : workout.types,
});
