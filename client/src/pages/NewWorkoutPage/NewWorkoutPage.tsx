import { WorkoutForm } from '../../features';
import { ErrorMessage } from '../../shared';
import { useNewWorkoutPage } from './useNewWorkoutPage';

export const NewWorkoutPage: React.FC = () => {
    const { isCreating, error, onCreate } = useNewWorkoutPage();

    return (
        <>
            <WorkoutForm isSubmitting={isCreating} onSubmit={onCreate} />

            <div>{error && <ErrorMessage>{error}</ErrorMessage>}</div>
        </>
    );
};
