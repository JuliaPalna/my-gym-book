import { DurationBarChart, DurationPieChart } from './components';
import { useWorkoutsAnalytics } from './useWorkoutsAnalytics';

export const WorkoutsAnalytics = (): React.JSX.Element => {
    const { monthlyAnalytics, durationByDay, durationByType } =
        useWorkoutsAnalytics();

    return (
        <>
            <div className="mt-10 flex-column sm:flex-row gap-form ">
                <div className=" flex-1 flex-column gap-list sm:gap-form">
                    <span className="font-bold text-3xl">
                        {monthlyAnalytics.totalWorkouts}
                    </span>
                    <span>Итого тренировок</span>
                </div>

                <div className=" flex-1 flex-column gap-list sm:gap-form">
                    <span className="font-bold text-3xl">
                        {monthlyAnalytics.averageDurationWorkout} мин
                    </span>
                    <span>Средняя продолжительность</span>
                </div>
            </div>

            <div className="mt-20 space-y-24 lg:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-form mx-auto ">
                {durationByType && (
                    <div>
                        <p>Распределение нагрузки по типам</p>

                        <DurationPieChart
                            dataPie={durationByType}
                            unitName="Минуты"
                            title="Распределение нагрузки по типам"
                        />
                    </div>
                )}

                <div>
                    <p>Продолжительность тренировок по дням</p>

                    <DurationBarChart
                        dataBar={durationByDay}
                        unitName="Минуты"
                        title="Продолжительность тренировок по дням"
                    />
                </div>
            </div>
        </>
    );
};
