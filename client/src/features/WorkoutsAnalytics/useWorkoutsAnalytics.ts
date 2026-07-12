import { useMemo } from 'react';
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

    const durationByDay = useMemo(() => {
        return mapperDurationByDayForBarChart(workouts);
    }, [workouts]);

    const durationByType = useMemo(() => {
        if (!monthlyAnalytics.durationByType) {
            return null;
        }

        return mapperDurationByTypeForPieChart(monthlyAnalytics.durationByType);
    }, [monthlyAnalytics.durationByType]);

    return { monthlyAnalytics, durationByDay, durationByType };
};
