import axios from 'axios';
import type { Workout, WorkoutActionProps } from '../types';

export const updateWorkout = async ({
    id,
    data,
}: {
    id: string;
    data: WorkoutActionProps;
}): Promise<Workout> => {
    const response = await axios.patch(`/api/workouts/${id}`, data);
    return response.data;
};
