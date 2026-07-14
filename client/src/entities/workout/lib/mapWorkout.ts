import type { WorkoutActionValues, WorkoutFormValues } from '../../../entities';
import { getTimestamp } from '../../../shared';

export const mapWorkoutToServer = (
    data: WorkoutFormValues,
): WorkoutActionValues => ({
    durationMinutes: data.durationMinutes,
    description: data.description,
    types: data.types,
    startedAt: getTimestamp(data.startedAt),
});
