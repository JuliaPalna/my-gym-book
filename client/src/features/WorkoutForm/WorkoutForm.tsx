import { Controller } from 'react-hook-form';
import {
    Button,
    ErrorMessage,
    FieldWrapper,
    Input,
    Loader,
    SelectOptions,
    Title,
} from '../../shared';
import { useWorkoutForm } from './useWorkoutForm';
import type { WorkoutFormValues } from './constants';
import { useTypesWorkout } from './hooks';

interface WorkoutFormProps {
    isSubmitting: boolean;
    onSubmit: (data: WorkoutFormValues) => void;
}

export const WorkoutForm: React.FC<WorkoutFormProps> = ({
    isSubmitting,
    onSubmit,
}) => {
    const {
        workoutTypes,
        error: errorWorkoutTypes,
        isLoading: isLoadingWorkoutTypes,
    } = useTypesWorkout();

    const {
        formState,
        register,
        handleSubmit,
        control,
        onResetFormAndGoMainPage,
    } = useWorkoutForm();

    return (
        <>
            <Title>Тренировка</Title>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center gap-5
                min-h-full max-w-xl m-auto  px-1 py-12 lg:px-8"
            >
                <FieldWrapper
                    htmlFor="startedAt"
                    title="Дата"
                    error={formState.errors.date?.message}
                >
                    <Input
                        {...register('date', {})}
                        autoComplete="off"
                        type="date"
                    />
                </FieldWrapper>

                <FieldWrapper
                    htmlFor="durationMinutes"
                    title="Продолжительность (мин)"
                    error={formState.errors.durationMinutes?.message}
                >
                    <Input
                        {...register('durationMinutes', {})}
                        type="number"
                        autoComplete="off"
                    />
                </FieldWrapper>

                {isLoadingWorkoutTypes ? (
                    <Loader />
                ) : (
                    <FieldWrapper
                        htmlFor="types"
                        title="Тэги"
                        error={formState.errors.types?.message}
                    >
                        <Controller
                            name="types"
                            control={control}
                            render={({ field }) => {
                                return (
                                    <SelectOptions
                                        options={workoutTypes}
                                        value={field.value ?? []}
                                        onChange={field.onChange}
                                    />
                                );
                            }}
                        />
                    </FieldWrapper>
                )}

                {errorWorkoutTypes && (
                    <ErrorMessage>{errorWorkoutTypes}</ErrorMessage>
                )}

                <FieldWrapper
                    htmlFor="description"
                    title="Описание"
                    error={formState.errors.description?.message}
                >
                    <textarea
                        {...register('description', {})}
                        autoComplete="off"
                        placeholder="Введите..."
                        className="block w-full h-25 px-1 py-1.5
                        bg-white text-base sm:text-sm/6
                        text-neutral-900 placeholder:text-neutral-400
                        outline-1 -outline-offset-1 outline-neutral-300
                        focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600 transition-colors"
                    />
                </FieldWrapper>

                <Button
                    type="submit"
                    disabled={!formState.isValid || isSubmitting}
                >
                    {isSubmitting ? <Loader /> : 'Сохранить'}
                </Button>

                <Button onClick={onResetFormAndGoMainPage}>Отмена</Button>
            </form>
        </>
    );
};
