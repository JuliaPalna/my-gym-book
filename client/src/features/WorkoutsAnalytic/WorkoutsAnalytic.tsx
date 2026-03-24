import {
    WorkoutDurationBarChart,
    WorkoutDurationTypesPieChart,
} from './components';
import {
    workoutDurationBarChart,
    monthStats,
    workoutTypesDurationPieChart,
} from '../../app/data';

export const WorkoutsAnalytic = () => {
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
