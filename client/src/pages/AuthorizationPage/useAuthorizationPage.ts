import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { authorizationSchema } from './authorizationSchema';
import { useFetch } from '../../app/hooks';
import {
    authorizationAction,
    type AppDispatch,
    type AuthorizationData,
} from '../../entities';

export const useAuthorizationPage = () => {
    const [errorServer, setErrorServer] = useState<string | null>(null);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const { register, handleSubmit, formState, reset } =
        useForm<AuthorizationData>({
            defaultValues: {
                login: '',
                password: '',
            },
            resolver: yupResolver(authorizationSchema),
            mode: 'onChange',
        });

    const [errorAuthorization, isLoading, authorization] =
        useFetch<AuthorizationData>({
            callback: async (data) => {
                if (!data) {
                    return;
                }

                const userAuth = await dispatch(authorizationAction(data));
                sessionStorage.setItem('auth', JSON.stringify(userAuth.login));
                navigate('/');
                reset();
            },
        });

    const errorState = errorServer || errorAuthorization;

    const onResetErrorServer = (): void => {
        setErrorServer(null);
    };

    const onSubmitAuthorization = (data: AuthorizationData): void => {
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
