import type { Dispatch } from 'redux';
import { removeWorkout } from '../api';
import { ACTION_TYPE } from '../../../app/constants';
import type { RemoveWorkoutAction } from '../types';

export const removeWorkoutAction = (id: string) => {
    return async (dispatch: Dispatch<RemoveWorkoutAction>): Promise<void> => {
        await removeWorkout(id);

        dispatch({
            type: ACTION_TYPE.REMOVE_WORKOUT,
            payload: id,
        });
    };
};
