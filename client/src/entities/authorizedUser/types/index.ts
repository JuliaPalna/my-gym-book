import { type RoleUserType } from '../../../app/constants';

export interface authorizedUserStateProps {
    id: null | number;
    login: null | string;
    roleId: RoleUserType;
    session: null | string;
}
