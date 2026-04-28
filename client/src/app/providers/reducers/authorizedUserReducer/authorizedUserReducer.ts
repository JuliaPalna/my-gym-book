import { ACTION_TYPE } from '../../../constants';
import type { AuthUserActions, User } from '../../../../entities';
import { authorizedUserInitialState } from './authorizedUserInitialState';

export const authorizedUserReducer = (
    state: User = authorizedUserInitialState,
    action: AuthUserActions,
): User => {
    switch (action.type) {
        case ACTION_TYPE.SET_AUTHORIZED_USER: {
            return {
                ...state,
                ...action.payload,
            };
        }

        case ACTION_TYPE.REMOVE_AUTHORIZED_USER: {
            return authorizedUserInitialState;
        }

        default: {
            return state;
        }
    }
};
