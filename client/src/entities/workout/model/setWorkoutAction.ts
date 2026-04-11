import type { Dispatch } from 'redux';
import { ACTION_TYPE } from '../../../app/constants';
import type { Workout } from '../types';
import type { AxiosResponse } from 'axios';
import type { AxiosResponseWorkout } from '../../workouts';
import { fetchWorkoutApi } from '../api';

export interface SetWorkoutAction {
    type: typeof ACTION_TYPE.SET_WORKOUT;
    payload: Workout;
}

export const setWorkoutAction = (id: string) => {
    return async (dispatch: Dispatch<SetWorkoutAction>): Promise<void> => {
        const loadedWorkout: AxiosResponse<AxiosResponseWorkout> =
            await fetchWorkoutApi(id);

        if (!loadedWorkout.data) {
            return;
        }

        const workout: Workout = {
            id: loadedWorkout.data.id,
            startedAt: loadedWorkout.data.started_at,
            description: loadedWorkout.data.description,
            durationMinutes: loadedWorkout.data.duration_minutes,
            types: loadedWorkout.data.types,
        };

        dispatch({
            type: ACTION_TYPE.SET_WORKOUT,
            payload: workout,
        });
    };
};
