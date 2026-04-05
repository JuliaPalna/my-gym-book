import type { JSX } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../../../../shared';
import { navigationList } from '../../constants';

export const NavigationMenu = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}): JSX.Element => {
    return (
        <div
            className={`fixed top-0 bottom-0 left-0 max-w-md
            border-r-3 border-r-neutral-600/20 bg-white
            ${isOpen ? 'block sm:hidden' : 'hidden'}`}
        >
            <div className="relative size-6 ml-6 mt-6">
                <Button isLink={true} onClick={onClose}>
                    <span
                        className='before:content-[""] before:absolute before:inset-x-0
                        before:border-b-2 before:border-neutral-900
                        before:top-[50%] before:rotate-45
                        after:content-[""] after:absolute after:inset-x-0
                        after:border-b-2 after:border-neutral-900
                        after:top-[50%] after:-rotate-45'
                    ></span>
                </Button>
            </div>

            <nav className="pt-8">
                <ul className="flex flex-col" onClick={onClose}>
                    {navigationList.map((item, index) => {
                        return (
                            <li key={index} className="bg-transparent">
                                <NavLink
                                    to={item.href}
                                    className={({ isActive }) => {
                                        return `block py-3 px-6 transition-colors
                                        ${
                                            isActive
                                                ? 'bg-teal-600'
                                                : `hover:bg-teal-600/30`
                                        }`;
                                    }}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};
