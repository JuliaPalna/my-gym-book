import { type TypeRoleUser } from '../../../app/constants';

export interface AuthorizedUser {
    login: string;
    roleId: TypeRoleUser;
    // session: string;
}

export interface AxiosResponseUserAuth {
    id: string;
    login: string;
    role_id: TypeRoleUser;
    registered_at: number;
}
