import type { WorkoutStateProps } from './type';

export const workoutInitialState: WorkoutStateProps = {
    id: '',
    duration: 0,
    createdAt: Date.now(),
    description: '',
    types: [],
};
