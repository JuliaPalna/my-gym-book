import { object, string, type InferType, number, array } from 'yup';
import { regexWorkoutForm } from './regexWorkoutForm';

export const workoutSchema = object({
    durationMinutes: number()
        .required('Обязательное поле для заполнения')
        .min(1, 'Должно быть не менее 1 минуты')
        .max(240, 'Должно быть не более 240 минут'),
    description: string()
        .trim()
        .required('Обязательное поле для заполнения')
        .matches(regexWorkoutForm.description, 'Введите корректные символы')
        .max(150, 'Должно быть не более 150 символов'),
    types: array()
        .required('Необходимо выбрать тип тренировки')
        .min(1, 'Должно быть не менее 1'),
    date: string()
        .required('Обязательное поле для заполнения')
        .matches(regexWorkoutForm.date, 'Некорректная дата'),
});

export type WorkoutFormValues = InferType<typeof workoutSchema>;
