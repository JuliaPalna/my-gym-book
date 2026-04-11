import { ErrorMessage, Loader } from '../../shared';
import { WorkoutForm } from '../../features';
import { useWorkoutPage } from './useWorkoutPage';

export const WorkoutPage: React.FC = () => {
    const { error, isLoading } = useWorkoutPage();

    if (isLoading) {
        return (
            <div className="flex justify-center">
                <Loader />
            </div>
        );
    }

    if (error) {
        return <ErrorMessage>{`Ошибка: ${error}`}</ErrorMessage>;
    }

    return <WorkoutForm />;
};
