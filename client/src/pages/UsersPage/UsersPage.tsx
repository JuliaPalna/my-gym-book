import { useState, type JSX } from 'react';
import { useSelector } from 'react-redux';
import { Button, ErrorMessage, Title, ConfirmDeleteModal } from '../../shared';
import { usersSelector } from '../../entities';
import { timestampToInputValue } from '../../utils';

export const UsersPage = (): JSX.Element => {
    const users = useSelector(usersSelector);
    const [isOpenModalToConfirmDelete, setIsOpenModalToConfirmDelete] =
        useState<boolean>(false);

    const onSaveUser = ({ id }: { id: string }): void => {};

    const onToggleModalToConfirmDelete = (): void => {
        setIsOpenModalToConfirmDelete(!isOpenModalToConfirmDelete);
    };

    const onRemoveUser = () => {
        console.log('remove');
        onToggleModalToConfirmDelete();
    };

    return (
        <>
            <Title>Пользователи</Title>

            {users.length === 0 ? (
                <ErrorMessage>Пользователи не найдены</ErrorMessage>
            ) : (
                <ul className="flex flex-col gap-4 mt-10 ">
                    <li className="grid grid-cols-2 gap-1 sm:grid-cols-3">
                        <span className="font-bold col-start-1 col-end-3 sm:col-auto sm:row-auto">
                            Логин
                        </span>
                        <span className="font-bold col-start-1 col-end-3 row-start-2 sm:col-auto sm:row-auto">
                            Дата регистрации
                        </span>
                        <span className="hidden"></span>
                    </li>

                    {users.map((user) => {
                        if (!user) {
                            return;
                        }

                        const { id, login, registeredAt } = user;

                        return (
                            <li
                                key={id}
                                className="grid grid-cols-2 gap-1 sm:grid-cols-3
                                border-t-2 border-neutral-400 py-2"
                            >
                                <span className="col-end-2">{login}</span>

                                <span className="col-end-2 row-start-2 sm:col-auto sm:row-auto">
                                    {timestampToInputValue(registeredAt)}
                                </span>

                                <div
                                    className="col-start-2 row-start-1 row-end-3 sm:col-auto sm:row-auto
                                    flex flex-col sm:flex-row gap-1"
                                >
                                    <Button onClick={() => onSaveUser({ id })}>
                                        С
                                    </Button>

                                    <Button
                                        onClick={onToggleModalToConfirmDelete}
                                    >
                                        У
                                    </Button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}

            {isOpenModalToConfirmDelete && (
                <ConfirmDeleteModal
                    message="Подтвердите удаление пользователя?"
                    onConfirm={onRemoveUser}
                    onCancel={onToggleModalToConfirmDelete}
                />
            )}
        </>
    );
};
