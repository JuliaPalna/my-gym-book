import type { WorkoutsAction } from '../../../../pages';
import { ACTION_TYPE } from '../../../constants';
import { workoutsInitialState } from './workoutsState';
import type { WorkoutsStateProps } from './type';

export const workoutsReducer = (
    state: WorkoutsStateProps = workoutsInitialState,
    action: WorkoutsAction,
) => {
    switch (action.type) {
        case ACTION_TYPE.SET_WORKOUTS: {
            return {
                ...state,
                ...action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
