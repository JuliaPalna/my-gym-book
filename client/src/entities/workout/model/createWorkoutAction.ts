import type { Dispatch } from 'redux';
import { addWorkout } from '../api';
import { ACTION_TYPE } from '../../../app/constants';
import type { SetWorkoutAction, Workout, WorkoutActionProps } from '../types';

export const createWorkoutAction = (data: WorkoutActionProps) => {
    return async (dispatch: Dispatch<SetWorkoutAction>): Promise<void> => {
        const newWorkout: Workout = await addWorkout(data);

        dispatch({
            type: ACTION_TYPE.SET_WORKOUT,
            payload: newWorkout,
        });
    };
};
