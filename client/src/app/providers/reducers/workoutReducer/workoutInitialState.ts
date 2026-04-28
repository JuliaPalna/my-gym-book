import type { Workout } from '../../../../entities';

export const workoutInitialState: Workout = {
    id: '',
    description: '',
    durationMinutes: 0,
    startedAt: Date.now(),
    types: [],
};
