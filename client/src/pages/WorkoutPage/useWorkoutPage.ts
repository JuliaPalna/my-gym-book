import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    mapWorkoutToServer,
    removeWorkoutAction,
    setWorkoutAction,
    updateWorkoutAction,
    type WorkoutActionValues,
    type WorkoutFormValues,
} from '../../entities';
import { useFetch } from '../../app/hooks';
import type { AppDispatch } from '../../app/store';

export const useWorkoutPage = () => {
    const params = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const fetchWorkoutCallback = useCallback(async () => {
        if (!params.id) {
            return;
        }

        await dispatch(setWorkoutAction(params.id));
    }, [params.id, dispatch]);

    const [errorFetch, isLoading, fetchWorkout] = useFetch({
        callback: fetchWorkoutCallback,
    });

    useEffect(() => {
        fetchWorkout();
    }, [fetchWorkout]);

    const stateRemove = useFetch({
        callback: async () => {
            if (!params.id) {
                return;
            }

            await dispatch(removeWorkoutAction(params.id));
            navigate('/workouts');
        },
    });

    const [errorUpdate, isUpdating, saveWorkout] =
        useFetch<WorkoutActionValues>({
            callback: async (data) => {
                if (!params.id || !data) {
                    return;
                }

                await dispatch(updateWorkoutAction({ id: params.id, data }));
                navigate('/workouts');
            },
        });

    const onUpdate = (data: WorkoutFormValues): void => {
        saveWorkout(mapWorkoutToServer(data));
    };

    return {
        errorFetch,
        errorUpdate,
        isUpdating,
        isLoading,
        stateRemove,
        onUpdate,
    };
};
