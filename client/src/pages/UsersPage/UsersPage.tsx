import type { JSX } from 'react';
import { useSelector } from 'react-redux';
import { Button, ErrorMessage, Title } from '../../shared';
import { usersSelector } from '../../entities';
import { timestampToInputValue } from '../../utils';

export const UsersPage = (): JSX.Element => {
    const users = useSelector(usersSelector);

    const onSaveUser = ({ id }: { id: string }): void => {};

    const onRemoveUser = ({ id }: { id: string }): void => {};

    return (
        <>
            <Title>Пользователи</Title>

            {users.length === 0 ? (
                <ErrorMessage>Пользователи не найдены</ErrorMessage>
            ) : (
                <ul className="grid grid-cols-2 gap-4 mt-10 sm:grid-cols-3">
                    <li key="th-login" className="font-bold">
                        Логин
                    </li>
                    <li key="th-date" className="font-bold">
                        Дата регистрации
                    </li>
                    <li key="th-gb" className="hidden sm:block"></li>

                    {users.map((user) => {
                        if (!user) {
                            return;
                        }

                        const { id, login, registeredAt } = user;

                        return (
                            <>
                                <li key={id}>
                                    <span>{login}</span>
                                </li>

                                <li key={`${id}-${registeredAt}`}>
                                    <span>
                                        {timestampToInputValue(registeredAt)}
                                    </span>
                                </li>

                                <li
                                    key={`${id}-gb`}
                                    className=" col-span-2 sm:col-span-1
                                    flex justify-between gap-3
                                    not-last:border-b-2 border-b-neutral-500 sm:border-none not-last:pb-6"
                                >
                                    <Button onClick={() => onSaveUser({ id })}>
                                        Сохранить
                                    </Button>

                                    <Button
                                        onClick={() => onRemoveUser({ id })}
                                    >
                                        Удалить
                                    </Button>
                                </li>
                            </>
                        );
                    })}
                </ul>
            )}
        </>
    );
};
