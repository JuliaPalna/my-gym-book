export const regexWorkoutForm: {
    description: RegExp;
    date: RegExp;
} = {
    description: /^[a-zA-Zа-яА-ЯёЁ0-9*()'".,%&*!@#$:$\s]+$/,
    date: /^\d{4}-\d{2}-\d{2}$/,
};
