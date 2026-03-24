import { useCallback, useMemo } from 'react';
import { formatDateForDisplay, getCellsListForCalendar } from './utils';
import type { calendarCellsProps, CalendarProps } from './type';
import { activityData } from '../../app/data';

export const useCalendar = ({ period, onChange }: CalendarProps) => {
    const activityDays = activityData;
    const { year, month } = period;

    const isValid = !isNaN(year) && !isNaN(month) && month >= 1 && month <= 12;

    const displayMonthYear = useMemo(() => {
        return isValid ? formatDateForDisplay(period) : 'Ошибка даты';
    }, [period, isValid]);

    const calendarCells = useMemo(() => {
        if (!isValid) {
            return [];
        }

        const initialCellsListCalendar = getCellsListForCalendar({
            year,
            month,
        });

        const cellsListCalendarWithActiveDay: calendarCellsProps =
            initialCellsListCalendar.map((cell) => {
                if (!cell || cell.day === null) {
                    return '';
                }

                const isActive = activityDays.find((item) => {
                    const date = new Date(item.date).getDate();

                    return date === cell.day;
                });

                return {
                    ...cell,
                    hasWorkout: !!isActive,
                };
            });

        return cellsListCalendarWithActiveDay;
    }, [year, month, isValid, activityDays]);

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
        displayMonthYear,
        calendarCells,
        onGoBack,
        onGoForward,
    };
};
