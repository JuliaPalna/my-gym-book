import type { User } from '../../../../entities';
import { TYPE_ROLE_USER } from '../../../constants';

export const authorizedUserInitialState: User = {
    id: '',
    roleId: TYPE_ROLE_USER.GUEST,
    login: '',
    registeredAt: 0,
};
