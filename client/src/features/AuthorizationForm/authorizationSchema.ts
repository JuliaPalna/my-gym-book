import { object, setLocale, string, type InferType } from 'yup';
import { regexAuthorizationForm } from '../constants';

setLocale({
    string: {
        min: 'Должно быть не менее ${min} символов',
        max: 'Должно быть не более ${max} символов',
    },
});

export const authorizationSchema = object({
    login: string()
        .trim()
        .required('Обязательное поле для заполнения')
        .matches(regexAuthorizationForm.login, 'Неверный логин')
        .min(3)
        .max(10),
    password: string()
        .required()
        .matches(regexAuthorizationForm.password, 'Неверный пароль')
        .min(5)
        .max(30),
});

export type authorizationFormValues = InferType<typeof authorizationSchema>;
