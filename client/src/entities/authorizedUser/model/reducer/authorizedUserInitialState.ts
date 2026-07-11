import { TYPE_ROLE_USER } from '../../../../app/constants';
import type { AuthUser } from '../../../../entities';

export const authorizedUserInitialState: AuthUser = {
    id: '',
    roleId: TYPE_ROLE_USER.GUEST,
    login: '',
};
