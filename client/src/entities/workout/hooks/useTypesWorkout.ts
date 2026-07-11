import { useCallback, useEffect, useState } from 'react';
import { fetchTypesWorkout, type TypeWorkout } from '../../../entities';
import { useFetch } from '../../../app/hooks';

export const useTypesWorkout = () => {
    const [workoutTypes, setWorkoutTypes] = useState<TypeWorkout[]>([]);

    const fetchTypesCallback = useCallback(async () => {
        const data = await fetchTypesWorkout();

        setWorkoutTypes(data);
    }, []);

    const [error, isLoading, fetchTypes] = useFetch({
        callback: fetchTypesCallback,
    });

    useEffect(() => {
        fetchTypes();
    }, [fetchTypes]);

    return { workoutTypes, error, isLoading };
};
