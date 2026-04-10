import { useSelector } from 'react-redux';
import { Button, ErrorMessage, Loader } from '../../shared';
import { Calendar, WorkoutsAnalytics } from '../../features';
import { useWorkoutsPage } from './useWorkoutsPage';
import { workoutsSelector, type WorkoutsPerMonth } from '../../entities';

export const WorkoutsPage: React.FC = () => {
    const { workouts }: WorkoutsPerMonth = useSelector(workoutsSelector);

    const {
        selectedPeriod,
        error,
        isLoading,
        setSelectedPeriod,
        onAddNewWorkout,
    } = useWorkoutsPage();

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

    return (
        <>
            <section className="h-[calc(100vh-10rem)] flex flex-col justify-around">
                <div className="m-auto max-w-sm py-1 sm:p-6 lg:px-8">
                    <Calendar
                        period={selectedPeriod}
                        onChangePeriod={setSelectedPeriod}
                    />
                </div>

                <div className="m-auto mt-10 lg:mt-20 ">
                    <Button onClick={onAddNewWorkout}>
                        Создать тренировку вручную
                    </Button>
                </div>
            </section>

            <section className="py-10">
                <p>Аналитика за месяц</p>

                {workouts.length > 0 ? (
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
