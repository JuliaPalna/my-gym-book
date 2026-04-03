import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    authorizationSchema,
    type AuthorizationValuesProps,
} from './authorizationSchema';

export const useAuthorizationPage = () => {
    const { register, handleSubmit, formState } =
        useForm<AuthorizationValuesProps>({
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

    const onSubmitAuthorizationUser = (
        data: AuthorizationValuesProps,
    ): void => {};

    const onSubmit = handleSubmit(onSubmitAuthorizationUser);

    return {
        formState,
        register,
        errorServer,
        onSubmit,
        onResetErrorServer,
    };
};
