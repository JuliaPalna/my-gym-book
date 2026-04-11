import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../../../app/constants';
import type { AxiosResponseWorkout } from '../../workouts';
import type { Workout } from '../types';

export const createWorkoutApi = async (
    workout: Workout,
): Promise<AxiosResponse<AxiosResponseWorkout>> => {
    return await axios.post(`${BASE_URL}/workouts`, {
        description: workout.description,
        duration_minutes: workout.durationMinutes,
        started_at: workout.startedAt,
        types: workout.types,
    });
};
