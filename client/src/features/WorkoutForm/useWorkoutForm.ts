import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { workoutSchema, type workoutFormValues } from './workoutSchema';
import { workoutSelector } from '../../pages';
import type { WorkoutStateProps } from '../../app/providers';
import { inputValueToTimestamp, timestampToInputValue } from '../../utils';

export const useWorkoutForm = () => {
    const workoutData: WorkoutStateProps = useSelector(workoutSelector);

    const { register, handleSubmit, formState, control, reset } =
        useForm<workoutFormValues>({
            defaultValues: {
                createdAt: '',
                duration: 0,
                types: [],
                description: '',
            },
            resolver: yupResolver(workoutSchema),
            mode: 'onChange',
        });

    const [errorServer, setErrorServer] = useState<string | null>(null);

    useEffect(() => {
        if (workoutData) {
            reset({
                createdAt: timestampToInputValue(
                    workoutData.createdAt || Date.now(),
                ),
                duration: workoutData.duration || 0,
                types: workoutData.types || [],
                description: workoutData.description || '',
            });
        }
    }, [workoutData, reset]);

    const onResetErrorServer = (): void => {
        setErrorServer(null);
    };

    const onSubmit = (data: workoutFormValues): void => {
        const result = {
            ...data,
            createdAt: inputValueToTimestamp(data.createdAt),
        };
        console.log(result);
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
