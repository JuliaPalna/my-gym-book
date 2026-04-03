import type { JSX } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../../shared';
import { useHeader } from './useHeader';

export const Header = (): JSX.Element => {
    const { authorizedUser, onLogout } = useHeader();

    const isAuthorizedUser = authorizedUser;

    const navigation = [
        { name: 'Тренировки', href: '/workouts' },
        { name: 'Админ', href: '/admin/users' },
        { name: 'Создать тренировку', href: '/workout' },
    ];

    return (
        <header
            className="fixed inset-x-0 top-0 z-50
            flex justify-between items-center sm:gap-1
            py-3 px-1.5 sm:p-6 lg:px-8
            border-b-3 border-b-neutral-600/20
            bg-white sm:shadow-2xl sm:border-none"
        >
            <div>
                <Link to="/">
                    <span className="sr-only">Your Company</span>
                    <img
                        alt="logo"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=teal&shade=600"
                        className="h-8 w-auto"
                    />
                </Link>
            </div>

            <nav aria-label="Global">
                <ul className="flex flex-col sm:flex-row justify-between items-center flex-nowrap">
                    {navigation.map((item) => (
                        <li key={item.name} className="w-full">
                            <NavLink
                                to={item.href}
                                className={({ isActive }) => {
                                    return `block  px-3 py-1.5 sm:py-2
                                    text-md  font-medium text-center text-nowrap
                                    transition-colors
                                    ${
                                        isActive
                                            ? 'bg-teal-800 text-white'
                                            : 'hover:bg-teal-800/20'
                                    }
                                    `;
                                }}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div>
                {isAuthorizedUser ? (
                    <div>
                        <Button onClick={onLogout} isLink={true}>
                            Выйти
                        </Button>
                    </div>
                ) : (
                    <NavLink to="/login" className="text-sm/6 font-semibold">
                        Войти <span aria-hidden="true">&rarr;</span>
                    </NavLink>
                )}
            </div>
        </header>
    );
};
