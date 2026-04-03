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
        <div className="flex flex-col justify-center min-h-full gap-1.5">
            <label
                htmlFor={htmlFor}
                className="block text-sm/6 font-medium text-neutral-900"
            >
                {title}
            </label>

            {children}

            <div>{error && <ErrorMessage>{error}</ErrorMessage>}</div>
        </div>
    );
};
