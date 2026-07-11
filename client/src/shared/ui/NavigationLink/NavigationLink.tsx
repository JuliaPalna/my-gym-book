import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { navigationLinkVariants } from './navigationLinkVariants';

export const NavigationLink = ({
    href,
    children,
    variant,
}: {
    href: string;
    children: React.ReactNode;
    variant?: 'default' | 'modal' | 'header';
}): React.JSX.Element => {
    function getActiveClasses(isActive: boolean): string {
        let modalActiveClasses = 'bg-brand-primary text-brand-text-light';

        if (variant === 'modal') {
            modalActiveClasses = isActive
                ? 'bg-brand-primary text-brand-text-light'
                : 'hover:bg-brand-primary-hover hover:text-brand-text-light';
        } else if (variant === 'header') {
            modalActiveClasses = isActive
                ? 'before:bg-brand-primary text-brand-primary'
                : `before:scale-x-0 hover:before:scale-x-110
                hover:before:bg-brand-primary before:transition-transform`;
        }

        return modalActiveClasses;
    }

    return (
        <NavLink
            to={href}
            className={({ isActive }) => {
                return twMerge(
                    navigationLinkVariants({ variant }),
                    getActiveClasses(isActive),
                );
            }}
        >
            {children}
        </NavLink>
    );
};
