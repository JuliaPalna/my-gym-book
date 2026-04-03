import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
    registrationSchema,
    type RegistrationValuesProps,
} from './registrationSchema';

export const useRegistrationPage = () => {
    const { register, handleSubmit, formState } =
        useForm<RegistrationValuesProps>({
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

    const onSubmitRegistrationUser = (
        data: RegistrationValuesProps,
    ): void => {};

    const onSubmit = handleSubmit(onSubmitRegistrationUser);

    return {
        formState,
        register,
        errorServer,
        onSubmit,
        onResetErrorServer,
    };
};
