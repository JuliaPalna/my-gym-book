import type { Dispatch } from 'redux';
import type { RemoveWorkoutAction } from '../../types';
import { removeWorkout } from '../../api';
import { ACTION_TYPE } from '../../../../app/constants';

export const removeWorkoutAction = (id: string) => {
    return async (dispatch: Dispatch<RemoveWorkoutAction>): Promise<void> => {
        await removeWorkout(id);

        dispatch({
            type: ACTION_TYPE.REMOVE_WORKOUT,
            payload: id,
        });
    };
};
