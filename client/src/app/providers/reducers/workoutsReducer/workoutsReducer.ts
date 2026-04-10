import { ACTION_TYPE } from '../../../constants';
import { workoutsPerMonthInitialState } from './initialState';
import type {
    SetWorkoutsPerMonthAction,
    WorkoutsPerMonth,
} from '../../../../entities';

export const workoutsPerMonthReducer = (
    state: WorkoutsPerMonth = workoutsPerMonthInitialState,
    action: SetWorkoutsPerMonthAction,
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
