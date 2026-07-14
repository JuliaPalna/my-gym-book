import type { FieldValues } from 'react-hook-form';
import type { InputProps } from './type';

export const Input = <T extends FieldValues>({
    type = 'text',
    placeholder = `Введите...`,
    autoComplete = 'off',
    ...props
}: InputProps<T>): React.JSX.Element => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            {...props}
            className="inline-block w-full px-3 py-1
            bg-transparent sm:text-sm/6
            text-brad-text placeholder:text-brand-placeholder
            outline outline-2 outline-brand-border
            focus:outline-brand-border-dark
            transition-colors"
        />
    );
};
