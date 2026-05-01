import type { WorkoutBase } from '../../../entities';
import { formatDateYYYYMMDD } from '../../../utils';

export function getActiveDays(workouts: WorkoutBase[]): Set<string> {
    const workoutDate: string[] = workouts.map((workout) => {
        return formatDateYYYYMMDD(workout.startedAt);
    });

    return new Set(workoutDate);
}
