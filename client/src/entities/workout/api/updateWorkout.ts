import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../../../app/constants';
import type { Workout } from '../types';
import type { AxiosResponseWorkout } from '../../workouts';

export const updateWorkoutApi = async (
    workout: Workout,
): Promise<AxiosResponse<AxiosResponseWorkout[]>> => {
    return await axios.put(`${BASE_URL}/workouts/${workout.id}`, {
        description: workout.description,
        duration_minutes: workout.durationMinutes,
        started_at: workout.startedAt,
        types: workout.types,
    });
};
