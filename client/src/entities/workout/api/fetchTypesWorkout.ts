import axios from 'axios';
import type { TypeWorkout } from '../types';

export const fetchTypesWorkout = async (): Promise<TypeWorkout[]> => {
    const response = await axios.get(`/api/workouts/types`);
    return response.data;
};
