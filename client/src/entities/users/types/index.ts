import type { RoleUserType } from '../../../app/constants';

export interface UserStateProps {
    id: string;
    roleId: RoleUserType;
    login: string;
    registeredAt: number;
}

export type UsersStateProps = (UserStateProps | undefined)[];
