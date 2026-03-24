import { object, setLocale, string, type InferType, array, number } from 'yup';
import { regexWorkoutForm } from '../constants';

setLocale({
    string: {
        min: 'Должно быть не менее ${min} символов',
        max: 'Должно быть не более ${max} символов',
    },
});

export const workoutSchema = object({
    createdAt: string().required('Дата обязательна'),
    duration: number().required(),
    description: string()
        .trim()
        .required('Обязательное поле для заполнения')
        .matches(regexWorkoutForm.description, 'Введите корректные символы')
        .max(30),
    types: array()
        .required('Необходимо выбрать тип тренировки')
        .min(1, 'Выберите хотя бы один тег'),
});

export type workoutFormValues = InferType<typeof workoutSchema>;
