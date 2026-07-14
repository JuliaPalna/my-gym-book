import { Link } from 'react-router-dom';
import { Button } from '../../shared';
import { BurgerMenu, ModalNavigationMenu, NavigationMenu } from './components';
import { useHeader } from './useHeader';
import { useOpen } from '../../app/hooks';
import { NavigationLink } from '../../shared/ui/NavigationLink';
import Logo from '../../app/assets/icons/logo.svg?react';

export const Header = (): React.JSX.Element => {
    const { navigationList, isAuthorizedUser, onLogout } = useHeader();
    const { isOpen, onOpen, onClose } = useOpen();

    return (
        <header
            className="fixed inset-x-0 top-0 z-fixed
            flex-between sm:gap-list
            p-layout sm:p-x-layout-sm lg:p-x-layout-lg
            bg-inherit sm:shadow-2xl"
        >
            <div className="inline-block sm:hidden">
                <BurgerMenu onOpen={onOpen} />

                <ModalNavigationMenu
                    isOpen={isOpen}
                    onClose={onClose}
                    list={navigationList}
                />
            </div>

            <div>
                <Link to="/">
                    <span className="sr-only">Your Company</span>

                    <Logo className="h-8 w-auto fill-brand-primary" />
                </Link>
            </div>

            <div className="hidden sm:block">
                <NavigationMenu list={navigationList} />
            </div>

            <div>
                {isAuthorizedUser ? (
                    <div>
                        <Button onClick={onLogout} variant="link">
                            Выйти
                        </Button>
                    </div>
                ) : (
                    <NavigationLink href="/login" variant="header">
                        <>
                            Войти <span aria-hidden="true">&rarr;</span>
                        </>
                    </NavigationLink>
                )}
            </div>
        </header>
    );
};
