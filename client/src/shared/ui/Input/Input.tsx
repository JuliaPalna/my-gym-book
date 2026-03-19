import type { JSX } from 'react';
import type { FieldValues } from 'react-hook-form';
import type { InputProps } from './type';

export const Input = <T extends FieldValues>({
    type = 'text',
    placeholder = `Введите ...`,
    ...props
}: InputProps<T>): JSX.Element => {
    return <input type={type} placeholder={placeholder} {...props} />;
};
