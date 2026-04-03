import type { authorizedUserStateProps } from '../../../../entities';
import { ROLE_USER } from '../../../constants';

export const authorizedUserInitialState: authorizedUserStateProps = {
    id: null,
    roleId: ROLE_USER.GUEST,
    login: null,
    session: null,
};
