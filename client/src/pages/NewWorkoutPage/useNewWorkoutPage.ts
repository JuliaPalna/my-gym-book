import { useDispatch } from 'react-redux';
import { type WorkoutFormValues } from '../../features/WorkoutForm/constants';
import {
    createWorkoutAction,
    type AppDispatch,
    type WorkoutActionProps,
} from '../../entities';
import { useFetch } from '../../app/hooks';
import { mapWorkoutToServer } from '../../features/WorkoutForm/utils';

export const useNewWorkoutPage = () => {
    const dispatch = useDispatch<AppDispatch>();

    const [error, isCreating, createWorkout] = useFetch<WorkoutActionProps>({
        callback: async (data) => {
            if (!data) {
                return;
            }

            await dispatch(createWorkoutAction(data));
        },
    });

    const onCreate = (data: WorkoutFormValues): void => {
        createWorkout(mapWorkoutToServer(data));
    };

    return {
        isCreating,
        error,
        onCreate,
    };
};
