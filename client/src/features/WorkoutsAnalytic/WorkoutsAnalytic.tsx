import { useSelector } from 'react-redux';
import {
    WorkoutDurationBarChart,
    WorkoutDurationTypesPieChart,
} from './components';
import { workoutsSelector, type WorkoutsStateProps } from '../../entities';
import { Title } from '../../shared';

export const WorkoutsAnalytic = () => {
    const workoutsData: WorkoutsStateProps = useSelector(workoutsSelector);
    const { activityDays, monthStats } = workoutsData;

    const workoutDurationBarChart: { days: number[]; minutes: number[] } = {
        days: activityDays.map((day) => new Date(day.createdAt).getDate()),
        minutes: activityDays.map((date) => date.summary.totalDurationMinutes),
    };

    const workoutTypesDurationPieChart: { types: string[]; minutes: number[] } =
        !monthStats.typeDurationMinutes
            ? { types: [], minutes: [] }
            : {
                  types: Object.keys(monthStats.typeDurationMinutes),
                  minutes: Object.values(monthStats.typeDurationMinutes),
              };

    return (
        <>
            <Title>Аналитика за месяц</Title>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 ">
                <div className=" flex-1 flex flex-col gap-1 sm:gap-4">
                    <span className="font-bold text-3xl">
                        {monthStats.totalWorkout}
                    </span>
                    <span className="text-neutral-500">Итого тренировок</span>
                </div>

                <div className=" flex-1 flex flex-col  gap-1 sm:gap-4">
                    <span className="font-bold text-3xl">
                        {monthStats.averageDurationWorkout} мин
                    </span>
                    <span className="text-neutral-500">
                        Cредняя продолжительность
                    </span>
                </div>
            </div>

            <div className="mt-20 space-y-24 lg:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 mx-auto ">
                <div className="flex justify-center align-top">
                    <WorkoutDurationTypesPieChart
                        dataDuration={workoutTypesDurationPieChart}
                    />
                </div>

                <div className="flex justify-center align-top">
                    <WorkoutDurationBarChart
                        dataDuration={workoutDurationBarChart}
                    />
                </div>
            </div>
        </>
    );
};
