import type { JSX } from 'react';
import {
    Button,
    ErrorMessage,
    FieldWrapper,
    Input,
    SelectOptions,
} from '../../shared';
import { useWorkoutForm } from './useWorkoutForm';
import { workoutTags } from './constants';
import { transformedOptionsForSelect } from './utils';
import { Controller } from 'react-hook-form';

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
            <h1>Тренировка</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
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
                        autoComplete="off"
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

                <Button type="submit" disabled={!formState.isValid}>
                    Сохранить
                </Button>

                {errorServer && <ErrorMessage>{errorServer}</ErrorMessage>}
            </form>
        </>
    );
};
