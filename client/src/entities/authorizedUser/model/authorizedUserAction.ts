import { ACTION_TYPE } from '../../../app/constants';
import type { authorizedUserStateProps } from '../types';

interface SetAuthorizedUserAction {
    type: typeof ACTION_TYPE.SET_AUTHORIZED_USER;
    payload: authorizedUserStateProps;
}

export const authorizedUserAction = (
    data: authorizedUserStateProps,
): SetAuthorizedUserAction => ({
    type: ACTION_TYPE.SET_AUTHORIZED_USER,
    payload: data,
});

export type AuthorizedUserAction = SetAuthorizedUserAction;
