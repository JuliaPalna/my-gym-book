import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    authorizationSchema,
    type authorizationFormValues,
} from './authorizationSchema';

export const useAuthorizationForm = () => {
    const { register, handleSubmit, formState } =
        useForm<authorizationFormValues>({
            defaultValues: {
                login: '',
                password: '',
            },
            resolver: yupResolver(authorizationSchema),
            mode: 'onChange',
        });

    const [errorServer, setErrorServer] = useState<string | null>(null);

    const onResetErrorServer = (): void => {
        setErrorServer(null);
    };

    const onSubmit = (data: authorizationFormValues): void => {
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
