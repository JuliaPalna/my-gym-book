import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { workoutSchema, type workoutFormValues } from './workoutSchema';

export const useWorkoutForm = () => {
    const { register, handleSubmit, formState, control } =
        useForm<workoutFormValues>({
            defaultValues: {
                date: '',
                duration: '',
                tags: [],
                description: '',
            },
            resolver: yupResolver(workoutSchema),
            mode: 'onChange',
        });

    const [errorServer, setErrorServer] = useState<string | null>(null);

    const onResetErrorServer = (): void => {
        setErrorServer(null);
    };

    const onSubmit = (data: workoutFormValues): void => {
        console.log(data);
    };

    return {
        formState,
        register,
        errorServer,
        handleSubmit,
        onSubmit,
        onResetErrorServer,
        control,
    };
};
