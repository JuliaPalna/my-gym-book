import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    authorizationSchema,
    type AuthorizationValuesProps,
} from './authorizationSchema';
import { useFetch } from '../../app/hooks';
import { authorizationAction, type AppDispatch } from '../../entities';

export const useAuthorizationPage = () => {
    const [errorServer, setErrorServer] = useState<string | null>(null);
    const dispatch = useDispatch<AppDispatch>();

    const { register, handleSubmit, formState } =
        useForm<AuthorizationValuesProps>({
            defaultValues: {
                login: '',
                password: '',
            },
            resolver: yupResolver(authorizationSchema),
            mode: 'onChange',
        });

    const [errorAuthorization, isLoading, authorization] =
        useFetch<AuthorizationValuesProps>({
            callback: async (data) => {
                if (!data) {
                    return;
                }

                await dispatch(authorizationAction(data));
            },
        });

    const errorState = errorServer || errorAuthorization;

    const onResetErrorServer = (): void => {
        setErrorServer(null);
    };

    const onSubmitAuthorization = (data: AuthorizationValuesProps): void => {
        authorization(data);
    };

    return {
        formState,
        register,
        errorState,
        isLoading,
        handleSubmit,
        onSubmitAuthorization,
        onResetErrorServer,
    };
};
