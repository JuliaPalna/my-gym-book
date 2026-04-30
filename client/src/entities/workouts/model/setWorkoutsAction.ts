import type { Dispatch } from 'redux';
import { fetchWorkoutsPerMoth } from '../api';
import { ACTION_TYPE } from '../../../app/constants';
import type { monthlyAnalytics, SetWorkoutsPerMonthAction } from '../types';
import { calculateMonthlyAnalytics } from '../../../app/data';
import type { Workout } from '../../workout/types';

export const setWorkoutsAction = () => {
    return async (
        dispatch: Dispatch<SetWorkoutsPerMonthAction>,
    ): Promise<void> => {
        const loadedWorkouts: Workout[] | undefined =
            await fetchWorkoutsPerMoth();

        if (!loadedWorkouts) {
            return;
        }

        const workouts: Workout[] = loadedWorkouts;

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
