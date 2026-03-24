import { useState, type JSX } from 'react';
import { Button } from '../../shared';
import { Calendar, WorkoutsAnalytic } from '../../features';
import { getCurrentMonthYear } from '../../features/Calendar/utils';
import type { MonthYearProps } from './type';

export const WorkoutsPage = (): JSX.Element => {
    const monthYear: MonthYearProps = getCurrentMonthYear();

    const [selectedMonth, setSelectedMonth] =
        useState<MonthYearProps>(monthYear);

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
