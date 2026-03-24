import { useSelector } from 'react-redux';
import {
    WorkoutDurationBarChart,
    WorkoutDurationTypesPieChart,
} from './components';
import { workoutsSelector } from '../../pages';
import type { WorkoutsStateProps } from '../../app/providers';

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
        <div>
            <div>
                <span>{monthStats.totalWorkout}</span>
                <span>Тренировок</span>
            </div>
            <div>
                <span>{monthStats.averageDurationWorkout} мин</span>
                <span>Cредняя продолжительность</span>
            </div>

            <div>
                <WorkoutDurationBarChart
                    dataDuration={workoutDurationBarChart}
                />
            </div>

            <div>
                <WorkoutDurationTypesPieChart
                    dataDuration={workoutTypesDurationPieChart}
                />
            </div>
        </div>
    );
};
