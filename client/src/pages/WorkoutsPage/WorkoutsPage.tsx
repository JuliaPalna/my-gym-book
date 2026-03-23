import { useState, type JSX } from 'react';
import { Button } from '../../shared';
import { Calendar } from '../../features';

export const WorkoutsPage = (): JSX.Element => {
    const [selectedMonth, setSelectedMonth] = useState<string>('');

    const onAddNewWorkout = () => {};

    return (
        <>
            <h1>Тренировки</h1>

            <Calendar period={selectedMonth} onChange={setSelectedMonth} />

            <Button onClick={onAddNewWorkout}>
                Создать тренировку вручную
            </Button>

            {/* <TrainingAnalytics /> */}
        </>
    );
};
