import type { JSX } from 'react';
import type { FieldValues } from 'react-hook-form';
import type { InputProps } from './type';

export const Input = <T extends FieldValues>({
    type = 'text',
    placeholder = `Введите ...`,
    ...props
}: InputProps<T>): JSX.Element => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            {...props}
            className="block w-full px-3 py-1.5
                bg-white text-base sm:text-sm/6
                text-neutral-900 placeholder:text-neutral-400
                outline-1 -outline-offset-1 outline-neutral-300
                focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600 transition-colors"
        />
    );
};
