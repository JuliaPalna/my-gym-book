import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    removeUserAction,
    updateUserAction,
    type AppDispatch,
    type User,
} from '../../../entities';
import { useFetch } from '../../../app/hooks';
import { TYPE_ROLE_USER, type TypeRoleUser } from '../../../app/constants';

export const useListItemUser = (user: User) => {
    const [roleSelected, setRoleSelected] = useState<TypeRoleUser>(user.roleId);
    const dispatch = useDispatch<AppDispatch>();

    const stateRemove = useFetch({
        callback: async () => {
            await dispatch(removeUserAction(user.id));
        },
    });

    const stateUpdate = useFetch({
        callback: async () => {
            await dispatch(updateUserAction({ ...user, roleId: roleSelected }));
        },
    });

    const onChangeRoleSelected = ({
        target,
    }: {
        target: EventTarget;
    }): void => {
        if (target instanceof HTMLSelectElement) {
            const newRole = target.value;
            const isValid =
                TYPE_ROLE_USER.ADMIN === newRole ||
                TYPE_ROLE_USER.USER === newRole;

            if (isValid) {
                setRoleSelected(newRole);
            }
        }
        return;
    };

    return {
        roleSelected,
        stateRemove,
        stateUpdate,
        onChangeRoleSelected,
    };
};
