import type { ACTION_TYPE } from '../../../app/constants';
import type { WorkoutFormValues } from '../lib';

export type WorkoutActionValues = Omit<WorkoutFormValues, 'startedAt'> & {
    startedAt: number;
};

export type Workout = WorkoutActionValues & { id: string };

export interface TypeWorkout {
    id: string;
    nameRu: string;
}

export interface UpdateWorkoutAction {
    type: typeof ACTION_TYPE.UPDATE_WORKOUT;
    payload: Workout;
}

export interface SetWorkoutAction {
    type: typeof ACTION_TYPE.SET_WORKOUT;
    payload: Workout;
}

export interface RemoveWorkoutAction {
    type: typeof ACTION_TYPE.REMOVE_WORKOUT;
    payload: string;
}

export type WorkoutActions =
    | RemoveWorkoutAction
    | SetWorkoutAction
    | UpdateWorkoutAction;
