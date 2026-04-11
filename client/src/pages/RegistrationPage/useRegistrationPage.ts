import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    registrationSchema,
    type RegistrationValuesProps,
} from './registrationSchema';
import {
    registrationAction,
    type AppDispatch,
    type AuthorizationData,
} from '../../entities';
import { useFetch } from '../../app/hooks';

export const useRegistrationPage = () => {
    const [errorServer, setErrorServer] = useState<string | null>(null);
    const dispatch = useDispatch<AppDispatch>();

    const { register, handleSubmit, formState } =
        useForm<RegistrationValuesProps>({
            defaultValues: {
                login: '',
                password: '',
            },
            resolver: yupResolver(registrationSchema),
            mode: 'onChange',
        });

    const [errorRegistration, isLoading, registration] =
        useFetch<AuthorizationData>({
            callback: async (data) => {
                if (!data) {
                    return;
                }

                await dispatch(registrationAction(data));
            },
        });

    const errorState: string | null = errorServer || errorRegistration;

    const onResetErrorServer = (): void => {
        setErrorServer(null);
    };

    const onSubmitRegistration = (data: AuthorizationData): void => {
        registration(data);
    };

    return {
        formState,
        register,
        errorState,
        isLoading,
        handleSubmit,
        onSubmitRegistration,
        onResetErrorServer,
    };
};
