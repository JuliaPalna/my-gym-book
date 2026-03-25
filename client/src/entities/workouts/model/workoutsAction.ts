import { ACTION_TYPE } from '../../../app/constants';
import type { WorkoutsStateProps } from '../../../app/providers';

interface SetWorkoutsAction {
    type: typeof ACTION_TYPE.SET_WORKOUTS;
    payload: WorkoutsStateProps;
}

export const setWorkoutsAction = (
    data: WorkoutsStateProps,
): SetWorkoutsAction => ({
    type: ACTION_TYPE.SET_WORKOUTS,
    payload: data,
});

export type WorkoutsAction = SetWorkoutsAction;
