import type { JSX } from 'react';
import { Button, ErrorMessage } from '../../shared';

export const UsersPage = (): JSX.Element => {
    const users = [
        { id: 1, name: 'David', registrationAt: '2022-06-20' },
        { id: 2, name: 'Lubov', registrationAt: '2025-07-10' },
        { id: 3, name: 'Egor', registrationAt: '2019-01-11' },
    ];

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
                    {users.map(({ id, name, registrationAt }) => {
                        return (
                            <li key={id}>
                                <span>{name}</span>
                                <span>{registrationAt}</span>

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
