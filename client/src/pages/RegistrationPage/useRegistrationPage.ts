import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    registrationAction,
    registrationSchema,
    type AuthorizationProps,
    type RegistrationProps,
} from '../../entities';
import { useFetch } from '../../app/hooks';
import type { AppDispatch } from '../../app/store';

export const useRegistrationPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const { register, handleSubmit, formState, reset } =
        useForm<RegistrationProps>({
            defaultValues: {
                login: '',
                password: '',
            },
            resolver: yupResolver(registrationSchema),
            mode: 'onChange',
        });

    const [errorRegistration, isRegistration, registration] =
        useFetch<AuthorizationProps>({
            callback: async (data) => {
                if (!data) {
                    return;
                }

                await dispatch(registrationAction(data));
                sessionStorage.setItem('authData', JSON.stringify(data));
                navigate('/');
                reset();
            },
        });

    const onSubmitRegistration = (data: AuthorizationProps): void => {
        registration(data);
    };

    return {
        formState,
        register,
        errorRegistration,
        isRegistration,
        handleSubmit,
        onSubmitRegistration,
    };
};
