import type { Workout, WorkoutFormValues } from '../../../entities';
import { formatDateYYYYMMDDTHHmm } from '../../../shared';

export const getDefaultValuesToWorkoutForm = (
    workout: Workout,
    initialValue: WorkoutFormValues,
) => ({
    startedAt:
        formatDateYYYYMMDDTHHmm(workout?.startedAt) || initialValue?.startedAt,
    description: workout.description || initialValue.description,
    durationMinutes: workout.durationMinutes || initialValue.durationMinutes,
    types: workout?.types?.length === 0 ? initialValue.types : workout.types,
});
