export const WORKOUT_TYPE = {
    swim: 'swim',
    run: 'run',
    box: 'box',
    legs: 'legs',
    arms: 'arms',
} as const;

export const WORKOUT_TAGS: {
    value: WorkoutType;
    label: string;
}[] = [
    { value: WORKOUT_TYPE.run, label: 'Бег' },
    { value: WORKOUT_TYPE.swim, label: 'Плавание' },
    { value: WORKOUT_TYPE.box, label: 'Бокс' },
    { value: WORKOUT_TYPE.legs, label: 'Ноги' },
    { value: WORKOUT_TYPE.arms, label: 'Руки' },
];

export type WorkoutType = (typeof WORKOUT_TYPE)[keyof typeof WORKOUT_TYPE];
