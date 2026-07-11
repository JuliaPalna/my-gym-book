import { useSelector } from 'react-redux';
import {
    workoutsSelector,
    mapperDurationByDayForBarChart,
    mapperDurationByTypeForPieChart,
    type WorkoutsPerMonth,
} from '../../entities';

export const useWorkoutsAnalytics = () => {
    const { workouts, monthlyAnalytics }: WorkoutsPerMonth =
        useSelector(workoutsSelector);

    const durationByDay = mapperDurationByDayForBarChart(workouts);
    const durationByType = !monthlyAnalytics.durationByType
        ? null
        : mapperDurationByTypeForPieChart(monthlyAnalytics.durationByType);

    return { monthlyAnalytics, durationByDay, durationByType };
};
