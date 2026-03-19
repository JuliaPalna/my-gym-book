import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
    registrationSchema,
    type registrationFormValues,
} from './registrationSchema';

export const useRegistrationForm = () => {
    const { register, handleSubmit, formState } =
        useForm<registrationFormValues>({
            defaultValues: {
                login: '',
                password: '',
            },
            resolver: yupResolver(registrationSchema),
            mode: 'onChange',
        });

    const [errorServer, setErrorServer] = useState<string | null>(null);

    const onResetErrorServer = (): void => {
        setErrorServer(null);
    };

    const onSubmit = (data: registrationFormValues): void => {
        console.log(data);
    };

    return {
        formState,
        register,
        errorServer,
        handleSubmit,
        onSubmit,
        onResetErrorServer,
    };
};
