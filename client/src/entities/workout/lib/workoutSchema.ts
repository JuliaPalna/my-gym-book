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
        .of(string().required('Элемент массива должен быть строкой'))
        .required('Необходимо выбрать тип тренировки')
        .min(1, 'Должно быть не менее 1'),
    startedAt: string()
        .required('Обязательное поле для заполнения')
        .matches(regexWorkoutForm.date, 'Некорректный формат даты и времени')
        .test('is-future', 'Некорректная дата', (value) => {
            if (!value) return true;
            const selectedDate = new Date(value);
            const now = new Date();
            return selectedDate <= now;
        }),
});

export type WorkoutFormValues = InferType<typeof workoutSchema>;
