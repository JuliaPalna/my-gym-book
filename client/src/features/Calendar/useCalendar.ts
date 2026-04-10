import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { formatDateForDisplay, getCellsListForCalendar } from './utils';
import type { CalendarCellsProps, CalendarProps } from './type';
import { workoutsSelector, type WorkoutsPerMonth } from '../../entities';

export const useCalendar = ({ period, onChange }: CalendarProps) => {
    const navigate = useNavigate();
    const workoutsPerMonth: WorkoutsPerMonth = useSelector(workoutsSelector);

    const { workouts } = workoutsPerMonth;
    const [year, month] = period.split('-').map((item) => Number(item));

    const isValid = !isNaN(year) && !isNaN(month) && month >= 1 && month <= 12;

    const displayMonthYear = useMemo(() => {
        const formatDate = formatDateForDisplay(period);

        if (!isValid || !formatDate) {
            return 'Некорректная дата';
        }

        return formatDate;
    }, [period, isValid]);

    const calendarCells = useMemo(() => {
        if (!isValid) {
            return [];
        }

        const initialCellsListCalendar = getCellsListForCalendar({
            year,
            month,
        });

        const cellsListCalendarWithActiveDay: CalendarCellsProps =
            initialCellsListCalendar.map((cell, index) => {
                if (!cell || cell.fullDate === null) {
                    return { data: '', id: index };
                }

                const isActive = workouts.find((item) => {
                    const date = new Date(item.startedAt)
                        .toISOString()
                        .split('T')[0];

                    return date === cell.fullDate;
                });

                return {
                    data: {
                        ...cell,
                        hasWorkout: !!isActive,
                    },
                    id: index,
                };
            });

        return cellsListCalendarWithActiveDay;
    }, [year, month, isValid, workouts]);

    const onGoBack = useCallback((): void => {
        if (!isValid) {
            return;
        }

        if (month === 1) {
            onChange(`${year - 1}-12`);
            return;
        }

        onChange(`${year}-${month - 1}`);
    }, [year, month, onChange, isValid]);

    const onGoForward = useCallback((): void => {
        if (!isValid) {
            return;
        }

        if (month === 12) {
            onChange(`${year + 1}-01`);
            return;
        }

        onChange(`${year}-${month + 1}`);
    }, [year, month, onChange, isValid]);

    const onDayClick = () => {
        navigate(`/workouts/1`);
    };

    return {
        displayMonthYear,
        calendarCells,
        onGoBack,
        onGoForward,
        onDayClick,
    };
};
