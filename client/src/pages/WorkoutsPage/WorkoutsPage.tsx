import { useEffect, useState, type JSX } from 'react';
// import { useDispatch } from 'react-redux';
import { Button } from '../../shared';
import { Calendar, WorkoutsAnalytic } from '../../features';
import { getCurrentMonthYear } from '../../features/Calendar/utils';
import type { MonthYearProps } from './type';

export const WorkoutsPage = (): JSX.Element => {
    // const dispatch = useDispatch();
    const monthYear: MonthYearProps = getCurrentMonthYear();
    const [selectedMonth, setSelectedMonth] =
        useState<MonthYearProps>(monthYear);

    useEffect(() => {
        if (selectedMonth) {
            // dispatch(fetchWorkoutsForMonth(selectedMonth));
        }
    }, [selectedMonth]);

    const onAddNewWorkout = (): void => {};

    return (
        <>
            <h1>Тренировки</h1>

            <Calendar period={selectedMonth} onChange={setSelectedMonth} />

            <Button onClick={onAddNewWorkout}>
                Создать тренировку вручную
            </Button>

            <WorkoutsAnalytic />
        </>
    );
};
