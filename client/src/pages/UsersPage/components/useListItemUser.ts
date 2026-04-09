import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    removeUsersAction,
    updateUsersAction,
    type AppDispatch,
    type UserProps,
} from '../../../entities';
import { useFetch } from '../../../app/hooks';
import type { TypeRoleUser } from '../../../app/constants';

export const useListItemUser = (user: UserProps) => {
    const [roleSelected, setRoleSelected] = useState<TypeRoleUser>(user.roleId);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const dispatch = useDispatch<AppDispatch>();

    const [errorRemove, isRemoving, fetchRemoveUser] = useFetch({
        callback: async () => {
            await dispatch(removeUsersAction(user.id));
        },
    });

    const [_, isUpdating, fetchUpdateUser] = useFetch({
        callback: async () => {
            await dispatch(
                updateUsersAction({ ...user, roleId: roleSelected }),
            );
        },
    });

    const onOpenModal = (): void => {
        setIsOpenModal(true);
    };

    const onCloseModal = (): void => {
        setIsOpenModal(false);
    };

    const onSave = (): void => {
        fetchUpdateUser();
    };

    const onRemove = (): void => {
        fetchRemoveUser();

        if (!errorRemove) {
            onCloseModal();
        }
    };

    const onChangeRoleSelected = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ): void => {
        setRoleSelected(event.target.value as TypeRoleUser);
    };

    return {
        roleSelected,
        errorRemove,
        isUpdating,
        isOpenModal,
        isRemoving,
        onOpenModal,
        onCloseModal,
        onSave,
        onRemove,
        onChangeRoleSelected,
    };
};
