import type { UseFormRegister, FieldValues } from 'react-hook-form';

export interface TextareaProps<T extends FieldValues> {
    register?: UseFormRegister<T>;
    placeholder?: string;
    autoComplete?: string;
}
