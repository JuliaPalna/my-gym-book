import { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { workoutSchema, type WorkoutFormValues } from './workoutSchema';
import { workoutSelector, type WorkoutStateProps } from '../../entities';
import { inputValueToTimestamp, timestampToInputValue } from '../../utils';

export const useWorkoutForm = () => {
    const workoutData: WorkoutStateProps = useSelector(workoutSelector);
    const [errorServer, setErrorServer] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState,
        control,
        reset,
        trigger,
        watch,
    } = useForm<WorkoutFormValues>({
        defaultValues: {
            startedAt: Date.now().toString(),
            duration: 1,
            description: '',
            types: [],
        },
        resolver: yupResolver(workoutSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
    });

    useLayoutEffect(() => {
        if (workoutData) {
            reset({
                startedAt: timestampToInputValue(
                    workoutData.startedAt || Date.now(),
                ),
                duration: workoutData.duration || 1,
                types: workoutData.types || [],
                description: workoutData.description || '',
            });

            trigger();
            watch();
        }
    }, [workoutData, reset, trigger, watch]);

    const onResetErrorServer = (): void => {
        setErrorServer(null);
    };

    const onSubmit = (data: WorkoutFormValues): void => {
        const result = {
            ...data,
            startedAt: inputValueToTimestamp(data.startedAt),
        };
        console.log(result);
    };

    return {
        control,
        formState,
        register,
        errorServer,
        handleSubmit,
        onSubmit,
        onResetErrorServer,
    };
};
