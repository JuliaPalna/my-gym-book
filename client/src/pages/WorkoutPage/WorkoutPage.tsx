import { Button, ErrorMessage, Loader } from '../../shared';
import { WorkoutForm } from '../../features';
import { useWorkoutPage } from './useWorkoutPage';

const WorkoutPage = (): React.JSX.Element => {
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
            <div className="flex-center">
                <Loader />
            </div>
        );
    }

    if (errorFetch) {
        return <ErrorMessage>{`Ошибка: ${errorFetch}`}</ErrorMessage>;
    }

    const errorState = errorUpdate || errorRemove;

    return (
        <div className="flex-column gap-form max-w-xl m-auto">
            <WorkoutForm isSubmitting={isUpdating} onSubmit={onUpdate} />

            <Button type="submit" disabled={isRemoving} onClick={onRemove}>
                {isRemoving ? <Loader /> : 'Удалить'}
            </Button>

            {errorState && <ErrorMessage>{errorState}</ErrorMessage>}
        </div>
    );
};

export default WorkoutPage;
