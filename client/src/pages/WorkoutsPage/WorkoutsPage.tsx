import type { JSX } from 'react';
import { Button } from '../../shared';
import { Calendar } from '../../features';

export const WorkoutsPage = (): JSX.Element => {
    const onAddNewWorkout = () => {};

    return (
        <>
            <h1>Тренировки</h1>

            <div></div>

            <Calendar />

            <Button onClick={onAddNewWorkout}>
                Создать тренировку вручную
            </Button>

            {/* <TrainingAnalytics /> */}
        </>
    );
};
