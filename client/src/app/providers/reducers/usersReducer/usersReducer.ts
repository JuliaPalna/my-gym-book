import type { usersAction, UsersStateProps } from '../../../../entities';
import { ACTION_TYPE } from '../../../constants';
import { usersInitialState } from './usersInitialState';

export const usersReducer = (
    state: UsersStateProps = usersInitialState,
    action: usersAction,
): UsersStateProps => {
    switch (action.type) {
        case ACTION_TYPE.SET_USERS: {
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
