import {
    DurationBarChart,
    DurationPieChart,
    WrapperChart,
    WrapperData,
} from './components';
import { useWorkoutsAnalytics } from './useWorkoutsAnalytics';

export const WorkoutsAnalytics = (): React.JSX.Element => {
    const { monthlyAnalytics, durationByDay, durationByType } =
        useWorkoutsAnalytics();

    return (
        <>
            <div className="mt-10 flex-column sm:flex-row gap-form ">
                <WrapperData
                    description="Итого тренировок"
                    data={monthlyAnalytics.totalWorkouts}
                />

                <WrapperData
                    description="Средняя продолжительность"
                    data={`${monthlyAnalytics.averageDurationWorkout} мин`}
                />
            </div>

            <div className="mt-20 space-y-24 lg:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-form mx-auto ">
                {durationByType && (
                    <WrapperChart subtitle="Распределение нагрузки по типам">
                        <DurationPieChart
                            dataPie={durationByType}
                            unitName="Минуты"
                            title="Распределение нагрузки по типам"
                        />
                    </WrapperChart>
                )}

                <WrapperChart subtitle="Продолжительность тренировок по дням">
                    <DurationBarChart
                        dataBar={durationByDay}
                        unitName="Минуты"
                        title="Продолжительность тренировок по дням"
                    />
                </WrapperChart>
            </div>
        </>
    );
};
