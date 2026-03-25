import type { JSX } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../../shared';
import { useHeader } from './useHeader';

export const Header = (): JSX.Element => {
    const { authorizedUser, onLogout } = useHeader();

    return (
        <header>
            <Link to="/">LOGO</Link>

            <span>{authorizedUser.login}</span>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/login">Войти</NavLink>
                    </li>
                    <li>
                        <Button onClick={onLogout}>Выйти</Button>
                    </li>
                    <li>
                        <NavLink to="/workouts">Тренировки</NavLink>
                    </li>

                    <li>
                        <NavLink to="/admin/users">Админ</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
