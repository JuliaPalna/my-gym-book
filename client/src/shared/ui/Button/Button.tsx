import type { JSX } from 'react';
import { twMerge } from 'tailwind-merge';
import type { ButtonProps } from './type';
import { buttonVariants } from './buttonVariants';

export const Button = ({
    disabled = false,
    children,
    onClick,
    type = 'button',
    variant,
    size,
    ...props
}: ButtonProps): JSX.Element => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={twMerge(buttonVariants({ variant, size }))}
            {...props}
        >
            {children}
        </button>
    );
};
