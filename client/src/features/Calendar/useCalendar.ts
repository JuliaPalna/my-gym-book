import { useCallback, useMemo } from 'react';
import { formatDateForDisplay, getCellsListForCalendar } from './utils';
import type { CalendarProps } from './type';

export const useCalendar = ({ period, onChange }: CalendarProps) => {
    const { year, month } = period;

    const isValid = !isNaN(year) && !isNaN(month) && month >= 1 && month <= 12;

    const displayDate = useMemo(() => {
        return isValid ? formatDateForDisplay(period) : 'Ошибка даты';
    }, [period, isValid]);

    const calendarCells = useMemo(() => {
        if (!isValid) {
            return [];
        }

        return getCellsListForCalendar({ year, month });
    }, [year, month, isValid]);

    const onGoBack = useCallback((): void => {
        if (!isValid) {
            return;
        }

        if (month === 1) {
            onChange({ year: year - 1, month: 12 });
            return;
        }

        onChange({ ...period, month: month - 1 });
    }, [year, month, onChange, isValid, period]);

    const onGoForward = useCallback((): void => {
        if (!isValid) {
            return;
        }

        if (month === 12) {
            onChange({ year: year + 1, month: 1 });

            return;
        }

        onChange({ ...period, month: month + 1 });
    }, [year, month, onChange, isValid, period]);

    return {
        displayDate,
        calendarCells,
        onGoBack,
        onGoForward,
    };
};
