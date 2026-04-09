import { type TypeRoleUser } from '../../../app/constants';

export interface authorizedUserStateProps {
    id: null | number;
    login: null | string;
    roleId: TypeRoleUser;
    session: null | string;
}
