import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setWorkoutAction, type AppDispatch } from '../../entities';
import { useFetch } from '../../app/hooks';

export const useWorkoutPage = () => {
    const params = useParams();
    const dispatch = useDispatch<AppDispatch>();

    const [error, isLoading, fetchWorkout] = useFetch({
        callback: async () => {
            if (!params.id) {
                return;
            }

            await dispatch(setWorkoutAction(params.id));
        },
    });

    useEffect(() => {
        fetchWorkout();
    }, [params.id]);

    return {
        params,
        error,
        isLoading,
    };
};
