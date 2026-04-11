import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    initialValueForm,
    workoutSchema,
    type WorkoutFormValues,
} from './constants';
import { inputValueToTimestamp } from '../../utils';
import {
    createWorkoutAction,
    removeWorkoutAction,
    updateWorkoutAction,
    workoutSelector,
    type AppDispatch,
    type Workout,
} from '../../entities';
import { getWorkoutFormDefaultValues } from './utils';
import { useFetch } from '../../app/hooks';

export const useWorkoutForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const workoutData: Workout = useSelector(workoutSelector);
    const [errorServer, setErrorServer] = useState<string | null>(null);

    const isCreateNewWorkout = location.pathname === '/workout';

    const defaultValuesForm = isCreateNewWorkout
        ? initialValueForm
        : getWorkoutFormDefaultValues(workoutData, initialValueForm);

    const { register, handleSubmit, formState, control } =
        useForm<WorkoutFormValues>({
            defaultValues: defaultValuesForm,
            resolver: yupResolver(workoutSchema),
            mode: 'onChange',
            reValidateMode: 'onChange',
        });

    const [errorSaving, isSaving, saveWorkout] = useFetch<Workout>({
        callback: async (data) => {
            if (!data) {
                return;
            }

            if (isCreateNewWorkout) {
                await dispatch(createWorkoutAction(data));
                return;
            }

            await dispatch(updateWorkoutAction(data));
        },
    });

    const [errorRemoving, isRemoving, removeWorkout] = useFetch<Workout>({
        callback: async () => {
            await dispatch(removeWorkoutAction(workoutData.id));
        },
    });

    const errorState = errorServer || errorRemoving || errorSaving;

    const onSubmit = (data: WorkoutFormValues): void => {
        const result = {
            ...data,
            id: workoutData.id,
            types: data.types.map((type) => type.value),
            startedAt: inputValueToTimestamp(data.startedAt),
        };

        saveWorkout(result);
        navigate('/workouts');
    };

    const onResetErrorServer = (): void => {
        setErrorServer(null);
    };

    const onGoMainPage = (): void => {
        navigate('/');
    };
    const onRemoveWorkout = (): void => {
        removeWorkout();
        navigate('/workouts');
    };

    return {
        formState,
        register,
        errorState,
        isCreateNewWorkout,
        isSaving,
        isRemoving,
        handleSubmit,
        control,
        onSubmit,
        onRemoveWorkout,
        onResetErrorServer,
        onGoMainPage,
    };
};
