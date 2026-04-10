import { DurationBarChart, DurationPieChart } from './components';
import { useWorkoutsAnalytics } from './useWorkoutsAnalytics';

export const WorkoutsAnalytics: React.FC = () => {
    const { monthlyAnalytics, durationByDay, durationByType } =
        useWorkoutsAnalytics();

    return (
        <>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 ">
                <div className=" flex-1 flex flex-col gap-1 sm:gap-4">
                    <span className="font-bold text-3xl">
                        {monthlyAnalytics.totalWorkouts}
                    </span>
                    <span className="text-neutral-500">Итого тренировок</span>
                </div>

                <div className=" flex-1 flex flex-col  gap-1 sm:gap-4">
                    <span className="font-bold text-3xl">
                        {monthlyAnalytics.averageDurationWorkout} мин
                    </span>
                    <span className="text-neutral-500">
                        Средняя продолжительность
                    </span>
                </div>
            </div>

            <div className="mt-20 space-y-24 lg:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 mx-auto ">
                {durationByType && (
                    <div className="flex justify-center align-top">
                        <DurationPieChart
                            dataPie={durationByType}
                            unitName="Минуты"
                            title="Распределение нагрузки по типам"
                        />
                    </div>
                )}

                <div className="flex justify-center align-top">
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
