import type { UseFormRegister, Path, FieldValues } from 'react-hook-form';

export interface InputProps<T extends FieldValues> {
    register?: UseFormRegister<T>;
    name?: Path<T>;
    type?: 'text' | 'password' | 'number' | 'date' | 'checkbox';
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    autoComplete?: string;
}
