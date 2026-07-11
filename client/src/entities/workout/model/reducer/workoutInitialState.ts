import type { Workout } from '../../../../entities';
import { getToday } from '../../../../shared';

export const workoutInitialState: Workout = {
    id: '',
    description: '',
    durationMinutes: 0,
    startedAt: getToday(),
    types: [],
};
