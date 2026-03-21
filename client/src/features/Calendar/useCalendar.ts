import { useState } from 'react';
import { createCalendar, getCurrentDate } from './utils';

export const useCalendar = () => {
    const { month, year } = getCurrentDate();

    const [currentDate, setCurrentDate] = useState({ month, year });

    const dataCalendar = createCalendar({
        month: currentDate.month,
        year: currentDate.year,
    });

    const onGoBack = (): void => {
        if (currentDate.month === 0) {
            const newDataMonth: number = 11;
            const newDataYear: number = currentDate.year - 1;
            setCurrentDate({ year: newDataYear, month: newDataMonth });
            return;
        }

        const newDataMonth: number = currentDate.month - 1;
        setCurrentDate({ ...currentDate, month: newDataMonth });
    };

    const onGoForward = (): void => {
        if (currentDate.month === 11) {
            const newDataMonth: number = 0;
            const newDataYear: number = currentDate.year + 1;
            setCurrentDate({ year: newDataYear, month: newDataMonth });
            return;
        }

        const newDataMonth: number = currentDate.month + 1;
        setCurrentDate({ ...currentDate, month: newDataMonth });
    };

    return {
        currentDate,
        dataCalendar,
        onGoBack,
        onGoForward,
    };
};
