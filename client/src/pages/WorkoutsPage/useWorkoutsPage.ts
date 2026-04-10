import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFetch } from '../../app/hooks';
import { setWorkoutsAction, type AppDispatch } from '../../entities';
import type { MonthYearProps } from '../../features/Calendar/type';
// import { getCurrentMonthYear } from '../../features/Calendar/utils';

export const useWorkoutsPage = () => {
    const monthYear: MonthYearProps = '2026-04';
    const [selectedMonth, setSelectedMonth] =
        useState<MonthYearProps>(monthYear);

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [error, isLoading, fetchWorkouts] = useFetch({
        callback: async () => {
            await dispatch(setWorkoutsAction());
        },
    });

    useEffect(() => {
        fetchWorkouts();
    }, [selectedMonth]);

    const onAddNewWorkout = (): void => {
        navigate('/workout');
    };

    return {
        selectedMonth,
        error,
        isLoading,
        setSelectedMonth,
        onAddNewWorkout,
    };
};
