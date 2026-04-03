import type { JSX } from 'react';
import type { ButtonProps } from './type';

export const Button = ({
    disabled = false,
    children,
    onClick,
    type = 'button',
    isLink = false,
}: ButtonProps): JSX.Element => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={`flex justify-center items-center
            w-full px-3 py-1.5
            font-semibold
            enabled:hover:scale-110
            transition-transform
            cursor-pointer
                ${
                    !isLink &&
                    `text-white text-sm/6
                bg-teal-800 disabled:bg-neutral-400
                enabled:hover:bg-teal-800/70 enabled:hover:scale-none
                transition-colors`
                }
            `}
        >
            {children}
        </button>
    );
};
