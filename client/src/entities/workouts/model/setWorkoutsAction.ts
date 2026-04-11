import type { Dispatch } from 'redux';
import type { AxiosResponse } from 'axios';
import { fetchWorkoutsPerMothApi } from '../api';
import { ACTION_TYPE } from '../../../app/constants';
import type {
    AxiosResponseWorkout,
    monthlyAnalytics,
    Workouts,
    WorkoutsPerMonth,
} from '../types';
import { calculateMonthlyAnalytics } from '../../../app/data';

export interface SetWorkoutsPerMonthAction {
    type: typeof ACTION_TYPE.SET_WORKOUTS;
    payload: WorkoutsPerMonth;
}

export const setWorkoutsAction = () => {
    return async (
        dispatch: Dispatch<SetWorkoutsPerMonthAction>,
    ): Promise<void> => {
        const loadedWorkouts: AxiosResponse<
            AxiosResponseWorkout[] | undefined
        > = await fetchWorkoutsPerMothApi();

        if (!loadedWorkouts.data) {
            return;
        }

        const workouts: Workouts = loadedWorkouts.data.map((workout) => {
            return {
                id: workout.id,
                startedAt: workout.started_at,
                durationMinutes: workout.duration_minutes,
                types: workout.types,
            };
        });

        // TODO: перенести на backend. на client получаем уже итоговые данные
        const monthlyAnalytics: monthlyAnalytics =
            calculateMonthlyAnalytics(workouts);

        dispatch({
            type: ACTION_TYPE.SET_WORKOUTS,
            payload: {
                workouts,
                monthlyAnalytics,
            },
        });
    };
};
