import type { RoleUser, User } from '../../../entities';

export interface ListItemProps {
    user: User;
    roles: RoleUser[];
}
