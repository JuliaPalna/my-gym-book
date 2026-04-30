import type { WorkoutActionProps } from '../../../entities';
import { inputValueToTimestamp } from '../../../utils';
import type { WorkoutFormValues } from '../constants';

export const mapWorkoutToServer = (
    data: WorkoutFormValues,
): WorkoutActionProps => ({
    durationMinutes: data.durationMinutes,
    description: data.description,
    types: data.types,
    startedAt: inputValueToTimestamp(data.date),
});
