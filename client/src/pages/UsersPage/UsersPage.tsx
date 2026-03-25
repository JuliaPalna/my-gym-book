import type { JSX } from 'react';
import { useSelector } from 'react-redux';
import { Button, ErrorMessage } from '../../shared';
import { usersSelector } from '../../entities';
import { timestampToInputValue } from '../../utils';

export const UsersPage = (): JSX.Element => {
    const users = useSelector(usersSelector);

    const onSaveUser = ({ id }: { id: number }): void => {};

    const onRemoveUser = ({ id }: { id: number }): void => {};

    return (
        <>
            <h1>Админ</h1>

            <h2>Пользователи</h2>

            {users.length === 0 ? (
                <ErrorMessage>Пользователи не найдены</ErrorMessage>
            ) : (
                <ul>
                    {users.map((user) => {
                        if (!user) {
                            return;
                        }

                        const { id, name, registrationAt } = user;

                        return (
                            <li key={id}>
                                <span>{name}</span>
                                <span>
                                    {timestampToInputValue(registrationAt)}
                                </span>

                                <div>
                                    <Button onClick={() => onSaveUser({ id })}>
                                        Сохранить
                                    </Button>

                                    <Button
                                        onClick={() => onRemoveUser({ id })}
                                    >
                                        Удалить
                                    </Button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
};
