export const regexAuthorizationForm: { login: RegExp; password: RegExp } = {
    login: /^\w+$/,
    password: /^[a-zA-Z0-9#%_!]+$/,
};

export const regexWorkoutForm: { description: RegExp; duration: RegExp } = {
    description: /^[a-zA-Zа-яА-ЯёЁ0-9*()'".,%&*!@#$:$\s]+$/,
    duration: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
};
