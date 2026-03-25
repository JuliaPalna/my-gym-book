import { ACTION_TYPE } from '../../../constants';
import { workoutsInitialState } from './workoutsState';
import type { WorkoutsAction, WorkoutsStateProps } from '../../../../entities';

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
