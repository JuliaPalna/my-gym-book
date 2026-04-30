import type { Dispatch } from 'redux';
import { fetchWorkout } from '../api';
import { ACTION_TYPE } from '../../../app/constants';
import type { SetWorkoutAction, Workout } from '../types';

export const setWorkoutAction = (id: string) => {
    return async (dispatch: Dispatch<SetWorkoutAction>): Promise<void> => {
        const loadedWorkout: Workout = await fetchWorkout(id);

        if (!loadedWorkout) {
            return;
        }

        dispatch({
            type: ACTION_TYPE.SET_WORKOUT,
            payload: loadedWorkout,
        });
    };
};
