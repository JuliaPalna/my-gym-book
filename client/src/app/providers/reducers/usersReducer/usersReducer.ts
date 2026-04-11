import type { UserActions, User } from '../../../../entities';
import { ACTION_TYPE } from '../../../constants';
import { usersInitialState } from './usersInitialState';

export const usersReducer = (
    state: User[] = usersInitialState,
    action: UserActions,
): User[] => {
    switch (action.type) {
        case ACTION_TYPE.SET_USERS: {
            return action.payload;
        }

        case ACTION_TYPE.REMOVE_USER: {
            return state.filter((user) => user?.id !== action.payload);
        }

        case ACTION_TYPE.UPDATE_USER: {
            return state.map((user) => {
                if (user.id === action.payload.id) {
                    return action.payload;
                }

                return user;
            });
        }

        default: {
            return state;
        }
    }
};
