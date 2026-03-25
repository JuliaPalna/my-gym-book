export const regexWorkoutForm: {
    description: RegExp;
    duration: RegExp;
    createdAt: RegExp;
} = {
    description: /^[a-zA-Zа-яА-ЯёЁ0-9*()'".,%&*!@#$:$\s]+$/,
    duration: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
    createdAt: /^\d{4}-\d{2}-\d{2}$/,
};
