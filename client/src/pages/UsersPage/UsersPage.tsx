import { ErrorMessage, Title, Loader } from '../../shared';
import { ListItemUser } from './components';
import { useUsersPage } from './useUsersPage';

export const UsersPage: React.FC = () => {
    const { users, isLoading, error } = useUsersPage();

    if (isLoading) {
        return (
            <div className="flex justify-center">
                <Loader />
            </div>
        );
    }

    if (error) {
        return <ErrorMessage>{`Ошибка: ${error}`}</ErrorMessage>;
    }

    return (
        <>
            <Title>Пользователи</Title>

            {users.length === 0 ? (
                <ErrorMessage>Пользователи не найдены</ErrorMessage>
            ) : (
                <ul className="flex flex-col gap-4 mt-10 ">
                    <li
                        key={'header'}
                        className="grid grid-cols-2 gap-1 sm:grid-cols-4"
                    >
                        <span className="font-bold col-start-1 col-end-3 sm:col-auto sm:row-auto">
                            Логин
                        </span>

                        <span className="font-bold col-start-1 col-end-3 row-start-2 sm:col-auto sm:row-auto">
                            Дата регистрации
                        </span>

                        <span className="font-bold col-start-1 col-end-3 row-start-3 sm:col-auto sm:row-auto">
                            Роль
                        </span>
                        <span className="hidden"></span>
                    </li>

                    {users.map((user) => {
                        if (!user) {
                            return;
                        }

                        return <ListItemUser key={user.id} user={user} />;
                    })}
                </ul>
            )}
        </>
    );
};
