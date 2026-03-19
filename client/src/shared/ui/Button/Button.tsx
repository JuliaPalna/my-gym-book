import type { JSX } from 'react';
import type { ButtonProps } from './type';

export const Button = ({
    disabled = false,
    children,
    onClick,
    type = 'button',
}: ButtonProps): JSX.Element => {
    return (
        <button onClick={onClick} disabled={disabled} type={type}>
            {children}
        </button>
    );
};
