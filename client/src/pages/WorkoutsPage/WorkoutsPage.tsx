import { useEffect, useState, type JSX } from 'react';
// import { useDispatch } from 'react-redux';
import { Button, Title } from '../../shared';
import { Calendar, WorkoutsAnalytic } from '../../features';
import type { MonthYearProps } from '../../features/Calendar/type';
// import { getCurrentMonthYear } from '../../features/Calendar/utils';

export const WorkoutsPage = (): JSX.Element => {
    // const dispatch = useDispatch();
    const monthYear: MonthYearProps = '2026-04';
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
            <section className="h-[calc(100vh-10rem)] flex flex-col justify-around">
                <Title>Тренировки</Title>

                <div className="m-auto max-w-sm py-1 sm:p-6 lg:px-8">
                    <Calendar
                        period={selectedMonth}
                        onChange={setSelectedMonth}
                    />
                </div>

                <div className="m-auto mt-10 lg:mt-20 ">
                    <Button onClick={onAddNewWorkout}>
                        Создать тренировку вручную
                    </Button>
                </div>
            </section>

            <section className="py-10">
                <WorkoutsAnalytic />
            </section>
        </>
    );
};
