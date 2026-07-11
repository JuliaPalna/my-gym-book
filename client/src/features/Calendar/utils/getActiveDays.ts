import type { WorkoutItem } from '../../../entities';
import { formatDateYYYYMMDD } from '../../../shared';

export function getActiveDays(workouts: WorkoutItem[]): Set<string> {
    const workoutDate: string[] = workouts.map((workout) => {
        return formatDateYYYYMMDD(workout.startedAt);
    });

    return new Set(workoutDate);
}
