import axios from 'axios';
import type { WorkoutsPerMonth } from '../types';

export const fetchWorkoutsPerMoth = async (
    startTs: number,
    endTs: number,
): Promise<WorkoutsPerMonth> => {
    const response = await axios.get(
        `/api/workouts?startTs=${startTs}&endTs=${endTs}`,
    );
    return response.data;
};
