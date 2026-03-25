import type { WorkoutStateProps } from '../../../../entities';

export const workoutInitialState: WorkoutStateProps = {
    duration: 0,
    createdAt: Date.now(),
    description: '',
    types: [],
};
