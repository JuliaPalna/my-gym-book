import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    initialValueForm,
    workoutSchema,
    type WorkoutFormValues,
} from './constants';
import { workoutSelector, type Workout } from '../../entities';
import { getDefaultValuesToWorkoutForm } from './utils';

export const useWorkoutForm = () => {
    const location = useLocation();
    const workoutData: Workout = useSelector(workoutSelector);
    const navigate = useNavigate();

    const defaultValuesForm =
        location.pathname === '/workout'
            ? initialValueForm
            : getDefaultValuesToWorkoutForm(workoutData, initialValueForm);

    const { register, handleSubmit, formState, control, reset } =
        useForm<WorkoutFormValues>({
            defaultValues: defaultValuesForm,
            resolver: yupResolver(workoutSchema),
            mode: 'onChange',
            reValidateMode: 'onChange',
        });

    const onResetFormAndGoMainPage = (): void => {
        reset();
        navigate('/');
    };

    return {
        formState,
        register,
        handleSubmit,
        control,
        onResetFormAndGoMainPage,
    };
};
