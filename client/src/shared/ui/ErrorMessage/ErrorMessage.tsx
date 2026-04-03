import type { JSX } from 'react';

interface ErrorMessageProps {
    children: string;
}

export const ErrorMessage = ({ children }: ErrorMessageProps): JSX.Element => {
    return <p className="text-red-800 font-light text-sm">{children}</p>;
};
