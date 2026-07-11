import { useSelector } from 'react-redux';
import { Button, ErrorMessage, Loader } from '../../shared';
import { Calendar, WorkoutsAnalytics } from '../../features';
import { useWorkoutsPage } from './useWorkoutsPage';
import { workoutsSelector, type WorkoutsPerMonth } from '../../entities';

const WorkoutsPage = (): React.JSX.Element => {
    const { workouts }: WorkoutsPerMonth = useSelector(workoutsSelector);

    const {
        isAuthorizedUser,
        selectedPeriod,
        error,
        isLoading,
        onGoForwardMonth,
        onGoBackMonth,
        onGoToCreationForm,
    } = useWorkoutsPage();

    if (!isAuthorizedUser) {
        return (
            <ErrorMessage>{`Ошибка: Доступ к данным запрещен. Требуется авторизация.`}</ErrorMessage>
        );
    }

    return (
        <>
            <section className="flex flex-col justify-around mb-8">
                <div className="m-auto max-w-sm">
                    <Calendar
                        period={selectedPeriod}
                        onGoForwardMonth={onGoForwardMonth}
                        onGoBackMonth={onGoBackMonth}
                    />
                </div>

                {isAuthorizedUser && (
                    <div className="m-auto mt-10 lg:mt-15">
                        <Button onClick={onGoToCreationForm}>
                            Создать тренировку вручную
                        </Button>
                    </div>
                )}
            </section>

            <section>
                <p className="text-center font-semibold py-1 text-xl">
                    Аналитика за месяц
                </p>

                {isLoading ? (
                    <div className="flex-center">
                        <Loader />
                    </div>
                ) : workouts.length === 0 ? (
                    <p className="text-center">
                        Нет тренировок за выбранный период
                    </p>
                ) : workouts.length > 0 && !error ? (
                    <WorkoutsAnalytics />
                ) : (
                    <ErrorMessage>{`Ошибка: Повторите запрос позже`}</ErrorMessage>
                )}
            </section>
        </>
    );
};

export default WorkoutsPage;
