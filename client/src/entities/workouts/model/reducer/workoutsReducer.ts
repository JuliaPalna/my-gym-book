import { workoutsPerMonthInitialState } from './initialState';
import type {
    SetWorkoutsPerMonthAction,
    WorkoutsPerMonth,
} from '../../../../entities';
import { ACTION_TYPE } from '../../../../app/constants';

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
