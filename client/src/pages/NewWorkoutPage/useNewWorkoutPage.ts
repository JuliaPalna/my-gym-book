import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    authorizedUserSelector,
    createWorkoutAction,
    mapWorkoutToServer,
    type WorkoutActionValues,
    type WorkoutFormValues,
} from '../../entities';
import { useFetch } from '../../app/hooks';
import type { AppDispatch } from '../../app/store';
import { TYPE_ROLE_USER } from '../../app/constants';

export const useNewWorkoutPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const data = useSelector(authorizedUserSelector);

    const isAuthorizedUser =
        data.roleId === TYPE_ROLE_USER.USER ||
        data.roleId === TYPE_ROLE_USER.ADMIN;

    const [error, isCreating, createWorkout] = useFetch<WorkoutActionValues>({
        callback: async (data) => {
            if (!data) {
                return;
            }

            await dispatch(createWorkoutAction(data));
            navigate('/workouts');
        },
    });

    const onCreate = (data: WorkoutFormValues): void => {
        createWorkout(mapWorkoutToServer(data));
    };

    return {
        isAuthorizedUser,
        isCreating,
        error,
        onCreate,
    };
};
