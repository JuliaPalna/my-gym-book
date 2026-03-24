import { ACTION_TYPE } from '../../../app/constants';
import type { WorkoutsStateProps } from '../../../app/providers';

interface SetWorkoutAction {
    type: typeof ACTION_TYPE.SET_WORKOUT;
    payload: WorkoutsStateProps;
}

export const setWorkoutAction = (
    data: WorkoutsStateProps,
): SetWorkoutAction => ({
    type: ACTION_TYPE.SET_WORKOUTS,
    payload: data,
});

export type WorkoutAction = SetWorkoutAction;
