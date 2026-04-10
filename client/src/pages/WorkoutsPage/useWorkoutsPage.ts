import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFetch } from '../../app/hooks';
import { setWorkoutsAction, type AppDispatch } from '../../entities';
import type { PeriodProps } from '../../features';
import { getInitialPeriod } from './utils';

export const useWorkoutsPage = () => {
    const [selectedPeriod, setSelectedPeriod] =
        useState<PeriodProps>(getInitialPeriod());

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [error, isLoading, fetchWorkouts] = useFetch({
        callback: async () => {
            await dispatch(setWorkoutsAction());
        },
    });

    useEffect(() => {
        fetchWorkouts();
    }, [selectedPeriod]);

    const onAddNewWorkout = (): void => {
        navigate('/workout');
    };

    return {
        selectedPeriod,
        error,
        isLoading,
        setSelectedPeriod,
        onAddNewWorkout,
    };
};
