export const regexAuthorizationForm: { login: RegExp; password: RegExp } = {
    login: /^\w+$/,
    password: /^[a-zA-Z0-9#%_!]+$/,
};
