import { useCallback, useMemo } from 'react';
import {
    formatDateForDisplay,
    formatMonth,
    getCountCellsForCalendar,
    getCurrentMonthYear,
} from './utils';
import type { CalendarProps } from './type';

export const useCalendar = ({ period, onChange }: CalendarProps) => {
    const monthYear =
        period && period.length >= 7 ? period : getCurrentMonthYear();

    const [year, month] = monthYear.split('-').map((item) => Number(item));

    const isValid = !isNaN(year) && !isNaN(month) && month >= 1 && month <= 12;

    const displayDate = useMemo(() => {
        return isValid ? formatDateForDisplay(monthYear) : 'Ошибка даты';
    }, [monthYear, isValid]);

    const calendarCells = useMemo(() => {
        if (!isValid) return [];
        return getCountCellsForCalendar({ year, month });
    }, [year, month, isValid]);

    const onGoBack = useCallback((): void => {
        if (!isValid) return;

        if (month === 1) {
            onChange(`${year - 1}-12`);
            return;
        }

        onChange(`${year}-${formatMonth(month - 1)}`);
    }, [year, month, onChange, isValid]);

    const onGoForward = useCallback((): void => {
        if (!isValid) return;

        if (month === 12) {
            onChange(`${year + 1}-01`);
            return;
        }

        onChange(`${year}-${formatMonth(month + 1)}`);
    }, [year, month, onChange, isValid]);

    return {
        displayDate,
        calendarCells,
        onGoBack,
        onGoForward,
    };
};
