import type { Dispatch } from 'redux';
import { ACTION_TYPE } from '../../../app/constants';
import type { Workout } from '../types';
import { createWorkoutApi } from '../api';

export interface CreateWorkoutAction {
    type: typeof ACTION_TYPE.CREATE_WORKOUT;
    payload: Workout;
}

export const createWorkoutAction = (workout: Workout) => {
    return async (dispatch: Dispatch<CreateWorkoutAction>): Promise<void> => {
        await createWorkoutApi(workout);

        dispatch({
            type: ACTION_TYPE.CREATE_WORKOUT,
            payload: workout,
        });
    };
};
