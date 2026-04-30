import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    removeWorkoutAction,
    setWorkoutAction,
    type AppDispatch,
} from '../../entities';
import { useFetch } from '../../app/hooks';
import type { WorkoutFormValues } from '../../features';
import { updateWorkoutAction, type WorkoutActionProps } from '../../entities';
import { mapWorkoutToServer } from '../../features/WorkoutForm/utils';
import { useEffect } from 'react';

export const useWorkoutPage = () => {
    const params = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [errorFetch, isLoading, fetchWorkout] = useFetch({
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

    const stateRemove = useFetch({
        callback: async () => {
            if (!params.id) {
                return;
            }

            await dispatch(removeWorkoutAction(params.id));
            navigate('/');
        },
    });

    const [errorUpdate, isUpdating, saveWorkout] = useFetch<WorkoutActionProps>(
        {
            callback: async (data) => {
                if (!params.id || !data) {
                    return;
                }

                await dispatch(updateWorkoutAction({ id: params.id, data }));
            },
        },
    );

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
