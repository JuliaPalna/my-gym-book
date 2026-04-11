import type {
    RemoveWorkoutAction,
    SetWorkoutAction,
    UpdateWorkoutAction,
} from '../model';

export interface Workout {
    id: string;
    startedAt: number;
    description: string;
    durationMinutes: number;
    types: string[];
}

export type WorkoutActions =
    | RemoveWorkoutAction
    | SetWorkoutAction
    | UpdateWorkoutAction;
