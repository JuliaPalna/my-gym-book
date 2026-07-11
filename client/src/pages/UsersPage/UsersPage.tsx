import { ErrorMessage, Title, Loader } from '../../shared';
import { ListItemUser } from './components';
import { useUsersPage } from './useUsersPage';

const UsersPage = (): React.JSX.Element => {
    const { users, userRoles, isLoading, error } = useUsersPage();

    if (error) {
        return <ErrorMessage>{`Ошибка: ${error}`}</ErrorMessage>;
    }

    return (
        <>
            <Title>Пользователи</Title>

            <ul className="flex-column gap-list mt-10 ">
                <li
                    key={'header'}
                    className="grid grid-cols-2 gap-list sm:grid-cols-4"
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

                {isLoading ? (
                    <div className="flex-center">
                        <Loader />
                    </div>
                ) : users.length === 0 ? (
                    <ErrorMessage>Пользователи не найдены</ErrorMessage>
                ) : (
                    users.map((user) => {
                        if (!user) {
                            return;
                        }

                        return (
                            <ListItemUser
                                key={user.id}
                                user={user}
                                roles={userRoles}
                            />
                        );
                    })
                )}
            </ul>
        </>
    );
};

export default UsersPage;
