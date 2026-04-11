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
import { WORKOUT_TAGS } from '../../app/constants';

export const WorkoutForm: React.FC = () => {
    const {
        formState,
        register,
        errorState,
        isCreateNewWorkout,
        isSaving,
        isRemoving,
        handleSubmit,
        control,
        onSubmit,
        onRemoveWorkout,
        onResetErrorServer,
        onGoMainPage,
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
                    error={formState.errors.startedAt?.message}
                >
                    <Input
                        {...register('startedAt', {
                            onChange: onResetErrorServer,
                        })}
                        autoComplete="off"
                        type="date"
                    />
                </FieldWrapper>

                <FieldWrapper
                    htmlFor="durationMinutes"
                    title="Продолжительность"
                    error={formState.errors.durationMinutes?.message}
                >
                    <Input
                        {...register('durationMinutes', {
                            onChange: onResetErrorServer,
                        })}
                        type="number"
                        autoComplete="off"
                    />
                </FieldWrapper>

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
                                    options={WORKOUT_TAGS}
                                    value={field.value ?? []}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                    name={field.name}
                                />
                            );
                        }}
                    />
                </FieldWrapper>

                <FieldWrapper
                    htmlFor="description"
                    title="Описание"
                    error={formState.errors.description?.message}
                >
                    <textarea
                        {...register('description', {
                            onChange: onResetErrorServer,
                        })}
                        autoComplete="off"
                        placeholder="Введите..."
                        className="block w-full h-25 px-1 py-1.5
                        bg-white text-base sm:text-sm/6
                        text-neutral-900 placeholder:text-neutral-400
                        outline-1 -outline-offset-1 outline-neutral-300
                        focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600 transition-colors"
                    />
                </FieldWrapper>

                <Button type="submit" disabled={!formState.isValid || isSaving}>
                    {isSaving ? <Loader /> : 'Сохранить'}
                </Button>

                {isCreateNewWorkout ? (
                    <Button onClick={onGoMainPage}>Отмена</Button>
                ) : (
                    <Button onClick={onRemoveWorkout} disabled={isRemoving}>
                        {isRemoving ? <Loader /> : 'Удалить'}
                    </Button>
                )}

                {errorState && <ErrorMessage>{errorState}</ErrorMessage>}
            </form>
        </>
    );
};
