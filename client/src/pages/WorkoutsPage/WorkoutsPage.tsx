import { Button, ErrorMessage, Loader } from '../../shared';
import { Calendar, WorkoutsAnalytics } from '../../features';
import { useWorkoutsPage } from './useWorkoutsPage';

export const WorkoutsPage: React.FC = () => {
    const {
        selectedMonth,
        error,
        isLoading,
        setSelectedMonth,
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
                        period={selectedMonth}
                        onChange={setSelectedMonth}
                    />
                </div>

                <div className="m-auto mt-10 lg:mt-20 ">
                    <Button onClick={onAddNewWorkout}>
                        Создать тренировку вручную
                    </Button>
                </div>
            </section>

            <section className="py-10">
                <WorkoutsAnalytics />
            </section>
        </>
    );
};
