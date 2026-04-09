export const WORKOUT_TYPE = {
    RUN: 'RUN',
    SWIM: 'SWIM',
    BOX: 'BOX',
    LEGS: 'LEGS',
    ARMS: 'ARMS',
} as const;

export type WorkoutType = (typeof WORKOUT_TYPE)[keyof typeof WORKOUT_TYPE];

type WorkoutTags = {
    id: string;
    name: string;
}[];

export const workoutTags: WorkoutTags = [
    { id: WORKOUT_TYPE.RUN, name: 'Бег' },
    { id: WORKOUT_TYPE.SWIM, name: 'Плавание' },
    { id: WORKOUT_TYPE.BOX, name: 'Бокс' },
];
