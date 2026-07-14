import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFetch } from '../../app/hooks';
import {
    authorizationAction,
    authorizationSchema,
    type AuthorizationProps,
} from '../../entities';
import type { AppDispatch } from '../../app/store';

export const useAuthorizationPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const { register, handleSubmit, formState, reset } =
        useForm<AuthorizationProps>({
            defaultValues: {
                login: '',
                password: '',
            },
            resolver: yupResolver(authorizationSchema),
            mode: 'onChange',
        });

    const [errorAuthorization, isAuthorization, authorization] =
        useFetch<AuthorizationProps>({
            callback: async (data) => {
                if (!data) {
                    return;
                }

                await dispatch(authorizationAction(data));
                sessionStorage.setItem('authData', JSON.stringify(data));
                navigate('/');
                reset();
            },
        });

    const onSubmitAuthorization = (data: AuthorizationProps): void => {
        authorization(data);
    };

    return {
        formState,
        register,
        errorAuthorization,
        isAuthorization,
        handleSubmit,
        onSubmitAuthorization,
    };
};
