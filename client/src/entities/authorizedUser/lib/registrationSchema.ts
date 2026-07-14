import { object, setLocale, string, ref, type InferType } from 'yup';
import { regexAuthorizationForm } from './regexAuthorizationForm';

setLocale({
    string: {
        min: 'Должно быть не менее ${min} символов',
        max: 'Должно быть не более ${max} символов',
    },
});

export const registrationSchema = object({
    login: string()
        .trim()
        .required('Обязательное поле для заполнения')
        .matches(regexAuthorizationForm.login, 'Неверный логин')
        .min(3)
        .max(10),
    password: string()
        .required('Обязательное поле для заполнения')
        .matches(regexAuthorizationForm.password, 'Неверный пароль')
        .min(5)
        .max(30),
    passwordConfirm: string()
        .required('Обязательное поле для заполнения')
        .oneOf([ref('password')], 'Пароли не совпадают'),
});

export type RegistrationProps = InferType<typeof registrationSchema>;
