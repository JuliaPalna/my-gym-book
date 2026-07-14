import { apiAxios } from '../../../shared';
import type { WorkoutsPerMonth } from '../types';

export const fetchWorkoutsPerMoth = async (
    startTs: number,
    endTs: number,
): Promise<WorkoutsPerMonth> => {
    const response = await apiAxios.get<WorkoutsPerMonth>(
        `/api/workouts?startTs=${startTs}&endTs=${endTs}`,
    );
    return response.data;
};
