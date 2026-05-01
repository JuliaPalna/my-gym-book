import type { WorkoutActionProps } from '../../../entities';
import { getTimestamp } from '../../../utils';
import type { WorkoutFormValues } from '../constants';

export const mapWorkoutToServer = (
    data: WorkoutFormValues,
): WorkoutActionProps => ({
    durationMinutes: data.durationMinutes,
    description: data.description,
    types: data.types,
    startedAt: getTimestamp(data.date),
});
