import type { Dispatch } from 'redux';
import { ACTION_TYPE } from '../../../app/constants';
import type { Workout } from '../types';
import { updateWorkoutApi } from '../api';

export interface UpdateWorkoutAction {
    type: typeof ACTION_TYPE.UPDATE_WORKOUT;
    payload: Workout;
}

export const updateWorkoutAction = (workout: Workout) => {
    return async (dispatch: Dispatch<UpdateWorkoutAction>): Promise<void> => {
        await updateWorkoutApi(workout);

        dispatch({
            type: ACTION_TYPE.UPDATE_WORKOUT,
            payload: workout,
        });
    };
};
