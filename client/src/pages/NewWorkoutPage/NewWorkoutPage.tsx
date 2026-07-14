import { WorkoutForm } from '../../features';
import { ErrorMessage } from '../../shared';
import { useNewWorkoutPage } from './useNewWorkoutPage';

const NewWorkoutPage = (): React.JSX.Element => {
    const { isAuthorizedUser, isCreating, error, onCreate } =
        useNewWorkoutPage();

    if (!isAuthorizedUser) {
        return (
            <ErrorMessage>{`Ошибка: Доступ к данным запрещен. Требуется авторизация.`}</ErrorMessage>
        );
    }

    return (
        <div className="max-w-xl m-auto">
            <WorkoutForm isSubmitting={isCreating} onSubmit={onCreate} />

            {error && <ErrorMessage>{error}</ErrorMessage>}
        </div>
    );
};

export default NewWorkoutPage;
