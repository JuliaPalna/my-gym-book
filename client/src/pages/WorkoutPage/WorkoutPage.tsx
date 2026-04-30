import { Button, ErrorMessage, Loader } from '../../shared';
import { WorkoutForm } from '../../features';
import { useWorkoutPage } from './useWorkoutPage';

export const WorkoutPage: React.FC = () => {
    const {
        errorFetch,
        isLoading,
        errorUpdate,
        isUpdating,
        stateRemove: [errorRemove, isRemoving, onRemove],
        onUpdate,
    } = useWorkoutPage();

    if (isLoading) {
        return (
            <div className="flex justify-center">
                <Loader />
            </div>
        );
    }

    if (errorFetch) {
        return <ErrorMessage>{`Ошибка: ${errorFetch}`}</ErrorMessage>;
    }

    const errorState = errorUpdate || errorRemove;

    return (
        <>
            <WorkoutForm isSubmitting={isUpdating} onSubmit={onUpdate} />

            <Button type="submit" disabled={isRemoving} onClick={onRemove}>
                Удалить
            </Button>

            {errorState && <ErrorMessage>{errorState}</ErrorMessage>}
        </>
    );
};
