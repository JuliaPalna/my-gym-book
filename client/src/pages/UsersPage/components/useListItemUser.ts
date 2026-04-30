import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    removeUserAction,
    updateUserAction,
    type AppDispatch,
    type User,
} from '../../../entities';
import { useFetch } from '../../../app/hooks';
import type { TypeRoleUser } from '../../../app/constants';

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

    const onChangeRoleSelected = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ): void => {
        setRoleSelected(event.target.value as TypeRoleUser);
    };

    return {
        roleSelected,
        stateRemove,
        stateUpdate,
        onChangeRoleSelected,
    };
};
