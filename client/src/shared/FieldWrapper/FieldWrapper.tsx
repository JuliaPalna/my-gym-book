import type { JSX } from 'react';
import { ErrorMessage } from '../ui';
import type { FieldWrapperProps } from './type';

export const FieldWrapper = ({
    error = '',
    htmlFor,
    title,
    children,
}: FieldWrapperProps): JSX.Element => {
    return (
        <div>
            <label htmlFor={htmlFor}>{title}</label>
            {children}
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </div>
    );
};
