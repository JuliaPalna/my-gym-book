import { ACTION_TYPE } from '../../../../app/constants';
import type { AuthUserActions, AuthUser } from '../../../../entities';
import { authorizedUserInitialState } from './authorizedUserInitialState';

export const authorizedUserReducer = (
    state: AuthUser = authorizedUserInitialState,
    action: AuthUserActions,
): AuthUser => {
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
