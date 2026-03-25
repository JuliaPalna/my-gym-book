import type { authorizedUserStateProps } from '../../../../entities';
import { ROLE_USER } from '../../../constants';

export const authorizedUserInitialState: authorizedUserStateProps = {
    id: null,
    login: null,
    roleId: ROLE_USER.GUEST,
    session: null,
};
