import type { Dispatch } from 'redux';
import { fetchWorkoutsPerMoth } from '../api';
import { ACTION_TYPE } from '../../../app/constants';
import type { SetWorkoutsPerMonthAction } from '../types';
import type { PeriodProps } from '../../../features';
import { getMonthRange } from '../../../utils/date';

export const setWorkoutsAction = (period: PeriodProps) => {
    return async (
        dispatch: Dispatch<SetWorkoutsPerMonthAction>,
    ): Promise<void> => {
        const { startTs, endTs } = getMonthRange(period);

        const loadedDataPerMonth = await fetchWorkoutsPerMoth(startTs, endTs);

        dispatch({
            type: ACTION_TYPE.SET_WORKOUTS,
            payload: loadedDataPerMonth,
        });
    };
};
