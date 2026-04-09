import type { authorizedUserStateProps } from '../../../../entities';
import { TYPE_ROLE_USER } from '../../../constants';

export const authorizedUserInitialState: authorizedUserStateProps = {
    id: null,
    roleId: TYPE_ROLE_USER.GUEST,
    login: null,
    session: null,
};
