import type { WorkoutStateProps } from '../../../../entities';

export const workoutInitialState: WorkoutStateProps = {
    duration: 0,
    startedAt: Date.now(),
    description: '',
    types: [],
};
