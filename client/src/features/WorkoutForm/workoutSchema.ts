import { object, setLocale, string, type InferType, number, array } from 'yup';
import { regexWorkoutForm } from './constants';

setLocale({
    string: {
        min: 'Должно быть не менее ${min} символов',
        max: 'Должно быть не более ${max} символов',
    },
});

export const workoutSchema = object({
    duration: number()
        .required('Обязательное поле для заполнения')
        .min(1, 'Минимум 1 минута'),
    description: string()
        .trim()
        .required('Обязательное поле для заполнения')
        .matches(regexWorkoutForm.description, 'Введите корректные символы')
        .max(30),
    types: array()
        .required('Необходимо выбрать тип тренировки')
        .min(1, 'Выберите тег'),
    createdAt: string()
        .required('Обязательное поле для заполнения')
        .matches(regexWorkoutForm.createdAt, 'Некорректная дата'),
});

export type WorkoutFormValues = InferType<typeof workoutSchema>;
