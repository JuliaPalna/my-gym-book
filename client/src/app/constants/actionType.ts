export const ACTION_TYPE = {
    SET_WORKOUTS: 'SET_WORKOUTS',

    SET_WORKOUT: 'SET_WORKOUT',

    SET_USERS: 'SET_USERS',
};

export type ActionType = (typeof ACTION_TYPE)[keyof typeof ACTION_TYPE];
