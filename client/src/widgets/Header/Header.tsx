import { Link, NavLink } from 'react-router-dom';
import { Button } from '../../shared';
import { BurgerMenu, NavigationMenu } from './components';
import { useHeader } from './useHeader';
import { navigationList } from './constants';

export const Header: React.FC = () => {
    const {
        isAuthorizedUser,
        isOpenNavigationMenu,
        onLogout,
        onToggleNavigationMenu,
    } = useHeader();

    return (
        <header
            className="fixed inset-x-0 top-0 z-10
            flex justify-between items-center sm:gap-1
            py-3 px-1.5 sm:p-6 lg:px-8
            border-b-3 border-b-neutral-600/20
            bg-white sm:shadow-2xl sm:border-none"
        >
            <BurgerMenu onOpen={onToggleNavigationMenu} />

            <div className="block sm:hidden">
                <NavigationMenu
                    isOpen={isOpenNavigationMenu}
                    onClose={onToggleNavigationMenu}
                />
            </div>

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

            <nav aria-label="Global" className="hidden sm:block">
                <ul className="flex flex-row justify-between items-center flex-nowrap gap-4">
                    {navigationList.map((item) => (
                        <li key={item.id}>
                            <NavLink
                                to={item.href}
                                className={({ isActive }) => {
                                    return `block relative py-2
                                    border-b-2 border-transparent
                                    text-md font-medium text-center text-nowrap
                                    transition-colors duration-200
                                    ${
                                        isActive
                                            ? 'border-b-teal-600 text-teal-600'
                                            : `before:content-[""] before:absolute
                                            before:-bottom-0.5  before:inset-x-0 before:h-0.5
                                            before:scale-x-0 hover:before:scale-x-100
                                            before:bg-teal-600 before:transition-transform`
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
