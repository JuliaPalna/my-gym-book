import { ACTION_TYPE } from '../../../constants';
import type {
    AuthorizedUserAction,
    authorizedUserStateProps,
} from '../../../../entities';
import { authorizedUserInitialState } from './authorizedUserInitialState';

export const authorizedUserReducer = (
    state: authorizedUserStateProps = authorizedUserInitialState,
    action: AuthorizedUserAction,
): authorizedUserStateProps => {
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
