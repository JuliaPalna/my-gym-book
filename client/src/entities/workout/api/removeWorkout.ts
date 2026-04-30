import axios from 'axios';

export const removeWorkout = async (id: string): Promise<void> => {
    await axios.delete(`/api/workouts/${id}`);
};
