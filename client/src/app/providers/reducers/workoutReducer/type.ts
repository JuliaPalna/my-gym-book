import type { WorkoutState } from './workoutState';

interface SetWorkoutAction {
    type: 'SET_WORKOUT';
    payload: Partial<WorkoutState>;
}

interface ResetWorkoutAction {
    type: 'RESET_WORKOUT';
}

export type WorkoutAction = SetWorkoutAction | ResetWorkoutAction;
