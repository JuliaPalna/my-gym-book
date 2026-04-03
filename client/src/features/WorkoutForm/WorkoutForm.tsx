import type { JSX } from 'react';
import { Controller } from 'react-hook-form';
import {
    Button,
    ErrorMessage,
    FieldWrapper,
    Input,
    SelectOptions,
    Title,
} from '../../shared';
import { useWorkoutForm } from './useWorkoutForm';
import { transformedOptionsForSelect } from './utils';
import { workoutTags } from '../../app/constants';

export const WorkoutForm = (): JSX.Element => {
    const {
        formState,
        register,
        errorServer,
        handleSubmit,
        onSubmit,
        onResetErrorServer,
        control,
    } = useWorkoutForm();

    const selectOptions = transformedOptionsForSelect({
        options: workoutTags,
    });

    return (
        <>
            <Title>Тренировка</Title>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center gap-5
                min-h-full max-w-xl m-auto  px-1 py-12 lg:px-8"
            >
                <FieldWrapper
                    htmlFor="createdAt"
                    title="Дата"
                    error={formState.errors.createdAt?.message}
                >
                    <Input
                        {...register('createdAt', {
                            onChange: onResetErrorServer,
                        })}
                        autoComplete="off"
                        type="date"
                    />
                </FieldWrapper>

                <FieldWrapper
                    htmlFor="duration"
                    title="Продолжительность"
                    error={formState.errors.duration?.message}
                >
                    <Input
                        {...register('duration', {
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
                        render={({ field }) => (
                            <SelectOptions
                                options={selectOptions}
                                value={field.value ?? []}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                name={field.name}
                            />
                        )}
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

                <Button type="submit" disabled={!formState.isValid}>
                    Сохранить
                </Button>

                {errorServer && <ErrorMessage>{errorServer}</ErrorMessage>}
            </form>
        </>
    );
};
