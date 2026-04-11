import { ACTION_TYPE } from '../../../constants';
import type {
    AuthorizedUser,
    AuthorizedUserAction,
} from '../../../../entities';
import { authorizedUserInitialState } from './authorizedUserInitialState';

export const authorizedUserReducer = (
    state: AuthorizedUser = authorizedUserInitialState,
    action: AuthorizedUserAction,
): AuthorizedUser => {
    switch (action.type) {
        case ACTION_TYPE.SET_AUTHORIZED_USER: {
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
