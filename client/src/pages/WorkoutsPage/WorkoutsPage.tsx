import { useSelector } from 'react-redux';
import { Button, ErrorMessage, Loader } from '../../shared';
import { Calendar, WorkoutsAnalytics } from '../../features';
import { useWorkoutsPage } from './useWorkoutsPage';
import { workoutsSelector, type WorkoutsPerMonth } from '../../entities';

export const WorkoutsPage: React.FC = () => {
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

    return (
        <>
            <section className="h-[calc(100vh-10rem)] flex flex-col justify-around">
                <div className="m-auto max-w-sm py-1 sm:p-6 lg:px-8">
                    <Calendar
                        period={selectedPeriod}
                        onGoForwardMonth={onGoForwardMonth}
                        onGoBackMonth={onGoBackMonth}
                    />
                </div>

                {isAuthorizedUser && (
                    <div className="m-auto mt-10 lg:mt-20 ">
                        <Button onClick={onGoToCreationForm}>
                            Создать тренировку вручную
                        </Button>
                    </div>
                )}
            </section>

            <section className="py-10">
                <p>Аналитика за месяц</p>

                {isLoading ? (
                    <div className="flex justify-center">
                        <Loader />
                    </div>
                ) : error ? (
                    <ErrorMessage>{`Ошибка: ${error}`}</ErrorMessage>
                ) : workouts.length > 0 ? (
                    <WorkoutsAnalytics />
                ) : (
                    <p className="text-center">
                        Нет тренировок за выбранный период
                    </p>
                )}
            </section>
        </>
    );
};
