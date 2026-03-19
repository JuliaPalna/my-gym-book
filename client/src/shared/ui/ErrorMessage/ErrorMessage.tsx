import type { JSX } from 'react';

interface ErrorMessageProps {
    children: string;
}

export const ErrorMessage = ({ children }: ErrorMessageProps): JSX.Element => {
    return <p>{children}</p>;
};
