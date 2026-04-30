import { useEffect, useState } from 'react';
import { fetchTypesWorkout, type TypeWorkout } from '../../../entities';
import { useFetch } from '../../../app/hooks';

export const useTypesWorkout = () => {
    const [workoutTypes, setWorkoutTypes] = useState<TypeWorkout[]>([]);

    const [error, isLoading, fetchTypes] = useFetch<TypeWorkout[]>({
        callback: async () => {
            const data = await fetchTypesWorkout();

            setWorkoutTypes(data);
        },
    });

    useEffect(() => {
        fetchTypes();
    }, []);

    return { workoutTypes, error, isLoading };
};
