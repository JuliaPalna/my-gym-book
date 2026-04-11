import type { Workout, WorkoutActions } from '../../../../entities';
import { ACTION_TYPE } from '../../../constants';
import { workoutInitialState } from './workoutInitialState';

export const workoutReducer = (
    state: Workout = workoutInitialState,
    action: WorkoutActions,
): Workout => {
    switch (action.type) {
        case ACTION_TYPE.SET_WORKOUT: {
            return {
                ...state,
                ...action.payload,
            };
        }

        case ACTION_TYPE.REMOVE_WORKOUT: {
            return workoutInitialState;
        }

        case ACTION_TYPE.UPDATE_WORKOUT: {
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
