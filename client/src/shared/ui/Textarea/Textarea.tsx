import type { FieldValues } from 'react-hook-form';
import type { TextareaProps } from './type';

export const Textarea = <T extends FieldValues>({
    placeholder = 'Введите...',
    ...props
}: TextareaProps<T>): React.JSX.Element => {
    return (
        <textarea
            {...props}
            placeholder={placeholder}
            className="inline-block w-full px-3 py-1
            bg-transparent sm:text-sm/6
            placeholder:text-brand-placeholder
            outline outline-2 outline-brand-border
            focus:outline-brand-border-dark
            transition-colors"
        />
    );
};
