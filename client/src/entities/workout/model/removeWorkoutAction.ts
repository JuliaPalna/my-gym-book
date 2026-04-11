import type { Dispatch } from 'redux';
import { ACTION_TYPE } from '../../../app/constants';
import { removeWorkoutApi } from '../api';

export interface RemoveWorkoutAction {
    type: typeof ACTION_TYPE.REMOVE_WORKOUT;
    payload: string;
}

export const removeWorkoutAction = (id: string) => {
    return async (dispatch: Dispatch<RemoveWorkoutAction>): Promise<void> => {
        await removeWorkoutApi(id);

        dispatch({
            type: ACTION_TYPE.REMOVE_WORKOUT,
            payload: id,
        });
    };
};
