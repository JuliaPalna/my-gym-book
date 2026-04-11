import type { AuthorizedUser } from '../../../../entities';
import { TYPE_ROLE_USER } from '../../../constants';

export const authorizedUserInitialState: AuthorizedUser = {
    roleId: TYPE_ROLE_USER.GUEST,
    login: '',
    // session: "",
};
