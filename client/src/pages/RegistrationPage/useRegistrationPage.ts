import { useNavigate } from 'react-router-dom';
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
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const { register, handleSubmit, formState, reset } =
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

                const userAuth = await dispatch(registrationAction(data));
                sessionStorage.setItem('auth', JSON.stringify(userAuth.login));
                navigate('/');
                reset();
            },
        });

    const onSubmitRegistration = (data: AuthorizationData): void => {
        registration(data);
    };

    return {
        formState,
        register,
        errorRegistration,
        isLoading,
        handleSubmit,
        onSubmitRegistration,
    };
};
