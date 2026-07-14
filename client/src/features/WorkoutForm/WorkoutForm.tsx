import { Controller } from 'react-hook-form';
import {
    Button,
    ErrorMessage,
    FieldWrapper,
    Form,
    Input,
    Loader,
    SelectOptions,
    Textarea,
    Title,
} from '../../shared';
import { useWorkoutForm } from './useWorkoutForm';
import { useTypesWorkout, type WorkoutFormValues } from '../../entities';

export const WorkoutForm = ({
    isSubmitting,
    onSubmit,
}: {
    isSubmitting: boolean;
    onSubmit: (data: WorkoutFormValues) => void;
}): React.JSX.Element => {
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

            <Form onSubmit={handleSubmit(onSubmit)}>
                <>
                    <FieldWrapper
                        htmlFor="startedAt"
                        title="Дата и время:"
                        error={formState.errors.startedAt?.message}
                    >
                        <Input
                            {...register('startedAt', {})}
                            autoComplete="off"
                            type="datetime-local"
                        />
                    </FieldWrapper>

                    <FieldWrapper
                        htmlFor="durationMinutes"
                        title="Продолжительность (мин):"
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
                            title="Тэги:"
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
                        title="Описание:"
                        error={formState.errors.description?.message}
                    >
                        <Textarea
                            {...register('description', {})}
                            autoComplete="off"
                        />
                    </FieldWrapper>

                    <div className="flex-column sm:flex-row gap-list">
                        <Button
                            type="submit"
                            disabled={!formState.isValid || isSubmitting}
                        >
                            {isSubmitting ? <Loader /> : 'Сохранить'}
                        </Button>

                        <Button onClick={onResetFormAndGoMainPage}>
                            Отмена
                        </Button>
                    </div>
                </>
            </Form>
        </>
    );
};
