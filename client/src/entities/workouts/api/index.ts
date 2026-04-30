import axios from 'axios';
import type { Workout } from '../../workout/types';

export const fetchWorkoutsPerMoth = async (): Promise<Workout[]> => {
    const response = await axios.get(`/api/workouts`);
    return response.data;
};
