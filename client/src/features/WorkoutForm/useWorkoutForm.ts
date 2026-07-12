import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    workoutSchema,
    workoutSelector,
    type Workout,
    type WorkoutFormValues,
} from '../../entities';
import { getDefaultValuesToWorkoutForm } from './utils';
import { initialValueForm } from './initialValueForm';
import { formatDateYYYYMMDDTHHmm } from '../../shared';

export const useWorkoutForm = () => {
    const location = useLocation();
    const workoutData: Workout = useSelector(workoutSelector);
    const navigate = useNavigate();

    const defaultValuesForm = useMemo(() => {
        if (location.pathname === '/workout') {
            const valueForm: WorkoutFormValues = { ...initialValueForm };

            const timerState: string | null =
                sessionStorage.getItem('timerState');

            if (timerState) {
                const data: { durationMinutes: number; startTimeMs: number } =
                    JSON.parse(timerState);

                valueForm.durationMinutes = data.durationMinutes || 0;
                valueForm.startedAt =
                    formatDateYYYYMMDDTHHmm(data.startTimeMs) || '';
            }

            return valueForm;
        }

        return getDefaultValuesToWorkoutForm(workoutData, initialValueForm);
    }, [location.pathname, workoutData]);

    const { register, handleSubmit, formState, control, reset } =
        useForm<WorkoutFormValues>({
            defaultValues: defaultValuesForm,
            resolver: yupResolver(workoutSchema),
            mode: 'onChange',
            reValidateMode: 'onChange',
        });

    const onResetFormAndGoMainPage = (): void => {
        reset();
        sessionStorage.removeItem('timerState');
        navigate('/workouts');
    };

    return {
        formState,
        register,
        handleSubmit,
        control,
        onResetFormAndGoMainPage,
    };
};
